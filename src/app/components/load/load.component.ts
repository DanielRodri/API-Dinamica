import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements AfterViewInit {
  @ViewChild('editor', {static: false}) editor;


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
}
