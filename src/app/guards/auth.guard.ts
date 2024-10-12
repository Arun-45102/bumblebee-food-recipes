import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  let loginStatus = false;

  if (isLoggedIn == 'true') {
    loginStatus = true;
  } else {
    loginStatus = false;
    router.navigate(['login']);
  }
  return loginStatus;
};
