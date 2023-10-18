import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatIconModule],
})

export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  getErrorMessage() {
    return this.email.hasError('email') ? 'El email no es válido' : '';
  }

  //Proceso de loggeo de la aplicación
  login() {

    var email = $("#email_field").val();
    var password = $("#password_field").val();

    if(email && password){
      
      this.authService.login(email.toString(), password.toString()).subscribe(
        (response) => {
          // La llamada API fue exitosa y el usuario está autenticado.
          // Redirige al usuario a la página protegida.
          this.router.navigate(['/home']);
          console.log(response);
        },
        (error) => {
          // La llamada API falló o las credenciales son incorrectas.
          // Puedes mostrar un mensaje de error en el formulario.
          console.log(error);
        }
      );
    }

  }

}
