import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  registerUser(body: {}) {
    return this.http
      .post<any>('http://localhost:8080/customer', body)
      .pipe(map((results) => results));
  }

  loginUser(body: {}) {
    return this.http
      .post<any>('http://localhost:8080/customer/login', body)
      .pipe(map((results) => results));
  }
}
