import { Injectable, OnInit } from '@angular/core';
import { ApiPostman } from 'src/env/env';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostmanTsService{

  base_url=ApiPostman.postman_url

 constructor( private http:HttpClient){}
  
 getJson():Observable<any>{
  return this.http.get(this.base_url)
}
}
