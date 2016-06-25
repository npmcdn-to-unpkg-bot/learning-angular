import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
  selector: 'contact-list',
  template: `
    <h1>Contact List</h1>
    <ul>
      <li *ngFor="#contact of contacts" (click)="onSelect(contact)" [class.clicked]="selectedContact === contact">{{ contact.firstName }} {{ contact.lastName | uppercase }}</li>
    </ul>
    <contact *ngIf="selectedContact !== null" [contact]="selectedContact"></contact>
  `,
  directives: [ContactComponent],
  providers: [ContactService],
  styleUrls: ['./src/css/contact-list.css'],

})

export class ContactListComponent implements OnInit {
  public contacts: Contact[];

  public selectedContact = null;

  constructor(private _contactService: ContactService) {}

  onSelect(contact) {
    this.selectedContact = contact;
  }

  getContacts() {
    this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
  }

  ngOnInit():any {
    this.getContacts();
  }
}
