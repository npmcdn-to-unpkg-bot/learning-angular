import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
  selector: 'products',
  template: `
    <h2>Products</h2>
    <div class="col-md-4 main-products" *ngFor="let product of products" >
      <h4>{{ product.name }}</h4>
      <img src="{{ product.imageUrl }}" alt="Product Image" class="product-image" >
      <a href="{{ product.amazonLink }}" class="btn btn-cap" >Buy On Amazon</a>
    </div>
  `,
  providers: [ProductService],

})

export class ProductsComponent implements OnInit {
  public products: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().then((products: Product[]) => this.products = products);
  }
}
