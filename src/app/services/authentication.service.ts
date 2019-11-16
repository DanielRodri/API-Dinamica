import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;
  public userName: String;


  constructor(private angularFireAuth: AngularFireAuth,
    public router: Router) {
     
    this.userData = angularFireAuth.authState;
    
    
  }

  /* Sign up */
  SignUp(email: string, password: string)  {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert("user created successfully!!");
        this.router.navigate(['']);
        this.userName = res.user.email;
      })
      .catch(error => {
        alert('Something is wrong: '+ error.message);
      });
         
  }

  /* Sign in */
  SignIn(email: string, password: string)  {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['']);
        this.userName = res.user.email;
      })
      .catch(err => {
        alert('Something is wrong: '+ err.message);
      });

     
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
      this.userName = "";
      
  }   

}