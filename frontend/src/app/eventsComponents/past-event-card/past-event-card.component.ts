import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-past-event-card',
  templateUrl: './past-event-card.component.html',
  styleUrls: ['./past-event-card.component.css']
})
export class PastEventCardComponent {
  constructor(private router: Router, public userService: UserService) {}

  goToEvent() {
    this.router.navigate(['/event']);
  }
}
