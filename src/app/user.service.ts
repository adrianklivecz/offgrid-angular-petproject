import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  registerUser(body: {}) {
    return this.http
      .post<any>('http://localhost:8080/customer', body)
      .pipe(map((results) => results));
  }

  loginUser(body: User) {
    return this.http
      .post<any>('http://localhost:8080/customer/login', body, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(map((results) => results));
  }

  logoutUser() {
    return this.http
      .get<any>('http://localhost:8080/customer/logout', {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(map((results) => results));
  }
}
