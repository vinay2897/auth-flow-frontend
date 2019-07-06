import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { 
    this.signupForm = new FormGroup({
      firstname: new FormControl('', [ Validators.required]),
      lastname: new FormControl('', [ Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(5), Validators.required])
    })
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.signupForm.value)
    this.authService.signup(this.signupForm.value).subscribe(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

}
