import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface AppEvent {
  _id?: string;
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
export class EventService {
  private eventsUrl = 'http://localhost:8081/api/events';

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Error del servidor');
  }

  // * ----- FUNCIONES PARA BACK ----- 

  getAllEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(this.eventsUrl);
  }

  getAllEvents2(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(this.eventsUrl + '/all');
  }
  
  getEventById(eventId: string): Observable<AppEvent> {
    const url = `${this.eventsUrl}/${eventId}`;
    return this.http.get<AppEvent>(url);
  }

  addEvent(eventData: AppEvent): Observable<AppEvent> {
    return this.http.post<AppEvent>(`${this.eventsUrl}/create`, eventData);
  }

  editEvent(eventId: string, updatedEventData: AppEvent): Observable<AppEvent> {
    const url = `${this.eventsUrl}/${eventId}/edit`;
    return this.http.put<AppEvent>(url, updatedEventData);
  }

  // deleteEvent(eventId: string): Observable<any> {
  //   const url = `${this.eventsUrl}/${eventId}/delete`;
  //   return this.http.delete<any>(url);
  // }
  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete(`${this.eventsUrl}/${eventId}`);
  }

  getFutureEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(`${this.eventsUrl}/future`);
  }

  getPastEvents(): Observable<AppEvent[]> {
    return this.http.get<AppEvent[]>(`${this.eventsUrl}/past`);
  }
}
