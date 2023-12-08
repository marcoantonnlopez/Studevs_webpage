import { Component, OnInit } from '@angular/core';
import { AppEvent, EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  existingEvent: AppEvent = {} as AppEvent;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe(
        eventData => {
          this.existingEvent = eventData;
        },
        error => {
          this.errorMessage = 'Error loading event: ' + error;
        }
      );
    }
  }

  onSubmit() {
    if (this.existingEvent && this.existingEvent._id) {
      this.eventService.editEvent(this.existingEvent._id, this.existingEvent).subscribe({
        next: () => {
          this.successMessage = 'Event updated successfully';
          // Opcional: Redirigir al usuario después de la actualización
          this.router.navigate(['/event-details', this.existingEvent._id]);
        },
        error: error => {
          this.errorMessage = 'Error updating event: ' + error;
        }
      });
    } else {
      this.errorMessage = 'Error: No valid event ID';
    }
  }
}
