import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  progressBar: boolean = false;

  user$!: Observable<firebase.User | null>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.user$ = this.authService.getAuthState();
    this.user$.subscribe((result) => {
      if (result) {
        this.router.navigate(['recipes']);
      }
    });
  }

  onRegister(registerForm: NgForm) {
    this.progressBar = true;
    if (registerForm.valid) {
      this.authService
        .registerUser(registerForm.value.email, registerForm.value.password)
        .then((res) => {
          this.authService
            .setUserData(res.user, registerForm.value.username)
            .then((res) => {
              registerForm.resetForm();
              Swal.fire({
                title: 'Good job!',
                text: 'Registered Successfully',
                icon: 'success',
              });
              this.sharedService.notify(
                'success',
                'Good job!',
                'Registered Successfully'
              );
              this.progressBar = false;
            });
        })
        .catch((error) => {
          this.progressBar = false;
          this.sharedService.notify('error', 'Oops...', error.message);
        });
    } else {
      this.progressBar = false;
      this.sharedService.notify(
        'error',
        'Oops...',
        'Please fill all the fields'
      );
    }
  }
}
