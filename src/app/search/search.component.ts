import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  faSearch = faSearch;
  faTimes = faTimes;
  searchTerm: string = '';
  show: boolean = false;

  @Output() search = new EventEmitter();

  searchProduct() {
    this.search.emit(this.searchTerm);
  }

  onTextChange(text: string) {
    this.show = text?.length > 0 ? true : false;
  }
}
