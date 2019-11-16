import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import { AngularFireAuth } from "@angular/fire/auth";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService : AuthenticationService, private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
      
  }

}
