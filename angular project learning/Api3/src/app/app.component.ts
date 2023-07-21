import { Component, OnInit } from '@angular/core';
import { PostmanTsService } from 'src/service/postman.ts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Api3';
  data:any[]=[]

constructor(private ap:PostmanTsService){}
  ngOnInit(): void {
    this.getJson();
    
  }

  getJson(){
    this.ap.getJson().subscribe((res:any)=>{
      this.data = res.data;
      console.log(this.data);
      
    })

  }
}
