import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent {
  @Input() routerLink: string = '';
  @Input() buttonText: string = '';
}
