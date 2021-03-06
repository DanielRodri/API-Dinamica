import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public authenticationService : AuthenticationService) { }

  ngOnInit() {
    
  }

 login(){ 
    
    this.authenticationService.SignIn(this.email, this.password);    
    
  }

}
