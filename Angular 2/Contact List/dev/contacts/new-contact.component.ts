import {Component, OnInit} from 'angular2/core';
import {ContactService} from './contact.service';
import {Contact} from './contact';
import {Router, RouteParams} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';

@Component({
  selector: 'new-contact',
  template: `
    <h1>Create an new Contact</h1>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
      <div>
        <label for="first-name">First Name:</label>
        <input type="text" id="first-name" [ngFormControl]="myForm.controls['firstName']" >
      </div>
      <div>
        <label for="last-name">Last Name:</label>
        <input type="text" id="last-name" [ngFormControl]="myForm.controls['lastName']" >
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" [ngFormControl]="myForm.controls['phone']" >
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="text" id="email" [ngFormControl]="myForm.controls['email']" >
      </div>
      <button type="submit" [disabled]="!myForm.valid" >Create Contact</button>
    </form>
  `,
  providers: [ContactService],
  styles: [`
    label {
      display: inline-block;
      width: 140px;
    }
    input {
      width: 250px;
    }
    .ng-invalid {
      border-left: 3px solid red;
    }
    .ng-valid {
      border-left: 3px solid green;
    }
  `],

})

export class NewContactComponent implements OnInit {

  myForm: ControlGroup;

  constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams, private _formBuilder: FormBuilder) {}

  ngOnInit():any {
    this.myForm = this._formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': [this._routeParams.get('lastName'), Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.required]
    });
  }

  onSubmit(value) {
    this._contactService.insertContact(value);
    this._router.navigate(['Contacts']);
  }

}
