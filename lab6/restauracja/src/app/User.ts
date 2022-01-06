export interface Roles{
  client: boolean
  menager?: boolean
  admin?: boolean
}

export class User{

  email: string
  roles: Roles
  uid: string

  constructor(userData: any){
    this.email = userData.email
    this.uid = userData.uid
    this.roles = {client: true}
  }
}