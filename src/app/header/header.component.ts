import { Component } from '@angular/core';
import {
  faUserPlus,
  faToggleOff,
  faShoppingCart,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faUserPlus = faUserPlus;
  faToggleOff = faToggleOff;
  faShoppingCart = faShoppingCart;
  faUserShield = faUserShield;
}
