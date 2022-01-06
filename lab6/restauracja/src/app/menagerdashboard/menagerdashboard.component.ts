import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BasketInfoService } from '../basket-info.service';

@Component({
  selector: 'app-menagerdashboard',
  templateUrl: './menagerdashboard.component.html',
  styleUrls: ['./menagerdashboard.component.css']
})
export class MenagerdashboardComponent implements OnInit {

  constructor(public auth: AuthService, public basket: BasketInfoService) { }

  ngOnInit(): void {
  }


  deleteDish(idx: number) {
    
  }


}
