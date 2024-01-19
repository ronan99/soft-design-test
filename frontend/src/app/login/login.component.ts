import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/login/login.dto';
import { LoginService } from 'src/app/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error= []
  form: FormGroup = new FormGroup({
    email: new FormControl<string>('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl<string>('', [Validators.required]),
  });
  hide: Boolean = true;
  login(): void{

    const data = this.form.value as Login
    this.loginService.login(data).subscribe({
      next: (res) => {
        localStorage.setItem("session",  res.token)
        this.router.navigateByUrl("/app")
      },
      error: (e) => alert(e.error.message)
    });
  }



  constructor(private loginService: LoginService, private router: Router){
  }

}
