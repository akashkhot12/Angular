import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { postman } from 'src/env/env';
@Injectable({
  providedIn: 'root'
})
export class PostmanTsService {

  baseUrl = postman.Api_postman

  constructor(private http:HttpClient) { 
    
  }

  getJson():Observable<object>{
    return this.http.get(this.baseUrl)
  }
}
