import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee_crud';

  educationOptions =[
    '10th pass',
    'diploma',
    'graduate',
    'post graduate',
    'phD',
  ];

  ngAfterViewInIt():void{
    // this.buttontemp.nativeElement.click();
  }
}
