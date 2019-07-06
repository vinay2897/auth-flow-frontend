import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required])
    })
  }

  submit(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }

}
