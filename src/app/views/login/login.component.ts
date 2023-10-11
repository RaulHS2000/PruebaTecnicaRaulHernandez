import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  //Proceso de loggeo de la aplicación
  login() {
    
    if (1>0) {
      this.router.navigate(['/home']);
    } else {
   
    }
  }

}
