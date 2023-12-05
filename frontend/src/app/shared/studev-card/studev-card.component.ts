import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studev-card',
  templateUrl: './studev-card.component.html',
  styleUrls: ['./studev-card.component.css']
})
export class StudevCardComponent {
  constructor(private router: Router) {}

  goToUser() {
    this.router.navigate(['/user']);
  }
}
