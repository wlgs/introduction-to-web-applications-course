import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: AuthService) { }


  selectedPersistence = this.auth.persistenceSetting
  ngOnInit(): void {
    console.log(this.auth.userData)
  }

  chosenPersistence(){
    console.log(this.selectedPersistence)
    this.auth.changePersistence(this.selectedPersistence)
  }

}
