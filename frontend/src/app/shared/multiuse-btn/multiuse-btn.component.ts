import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiuse-btn',
  templateUrl: './multiuse-btn.component.html',
  styleUrls: ['./multiuse-btn.component.css']
})
export class MultiuseBtnComponent {
  // @Input() disabled = false;
  @Input() routerLink: string = '';
  @Input() buttonText: string = '';
}
