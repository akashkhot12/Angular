import { Component, OnInit } from '@angular/core';
import { PostmanTsService } from 'src/service/postman.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Api2';

  data :any [] =[]; 

  constructor(private ps : PostmanTsService){}
  ngOnInit(): void {
    this.getdata()
  }
  

  getdata(){
    this.ps.getJson().subscribe(res=>{
      this.data = res.data 
      console.log(this.data);
     })
  }


}
