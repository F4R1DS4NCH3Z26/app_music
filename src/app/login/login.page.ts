import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;
  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatario"},
      {type: "pattern", message: "El email es incorrecto"}

    ],

    password: [
      {type: "required", message: "La contraeña es obligatario"},
      {type: "pattern", message: "La contraseña de tener numeros y letra por lo menos uno de estos parametros: '_.+-'"},
      {type: "minLength", message: "La contraseña debe tener un minimo de 6 caracteres"},
      {type: "maxLength", message: "La contraeña solo puede tener un maximo de 50 caracteres"},

    ]
    
  }

  errorMessage: String = '';
  constructor(private formBuilder: FormBuilder, 
    private authService: AuthenticateService,
    private navCtlr: NavController,
    private storage: Storage) { 
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
            ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(50),
              Validators.pattern("^[a-zA-Z0-9_.+-]+$")

            ]
          )
        )
      }
    )
  }

  

  ngOnInit() {
    
  }

  loginUser(credentials: any) {
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.navCtlr.navigateForward("/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
      alert(this.errorMessage)
      
    })
    
  }

  goToRegister() {
    this.navCtlr.navigateForward("/register")
  }
}
