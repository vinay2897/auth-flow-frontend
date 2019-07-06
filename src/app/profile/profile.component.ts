import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  firstname: string;
  lastname: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  getDetails(){
    this.authService.getDetails().subscribe(res => {
      console.log(res);
      this.firstname = res["firstname"]
      this.lastname = res["lastname"]
    }, err => {
      console.log(err);
      
    })
  }

}
