import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent {
  @Input() routerLink: string = '';
  @Input() buttonText: string = '';
}
