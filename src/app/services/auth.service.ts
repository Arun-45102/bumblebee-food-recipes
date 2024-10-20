import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<firebase.User | null>;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.getAuthState();
  }

  registerUser(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  setUserData(user: any, userName: string) {
    let userRef = this.afs.doc(`users/${user.uid}`);
    let userData = {
      uid: user.uid,
      email: user.email,
      userName,
      date: new Date(),
    };
    return userRef.set(userData, { merge: true });
  }

  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getAuthState() {
    return this.auth.authState;
  }

  logout() {
    return this.auth.signOut();
  }
}
