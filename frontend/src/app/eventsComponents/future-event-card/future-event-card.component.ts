import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppEvent } from 'src/app/services/event.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-future-event-card',
  templateUrl: './future-event-card.component.html',
  styleUrls: ['./future-event-card.component.css']
})
export class FutureEventCardComponent implements OnInit {
  @Input() event!: AppEvent;
  @Output() eventDeleted = new EventEmitter<string>();
  miRutaEdit: string = '';

  constructor(private router: Router, public userService: UserService, private eventService: EventService) {}

  ngOnInit() {
    if (this.event && this.event._id) {
      this.miRutaEdit = '/edit-event/' + this.event._id;
    }
  }

  goToEvent() {
    if (this.event && this.event._id) {
      this.router.navigate(['/event', this.event._id]);
    } else {
      console.error('No event ID available');
    }
  }

  onDelete(eventId: string) {
    this.eventService.deleteEvent(eventId).subscribe({
      next: () => {
        this.eventDeleted.emit(eventId);
        // Aquí puedes decidir si recargar la página o no
      },
      error: (err) => {
        console.error('Error al eliminar el evento:', err);
      }
    });
  }
}
