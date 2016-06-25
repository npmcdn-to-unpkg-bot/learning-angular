import {Component} from 'angular2/core';
import {ContactListComponent} from './contacts/contact-list.component';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NewContactComponent} from './contacts/new-contact.component';
import {HttpTestComponent} from './http/http-test.component';

@Component({
    selector: 'my-app',
    template: `
      <header>
        <nav>
          <a [routerLink]="['Contacts']">Contacts</a>
          <a [routerLink]="['NewContact']">New Contact</a>
          <a [routerLink]="['HttpTest']">HTTP Requests</a>
        </nav>
      </header>
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    `,
    directives: [ContactListComponent, HttpTestComponent, ROUTER_DIRECTIVES],
    styleUrls: ['src/css/app.css'],

})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
  {path: '/http', name: 'HttpTest', component: HttpTestComponent}
])

export class AppComponent {

}
