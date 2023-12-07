import { Component } from '@angular/core';
import { EventService, AppEvent } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  newEvent: AppEvent = {
    name: '',
    coverPhoto: '',
    nAssistants: 0,
    location: '',
    modality: false, // por defecto presencial
    description: '',
    videoLink: '',
    date: new Date(), // Inicializar con la fecha actual
    isPastEvent: false,
  };

  successMessage = '';
  errorMessage = '';

  constructor(private eventService: EventService) { }

  onSubmit() {
    this.eventService.addEvent(this.newEvent)
      .subscribe(
        (response: AppEvent) => { // Asegúrate de usar AppEvent aquí
          this.successMessage = 'Event added correctly';
          console.log(response);
        },
        (error) => {
          this.errorMessage = 'Error adding event';
          console.log(error);
        }
      );
  }
}
