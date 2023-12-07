import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from 'src/app/services/user.service';
import { EventService, AppEvent } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class EventsComponent implements OnInit {
  futureEvents: AppEvent[] = [];
  pastEvents: AppEvent[] = [];
  miRuta: string = '/add-event';
  miTexto: string = '+ Create an event';

  constructor(public userService: UserService, private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getFutureEvents().subscribe((events) => {
      this.futureEvents = events;
    });

    this.eventService.getPastEvents().subscribe((events) => {
      this.pastEvents = events;
    });
  }
}
