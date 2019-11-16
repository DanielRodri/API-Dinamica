import { Component, OnInit } from '@angular/core';
import { DinamicapiService } from '../../services/dinamicapi.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchBy: String;
  public functions: any;
  public codeFunctions: any;
  public searchFun: String;
  constructor(private dinamicapi:DinamicapiService) {
    this.searchBy = "Search By"
    
   }

  ngOnInit() {
    this.dinamicapi.getFunction().subscribe(res=>{
      this.functions = res as JSON;
      console.log(this.functions)
    })
  }

  changeOption(option:string)
  {
    this.searchBy = option;
  }

  search(){
    if(this.searchBy ==="Search By"){
      alert("Please select a filter")
    }
    else if(this.searchBy ==="Function name"){
      this.dinamicapi.getFilterByName({"name":this.searchFun}).subscribe(res=>{
        this.functions = res;
      })
    }  
    else if(this.searchBy ==="Description"){
      this.dinamicapi.getFilterByDescription({"description":this.searchFun}).subscribe(res=>{
        this.functions = res;
      })
    }
    else if(this.searchBy ==="User"){
      this.dinamicapi.getFilterByUserID({"userID":this.searchFun}).subscribe(res=>{
        this.functions = res;
      })   
    }
    else if(this.searchBy ==="Tag"){
      this.dinamicapi.getFilterByTag({"tag":this.searchFun}).subscribe(res=>{
        this.functions = res;
      })
    }
    else{
      alert("Something went wrong!! please reload the page")
    }
    

  }

  functionCode(codeFunc:any){
    this.codeFunctions = codeFunc['code'];

  }

  showAll(){
    this.dinamicapi.getFunction().subscribe(res=>{
      this.functions = res as JSON;
      console.log(this.functions)
    })
  }

}
