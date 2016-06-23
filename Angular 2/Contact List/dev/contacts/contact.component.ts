import {Component} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
  selector: 'contact',
  template: `
    <div>
      <div>
        <label for="first-name">First Name:</label>
        <input [(ngModel)]="contact.firstName" type="text">
      </div>
      <div>
        <label for="last-name">Last Name:</label>
        <input [(ngModel)]="contact.lastName" type="text">
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input [(ngModel)]="contact.phone" type="text">
      </div>
      <div>
        <label for="email">Email:</label>
        <input [(ngModel)]="contact.email" type="text">
      </div>
    </div>
  `,
  inputs: ["contact"],
  styles: [`
    label {
      display: inline-block;
      width: 140px;
    }
    input {
      width: 250px;
    }
  `],

})

export class ContactComponent {
  public contact = {};

}
