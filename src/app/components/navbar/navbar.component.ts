import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(user => {
      if(user){
        this.authenticationService.userName = user.email; 
      }
    });
  }

  SignOut (){
    this.authenticationService.SignOut();
  }

}
