import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faSearch = faSearch;
  searchTerm: string = '';
  hide: boolean = true;

  @Output() search = new EventEmitter();

  searchProduct() {
    this.search.emit(this.searchTerm);
  }

  showResetBtn() {
    this.hide = false;
  }

  hideResetBtn() {
    this.hide = true;
  }
}
