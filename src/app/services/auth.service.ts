import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  signUp(email: string, password: string){
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email:string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(){
    return this.fireAuth.signOut();
  }

  getUser(){
    return this.fireAuth.authState
  }

}
