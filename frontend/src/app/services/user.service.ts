import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';

interface User {
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
  private Url = 'http://localhost:8081/api/users'; // Ajusta según tu configuración

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    // Aquí podrías manejar diferentes tipos de errores
    return throwError(error.error.message || 'Error del servidor');
  }

  // signUp(userData: LoginData): Observable<any> {
  //   return this.http.post<any>(this.Url + '/login', userData);
  // }
  signUp(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.Url}/register`, user).pipe(
      catchError(this.handleError)
    );
  }

  // *Por si acaso
  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8081/api/auth/login', credentials)
        .pipe(
            tap(response => localStorage.setItem('token', response.token)),
            catchError(this.handleError)
        );
  }

  registerAndLogin(user: User): Observable<AuthResponse> {
    return this.signUp(user).pipe(
      switchMap(_ => this.login({ username: user.username, password: user.password })),
      catchError(this.handleError)
    );
  }

  // Verificar si está loggeado el usuario
  loggedIn(): Boolean {
    return !!localStorage.getItem('token'); //devuelve un true si hay token y false si noo
  }

}
