import { Component, OnInit, Input } from '@angular/core';

//models
import { User } from '../../models/user';

//services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-author-about',
  templateUrl: './author-about.component.html',
  styleUrls: ['./author-about.component.css'],
  providers: [ UserService ]
})
export class AuthorAboutComponent implements OnInit {
  user: User = new User();
  @Input('user-id') userId: number;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserById(this.userId);
  }

  getUserById(userId: number): void {
    if (!userId) return console.log('userId is null.');

    this.userService.getUser(userId).subscribe(
      (user: User) => {
        if (user) this.user = user;
      },
      err => { console.log(err); }
    );
  }

}
