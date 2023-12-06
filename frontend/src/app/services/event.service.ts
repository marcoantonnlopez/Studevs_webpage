import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface Event {
  name: string;
  coverPhoto?: string;
  nAssistants?: number;
  location?: string;
  modality?: boolean;
  description?: string;
  videoLink?: string;
  date: Date; 
  isPastEvent?: boolean;
}

@Injectable({
  providedIn: 'root'
})

// * ----- FUNCIONES -----
export class EventService {
  private eventsUrl = 'http://localhost:8081/api/events';

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Error del servidor');
  }

  // * ----- FUNCIONES PARA BACK ----- 

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getEventById(eventId: string): Observable<Event> {
    const url = `${this.eventsUrl}/${eventId}`;
    return this.http.get<Event>(url);
  }

  addEvent(eventData: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl + '/create', eventData);
  }

  editEvent(eventId: string, updatedEventData: Event): Observable<Event> {
    const url = `${this.eventsUrl}/${eventId}/edit`;
    return this.http.put<Event>(url, updatedEventData);
  }

  deleteEvent(eventId: string): Observable<any> {
    const url = `${this.eventsUrl}/${eventId}/delete`;
    return this.http.delete<any>(url);
  }
}
