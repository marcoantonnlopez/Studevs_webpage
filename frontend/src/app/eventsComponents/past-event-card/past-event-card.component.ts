import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppEvent } from 'src/app/services/event.service';

@Component({
  selector: 'app-past-event-card',
  templateUrl: './past-event-card.component.html',
  styleUrls: ['./past-event-card.component.css']
})
export class PastEventCardComponent {
  @Input() event!: AppEvent; //"!" indica que la variable no es null y va a ser asignada en un futuro por el componente padre, esto indica que va a recibir la info del evento :)

  constructor(private router: Router, public userService: UserService) {}

  goToEvent() {
    if (this.event && this.event._id) {
      this.router.navigate(['/event', this.event._id]);
    } else {
      console.error('No event ID available');
    }
  }
}
