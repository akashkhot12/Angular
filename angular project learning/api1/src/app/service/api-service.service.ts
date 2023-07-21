import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  getApi } from 'src/environment/env';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  base_url= getApi.basicApi;

  constructor( private http:HttpClient) { 
    this.getJson().subscribe(data => {
    console.log(data)
  });
}

    public getJson():Observable<any>{
      return this.http.get(this.base_url)
    
  }
}
