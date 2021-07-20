import { Component, HostListener } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top-arrow',
  templateUrl: './back-to-top-arrow.component.html',
  styleUrls: ['./back-to-top-arrow.component.scss'],
})
export class BackToTopArrowComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;
  windowScrolled: boolean = false;

  constructor() {
    this.onWindowScroll();
  }

  toTop() {
    document.querySelector('.main-header')?.scrollIntoView();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 200) {
      this.windowScrolled = true;
    } else if (window.pageYOffset < 10) {
      this.windowScrolled = false;
    }
  }
}
