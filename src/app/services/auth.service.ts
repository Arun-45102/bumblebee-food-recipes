import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {}

  registerUser(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  setUserData(user: any, userName: string) {
    let userRef = this.afs.doc(`users/${user.uid}`);
    let userData = {
      uid: user.uid,
      email: user.email,
      userName,
    };
    return userRef.set(userData, { merge: true });
  }

  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  setLogin() {
    this.isLoggedIn.next(true);
  }

  getAuthState() {
    return this.auth.authState;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn.getValue();
  }

  logout() {
    const status = this.auth.signOut();
    return status;
  }

  setLogout() {
    return this.isLoggedIn.next(false);
  }
}
