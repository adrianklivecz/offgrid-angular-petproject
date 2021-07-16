import { Component, DoCheck } from '@angular/core';
import { UserService } from '../user.service';
import {
  faShoppingCart,
  faSignInAlt,
  faDoorOpen,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  faUserPlus = faUserPlus;
  faDoorOpen = faDoorOpen;
  faShoppingCart = faShoppingCart;
  faSignInAlt = faSignInAlt;

  loggedIn?: any;
  showLogoutBtn: boolean = false;

  constructor(private userService: UserService) {}

  ngDoCheck(): void {
    this.loggedIn = localStorage.getItem('user');
    if (this.loggedIn) this.showLogoutBtn = true;
  }

  logoutUserHandler() {
    this.userService.logoutUser().subscribe();
    localStorage.removeItem('user');
  }
}
