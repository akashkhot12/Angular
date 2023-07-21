import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './service/api-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'api1';
  data:any[]=[];


  constructor(private ApiServiceService:ApiServiceService){

  }

  ngOnInit(): void {
  this.getAppJson()
  }

  getAppJson(){
    this.ApiServiceService.getJson().subscribe(res=>{
      this.data =res.data;
      console.log(this.data);
      
    })
  }
}
