import { Component } from '@angular/core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top-arrow',
  templateUrl: './back-to-top-arrow.component.html',
  styleUrls: ['./back-to-top-arrow.component.scss'],
})
export class BackToTopArrowComponent {
  faArrowAltCircleUp = faArrowAltCircleUp;

  toTop() {
    document.querySelector('.main-header')?.scrollIntoView();
  }
}
