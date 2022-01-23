import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthService } from '../auth.service';
import { FireBaseServiceService } from '../fire-base-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public auth: AuthService,
    public fb: FireBaseServiceService) {}

  
  orderHistoryIds: string[] = []
  orderHistory: any | undefined
  dishesArr: any[] = []
  ngOnInit(): void {
    this.auth.getCurrentUserData().then(res=>{
      console.log(res)
    })
    this.fb.getOrderHistory$(this.auth.userData.uid).pipe(first()).subscribe((data: any) =>{
      if(data){
        this.orderHistoryIds = Object.keys(data)
        this.orderHistory = data
      }
    })
    this.fb.getDishes().pipe(first()).subscribe((dishes: any[]) =>{
      this.dishesArr= []
      for (let d in dishes){
        this.dishesArr.push(dishes[d])
      }
    })
  }

  getDishNames(orderId: string){
      // let arr: string[] = []
      let str: string = ""
      for(let item of this.orderHistory[orderId].items){
        for(let d of this.dishesArr){
          if (d.id == item){
            // arr.push(d.Name)
            str += d.Name + ", ";
            break;
          }
        }
      }
      str = str.substring(0, str.length-2);
      return str
  }


}
