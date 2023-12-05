import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-past-event-card',
  templateUrl: './past-event-card.component.html',
  styleUrls: ['./past-event-card.component.css']
})
export class PastEventCardComponent {
  constructor(private router: Router) {}

  goToEvent() {
    this.router.navigate(['/event']);
  }
}
