import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

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

  user$!: Observable<firebase.User | null>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user$ = this.authService.getAuthState();
    this.user$.subscribe((result) => {
      if (result) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogOut() {
    this.authService.logout().then(() => {
      this.isLoggedIn = false;
      this.router.navigate(['login']);
    });
  }
}
