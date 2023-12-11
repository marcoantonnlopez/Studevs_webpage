import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  _id?: string;
  username: string;
  password: string;
  email?: string;
  userType?: string;
  name?: string;
  lastName?: string;
  profilePhoto?: string;
  phrase?: string;
  description?: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = 'http://localhost:8081/api/users'; 

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Error del servidor');
  }

  // * ----- FUNCIONES PARA INICIAR SESIÓN Y MANTENERLA ----- 

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

  // *Por si acaso
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

  getToken() { //se usa en token interceptor
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // * ------ Add member -----
  addUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.Url}/register`, userData);
  }

  addUser2(userData: any): Observable<any> {
    return this.http.post<any>(`${this.Url}/create`, userData);
  }

  // * ------ CRUD -----
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Url}`);
  }
  
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.Url}/${userId}`);
  }
  
  editUser(userId: string, userData: User): Observable<any> {
    return this.http.put(`${this.Url}/${userId}`, userData);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.Url}/${userId}`);
  }
}
