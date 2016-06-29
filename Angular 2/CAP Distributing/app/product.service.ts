import {Injectable} from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './mock-products';

@Injectable()

export class ProductService {
  getProducts() {
    return Promise.resolve(PRODUCTS);
  }

  insertProduct(product: Product) {
    Promise.resolve(PRODUCTS).then((products: Product[]) => products.push(product));
  }

}
