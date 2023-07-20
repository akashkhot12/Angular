import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environment/env';



@Injectable({
  providedIn: 'root'
})
export class EnvService {
  base_url = env.Base_URL

  constructor( private http:HttpClient) { 
    this.getJson().subscribe(data =>{
      console.log(data);
      
    })
  }

  public getJson():Observable<any>{
    return this.http.get(this.base_url)
  }
}
