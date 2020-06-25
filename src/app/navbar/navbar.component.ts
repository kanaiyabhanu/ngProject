import { Component, OnInit } from '@angular/core';
import { PostServices } from '../services/post.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private PostServices: PostServices) {}
  public userLoggedIn: boolean = false;
  public user;
  ngOnInit() {
    this.PostServices.loggedInCurrentUser.subscribe((x) => {
      console.log(x);
      this.user = x;
    });
  }

  Logout() {
    this.PostServices.userLogout();
  }
}
