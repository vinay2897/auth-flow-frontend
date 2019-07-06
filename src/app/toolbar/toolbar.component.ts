import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe(res => {
      console.log(res)
      if(res["code"] === 1){
        this.authService.isLoggedIn = false;
        this.router.navigate(["/signup"])
      }
    }, err => {
      console.log(err);
      
    })
  }
}
