import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule],
})

export class LoginComponent {
  constructor(private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('email') ? 'El email no es válido' : '';
  }

  //Proceso de loggeo de la aplicación
  login() {

    var email = $("#email_field").val();
    var password = $("#password_field").val();
    
    if (email == "rahesa@hotmail.es" && password == "inventrh" ) {
      this.router.navigate(['/home']);
    } else {
   
    }
  }

}
