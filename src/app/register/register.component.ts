import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  test() {
    this.productService.registerUser().subscribe();
  }
}
