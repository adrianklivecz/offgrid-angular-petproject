import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<any>('http://localhost:8080/products', {})
      .pipe(
        map((results) =>
          results.map((rawProduct: any) => this.convertProducts(rawProduct))
        )
      );
  }

  convertProducts(product: any) {
    const convertedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.nrOnStock,
      description: product.description,
      mainImg: product.images ? product.images[0]?.path : '',
      media: product.images ? product.images : [],
    };
    return convertedProduct;
  }
}
