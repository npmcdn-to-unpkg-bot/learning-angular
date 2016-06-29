import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';


@Component({
  selector: 'add-product',
  templateUrl: 'html/add-product.component.html',
  providers: [ProductService],

})

export class AddProductComponent implements OnInit {
  newProduct: Product;

  constructor(private _productService: ProductService) {}

  onSubmit() {
    this._productService.insertProduct(this.newProduct);
  }

  ngOnInit() {
    this.newProduct = {imageUrl: '', name: '', amazonLink: '' };
  }
}
