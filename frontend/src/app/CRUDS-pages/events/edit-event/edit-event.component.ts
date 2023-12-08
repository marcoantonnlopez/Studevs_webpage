import { Component, OnInit } from '@angular/core';
import { AppEvent } from '../../../services/event.service';
import { EventService } from '../../../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit{
  existingEvent: AppEvent = {} as AppEvent;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe(eventData => {
        this.existingEvent = eventData;
      });
    }
  }

  onSubmit() {
    // Lógica para enviar los datos actualizados al servidor
  }
}


