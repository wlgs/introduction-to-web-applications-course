import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public auth: AuthService) { }
  
  selectedPersistence = this.auth.persistenceSetting
  ngOnInit(): void {
    console.log(this.auth?.userData)
  }

  chosenPersistence(){
    console.log(this.selectedPersistence)
    this.auth.changePersistence(this.selectedPersistence)
  }

}
