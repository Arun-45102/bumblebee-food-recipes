import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
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

  onLogin(loginForm: NgForm) {
    this.progressBar = true;
    if (loginForm.valid) {
      this.authService
        .loginUser(loginForm.value.email, loginForm.value.password)
        .then((res) => {
          this.router.navigate(['recipes']);
        })
        .catch((error) => {
          this.progressBar = false;
          this.sharedService.notify('error', 'Oops..', error.message);
        });
    } else {
      this.progressBar = false;
      this.sharedService.notify(
        'error',
        'Oops..',
        'Please fill all the fields'
      );
    }
  }
}
