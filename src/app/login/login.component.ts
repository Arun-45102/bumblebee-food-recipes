import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  progressBar: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['recipes']);
    }
  }

  onLogin(loginForm: NgForm) {
    this.progressBar = true;
    if (loginForm.valid) {
      this.authService
        .loginUser(loginForm.value.email, loginForm.value.password)
        .then((res) => {
          this.authService.getAuthState().subscribe((user) => {
            const authUid: any = user?.uid;
            localStorage.setItem('uid', authUid);
            localStorage.setItem('isLoggedIn', 'true');
            this.authService.setLogin();
            this.router.navigate(['recipes']);
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
