import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ProductsComponent} from './products.component';
import {AddProductComponent} from './add-product.component';

@Component({
  selector: 'my-app',
  templateUrl: 'html/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],

})

@RouteConfig([
  {path: '/products',name: 'Products', component: ProductsComponent, useAsDefault: true},
  {path: '/addproduct', name: 'AddProduct', component: AddProductComponent},
])

export class AppComponent {
  title = "CAP Distributing";
}
