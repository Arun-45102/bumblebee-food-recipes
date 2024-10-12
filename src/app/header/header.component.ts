import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  faBowlFood = faBowlFood;
  faCarrot = faCarrot;
  faCoffee = faCoffee;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    if (localStorage.getItem('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
    }
  }

  onLogOut() {
    this.authService
      .logout()
      .then(() => {
        localStorage.clear();
        this.authService.setLogout();
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
