import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1 *ngIf="toggle">Text above button visible when toggle equals TRUE.</h1>
             <br>
             <h4>click button to toggle true/false state</h4>
             <button (click)="toggle = !toggle">Toogle is {{toggle}}</button>
             <br>
             <h1 *ngIf="!toggle">Text below button visible when toggle equals FALSE.</h1>`,
             styleUrls: ['app.component.css']
})
export class AppComponent {
  toggle = true;
}
