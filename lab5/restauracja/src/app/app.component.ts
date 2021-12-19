import { Component } from '@angular/core';
import { FireBaseServiceService } from './fire-base-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restauracja';

  constructor(private fb: FireBaseServiceService){

  }
  
  
}
