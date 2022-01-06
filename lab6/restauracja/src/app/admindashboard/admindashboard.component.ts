import { Component, OnInit } from '@angular/core';
import { find, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { FireBaseServiceService } from '../fire-base-service.service';
import { Roles, User } from '../User';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(public auth: AuthService, private fb: FireBaseServiceService) { }
  
  selectedPersistence = this.auth.persistenceSetting

  selectedRoleToAdd: any
  selectedRoleToDismiss: any

  users:  User[] = []
  usersSub: Subscription | undefined

  ngOnInit(): void {
    console.log(this.auth?.userData)
    this.usersSub = this.fb.getUsers().subscribe(users=>{
      this.users = []
      for(let user of users){
        let userToAdd = new User(user.payload.val())
        console.log(user.payload.val())
        userToAdd.uid = user.payload.key || "undefined"
        this.users.push(userToAdd)
      }
    })
  }


  ngOnDestroy(): void{
    this.usersSub?.unsubscribe()
  }

  chosenPersistence(){
    console.log(this.selectedPersistence)
    this.auth.changePersistence(this.selectedPersistence)
  }

  banUser(uid: string){
    this.fb.changeUserRole(uid, 'banned', 'true')
  }
  setRole(uid: string, role: string, value: boolean){
    this.fb.changeUserRole(uid, role, String(value))
  }

  getUserRoles(uid:string): Roles | null{
    let searchedUser = this.findUserByUid(uid)
    if(searchedUser != null)
      return searchedUser.roles
    return null
  }

  findUserByUid(uid: string): User | null{
    for(let user of this.users){
      if (user.uid == uid)
        return user
    }
    return null
  }

}
