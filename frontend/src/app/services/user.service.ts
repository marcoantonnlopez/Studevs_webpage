import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';

interface User {
  // Define los campos que esperas del usuario
  username: string;
  password: string;
  email?: string;
  userType?: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/api/users'; // Ajusta según tu configuración

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    // Aquí podrías manejar diferentes tipos de errores
    return throwError(error.error.message || 'Error del servidor');
  }

  register(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8081/api/auth/login', credentials)
        .pipe(
            tap(response => localStorage.setItem('token', response.token)),
            catchError(this.handleError)
        );
  }

  registerAndLogin(user: User): Observable<AuthResponse> {
    return this.register(user).pipe(
      switchMap(_ => this.login({ username: user.username, password: user.password })),
      catchError(this.handleError)
    );
  }
}

// *new back