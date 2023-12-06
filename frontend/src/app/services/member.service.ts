import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

interface newUser {
  username: string;
  email: string;
  userType: string;
  name: string;
  lastName: string;
  profilePhoto: string;
  phrase: string;
  description: string;
  projects: string[];
  events: string[];
};

@Injectable({
  providedIn: 'root'
})

export class MemberService {
  private apiUrl = 'http://localhost:8081/api/users'; 

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    // Aquí podrías manejar diferentes tipos de errores
    return throwError(error.error.message || 'Error del servidor');
  }

  // * ----- FUNCIONES ----- 

  // Obtener todos los miembros
  getAllMembers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener un miembro por ID
  getMemberById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo miembro
  createMember(memberData: any): Observable<any> {
    return this.http.post(this.apiUrl, memberData);
  }

  // Actualizar un miembro por ID
  updateMember(id: string, memberData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, memberData);
  }

  // Eliminar un miembro por ID
  deleteMember(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
