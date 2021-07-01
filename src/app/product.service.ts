import { Injectable } from '@angular/core';

import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  populateProductList(): any {
    return fetch('http://localhost:8080/products', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((products) => products.map((element: Product) => element));
  }
}
