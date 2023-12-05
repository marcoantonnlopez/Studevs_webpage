import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private userService: UserService
  ) { }

  //     const tokenizeReq = req.clone({
    // }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // intercept(req, next){
    const tokenizeReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.getToken()}`
        } 
    })
    return next.handle(tokenizeReq);
  }

}


