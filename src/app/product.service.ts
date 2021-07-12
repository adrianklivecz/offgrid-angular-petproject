import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>('http://localhost:8080/products', {}).pipe(
      map((results) => {
        return results.map((rawProduct: any) =>
          this.convertProducts(rawProduct)
        );
      })
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<any>('http://localhost:8080/products/' + id, {}).pipe(
      map((result) => {
        return this.convertProducts(result);
      })
    );
  }

  getSearchedProducts(searchItem: string): Observable<Product[]> {
    return this.http
      .post<any>('http://localhost:8080/search', { name: searchItem })
      .pipe(
        map((results) => {
          return results.map((rawProduct: any) =>
            this.convertProducts(rawProduct)
          );
        })
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

  registerUser() {
    const body = {
      email: 'john@doess2.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'asjds12345w',
    };
    return this.http.post<any>('http://localhost:8080/customer', body).pipe(
      map((results) => {
        console.log(results);
        return results;
      })
    );
  }
}
