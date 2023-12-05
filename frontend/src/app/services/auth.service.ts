import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/login'; // Asegúrate de que esta URL coincida con tu endpoint de backend

  constructor(private http: HttpClient) { }

  login(userData: LoginData): Observable<any> {
    return this.http.post<any>(this.loginUrl, userData);
  }
}

// *new back
// services/auth.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// // import { LoginData } from '../interfaces/loginData.interface';
// import { LoginData } from '../interfaces/LoginData.interface';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private authUrl = 'http://localhost:3000/authenticate'; // Asegúrate de que la URL coincida con tu backend

//   constructor(private http: HttpClient) {}

//   login(userData: LoginData): Observable<any> {
//     return this.http.post<any>(this.authUrl, userData);
//   }
// }
