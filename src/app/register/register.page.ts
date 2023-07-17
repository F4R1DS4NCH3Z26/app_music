import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatario"},
      {type: "pattern", message: "El email es incorrecto"}

    ],

    password: [
      {type: "required", message: "La contraeña es obligatario"},
      {type: "pattern", message: "La contraseña de tener numeros y letra por lo menos uno de estos parametros: '_.+-'"},
      {type: "minLength", message: "La contraseña debe tener un minimo de 6 caracteres"},

    ],

    name: [
      {type: "required", message: "El nombre es obligatario"},
      {type: "pattern", message: "La contraseña de tener numeros y letra por lo menos uno de estos parametros: '_.+-'"},
      {type: "minLength", message: "La contraseña debe tener un minimo de 6 caracteres"},

    ],

    lastname: [
      {type: "required", message: "La contraeña es obligatario"},
      {type: "pattern", message: "La contraseña de tener numeros y letra por lo menos uno de estos parametros: '_.+-'"},
      {type: "minLength", message: "La contraseña debe tener un minimo de 6 caracteres"},

    ]
    
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController

    
  ) {
    this.registerForm = this.formBuilder.group(
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
              Validators.pattern("^[a-zA-Z0-9_.+-]+$")

            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern("^[a-zA-Z0-9_.+-]+$")
            ]
          )
        ),
        lastname: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.pattern("^[a-zA-Z0-9_.+-]+$")
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin () {
    console.log("Volver atras")
    this.navCtrl.navigateBack("/login")

  }

  registerUser (userData:any) {
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login")
    })
  }
}