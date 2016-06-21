import {Component} from 'angular2/core';
import {TestComponent} from './test.component';


@Component ({
  selector: 'my-component',
  template: `
    <p>This is my component</p>
    <p>Hi, my name is <span [style.color]="inputElement.value === 'yes' ? 'blue' : '' ">{{ name }}</span>. <span [class.is-awesome]="inputElement.value === 'yes'">Is it working</span>?</p>
    <p>Type 'yes' in the input field.</p>
    <input class="input-field" type="text" #inputElement (keyup)="0">
    <br><br>
    <button [disabled]="inputElement.value !== 'yes'">Only Enabled if 'yes' is entered!</button>
    <test></test>
  `,
  styleUrls: ['src/css/mycomponent.css'],
  directives: [TestComponent],
})

export class MyComponentComponent {
  name = 'Chase';
}
