import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      if (credentials.email == "hola@mundo" &&
      credentials.password == "Cl4v3123.") {
        accept("login exitoso")
      } else {
        reject("Verifique sus datos")
      }
    }) 
  }

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData)
  }
}
