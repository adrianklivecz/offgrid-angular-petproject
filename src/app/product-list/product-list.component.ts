import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$: Observable<Product[]>;
  show: boolean = false;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getProducts();
  }

  searchProducts(searchTerm: string) {
    this.products$ = searchTerm
      ? this.productService.getSearchedProducts(searchTerm)
      : this.productService.getProducts();

    this.products$.pipe(take(1)).subscribe((items) => {
      this.show = items.length > 0 ? false : true;
    });
  }
}
