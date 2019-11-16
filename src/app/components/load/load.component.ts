import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

import {MatChipInputEvent} from '@angular/material/chips';

import { DinamicapiService } from '../../services/dinamicapi.service'
import {AuthenticationService} from '../../services/authentication.service';


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})

export class LoadComponent{
  @ViewChild('editor', {static: false}) editor;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  
  private description:string;
  private name:string;

  constructor(
    private dinamicapi:DinamicapiService,
    public authenticationService : AuthenticationService){}

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = [ "javascript","mvc"
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

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

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */