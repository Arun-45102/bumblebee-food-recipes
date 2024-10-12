import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  progressBar: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['recipes']);
    }
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
              this.progressBar = false;
            });
        })
        .catch((error) => {
          this.progressBar = false;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
          });
        });
    } else {
      this.progressBar = false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all the fields',
      });
    }
  }
}
