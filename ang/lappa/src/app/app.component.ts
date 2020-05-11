import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './user/services/user-details.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userDetailsService: UserDetailsService, private adalService: MsAdalAngular6Service){

  }

  ngOnInit(){
    this.userDetailsService.getAllUserDetails().subscribe(res => {
      console.log(res);
    });

    console.log(this.adalService.LoggedInUserEmail);
  }
}
