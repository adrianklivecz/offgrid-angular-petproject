import { Component, OnInit } from '@angular/core';
import {
  faUserPlus,
  faToggleOff,
  faShoppingCart,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  faUserPlus = faUserPlus;
  faToggleOff = faToggleOff;
  faShoppingCart = faShoppingCart;
  faUserShield = faUserShield;

  constructor() {}

  ngOnInit(): void {}
}
