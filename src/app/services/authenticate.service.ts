import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

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
}
