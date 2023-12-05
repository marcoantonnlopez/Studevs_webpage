import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import jwt_decode from 'jwt-decode';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const token = localStorage.getItem('token');
//     if (token && !this.isTokenExpired(token)) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }

//   private isTokenExpired(token: string): boolean {
//     const decoded: any = jwt_decode(token);
//     if (decoded.exp === undefined) return false;
//     const date = new Date(0); 
//     date.setUTCSeconds(decoded.exp);
//     return !(date.valueOf() > new Date().valueOf());
//   }
// }
