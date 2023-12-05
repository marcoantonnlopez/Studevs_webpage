import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-future-event-card',
  templateUrl: './future-event-card.component.html',
  styleUrls: ['./future-event-card.component.css']
})

export class FutureEventCardComponent {
  constructor(private router: Router) {}

  goToEvent() {
    this.router.navigate(['/event']);
  }
}
