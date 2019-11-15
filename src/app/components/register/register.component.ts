import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  public password2: string;

  constructor(
    public authenticationService : AuthenticationService,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    if (this.password != this.password2){
        alert("The password is incorrect please try again!!");
        this.password = '';
        this.password2='';
    }else{
      this.authenticationService.SignUp(this.email, this.password);
    }
   

    
    
  }
}
