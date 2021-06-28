import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  products: Array<Product> = [];

  ngOnInit() {
    this.populateProductList();
  }

  populateProductList() {
    fetch('http://localhost:8080/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((products) =>
        products.map((product: Product) => this.products.push(product))
      );
  }
}
