import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  product: Product | undefined;
  productImages: any;
  mainImg: string = '';

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe((product: Product) => {
        this.productImages = product.media;
        this.product = product;
        this.mainImg = product.mainImg;
      });
    }
  }

  selectImg(path: string) {
    this.mainImg = path;
  }
}
