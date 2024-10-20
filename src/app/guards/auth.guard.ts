import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(AngularFireAuth);

  return auth.authState.pipe(
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate(['login']);
        return false;
      }
    })
  );
};
