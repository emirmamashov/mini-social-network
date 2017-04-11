import { Component, OnInit } from '@angular/core';

//services
import { MyLocalStorageService } from './services/localStorage.service';
import { UserService } from './services/user.service';

//models
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit{
  constructor(
    private localStorage: MyLocalStorageService,
    private userSerivce: UserService
  ){

  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.userSerivce.getUser(1).subscribe(
      (user: User) => {
        if (user) this.localStorage.set('user', user);
      },
      err => {
        console.log(err);
      }
    );
  }
}