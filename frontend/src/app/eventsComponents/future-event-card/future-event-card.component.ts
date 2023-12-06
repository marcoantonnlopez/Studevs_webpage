import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-future-event-card',
  templateUrl: './future-event-card.component.html',
  styleUrls: ['./future-event-card.component.css']
})

export class FutureEventCardComponent {
  constructor(private router: Router, public userService: UserService) {}

  goToEvent() {
    this.router.navigate(['/event']);
  }
}
