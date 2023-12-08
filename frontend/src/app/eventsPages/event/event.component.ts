import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, AppEvent } from '../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{
  // event: AppEvent | null = null; 
  event!: AppEvent; 

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe(event => {
        this.event = event;
      });
    }
  }

  getEmbedUrl(videoLink: string | undefined): string {
    if (videoLink && videoLink.includes('watch?v=')) {
      return videoLink.replace('watch?v=', 'embed/');
    }
    return ''; // Devuelve una cadena vacía si videoLink es undefined
  }
  
  

}
