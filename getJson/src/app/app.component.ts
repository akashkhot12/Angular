import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { EnvService } from 'src/service/env.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'getJson';
  data:any[]=[];
  
constructor(private EnvService:EnvService ){}
  
  ngOnInit():void{
    this.getAppJSon()
  }

  getAppJSon(){
    this.EnvService.getJson().subscribe(res=>{
      this.data = res.data;
      console.log(this.data);
      
    })
  }
}
