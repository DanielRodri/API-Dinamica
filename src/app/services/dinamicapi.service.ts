import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DinamicapiService {

  private API_URL = 'http://localhost:3000/api/web/';
  constructor(private http: HttpClient) { }

  addFunction(newfunction: any){
    return this.http.post(this.API_URL+'/functions/addFunction/', newfunction);
  }


  getFunction(){
    return this.http.get(this.API_URL+'/functions/');
  }

  getFilterByUserID (user: any){
    return this.http.post(this.API_URL+'/functions/filterByUserID', user);
  }

  getFilterByTag (tag: any){
    return this.http.post(this.API_URL+'/functions/filterByTag', tag);
  }

  getFilterByDescription (description: any){
    return this.http.post(this.API_URL+'/functions/filterByDescription', description);
  }

  getFilterByName (nameFunction: any){
    return this.http.post(this.API_URL+'/functions/filterByName', nameFunction);
  }







}
