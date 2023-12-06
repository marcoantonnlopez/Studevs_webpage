import { Component } from '@angular/core';
import { EventService, Event } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  newEvent: Event = {
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
        (response: Event) => {
          this.successMessage = 'Evento agregado exitosamente';
          console.log(response);
        },
        (error) => {
          this.errorMessage = 'Error al agregar el evento';
          console.log(error);
          
        }
      );
  }
}
