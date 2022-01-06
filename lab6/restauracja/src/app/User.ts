export interface Roles{
  guest: boolean
  client: boolean
  menager: boolean
  admin: boolean
}

export class User{

  email: string
  roles: Roles
  uid: string

  constructor(userData: any){
    this.email = userData.email
    this.uid = userData.uid
    this.roles = {client: true, guest:true, menager:false, admin: false}
  }
}