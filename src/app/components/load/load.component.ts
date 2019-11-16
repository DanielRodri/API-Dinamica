import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DinamicapiService } from '../../services/dinamicapi.service'
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements AfterViewInit {
  @ViewChild('editor', {static: false}) editor;
  private description:string;
  private name:string;


  constructor(
    private dinamicapi:DinamicapiService,
    public authenticationService : AuthenticationService){}


  ngAfterViewInit() {
    
    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.editor.mode = 'javascript';
    

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function (editor) {

      }
    })
  }

  getValue() {
    console.log(this.editor.value)
    console.log(eval(this.editor.value));
  }

  addFunction(){
    if(this.name==="" || this.description === "" || this.editor.value===""){
      alert("Blank fields are not allowed")
    }
    else{
      this.dinamicapi.addFunction({"userID":this.authenticationService.userName,"description":this.description,"name":this.name,"tags":["Sumar","Matematicas"],"code":this.editor.value}).subscribe(res =>{
      var msj =res as JSON
      if (msj['status'] ==="function added!"){ 
          alert("Function added")
          this.name="";
          this.description="";
          this.editor.value="";

      }
      else{
        alert("something went wrong!! :(")
      }  
      })
    }
  }

}
