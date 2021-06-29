import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    this.populateProductList();
  }

  populateProductList() {
    fetch('http://localhost:8080/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((products) =>
        products.map((element: Product) => this.products.push(element))
      );
  }
}
