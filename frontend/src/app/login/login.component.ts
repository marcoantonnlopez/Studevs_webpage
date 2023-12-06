import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  loginForm: FormGroup;
  // logInForm: FormGroup;

  user = {
    email: '',
    password: '',
  };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
      
  }

  logIn() {
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/user']);
        },
        err => console.log(err),
      )
    console.log(this.user);
    console.log("prueba");
  }

  // logIn() {
  //   this.authService.login(this.user).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       localStorage.setItem('token', res.token);
  //       this.router.navigate(['/user']);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log("La petición de inicio de sesión se ha completado");
  //     }
  //   });
  //   console.log(this.user);
  //   console.log("prueba");
  // }
  
//   onSubmit() {
//     this.authService.login(this.loginData).subscribe(
//       (response) => {
//         console.log('Login successful', response);
//         // Manejar la respuesta aquí, como redirigir al usuario
//       },
//       (error) => {
//         console.error('Login failed', error);
//       }
//     );
//   }
// }

// *new back
// login/login.component.ts
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { LoginData } from '../interfaces/LoginData.interface';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = "";

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       username: ['', [Validators.required]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get f() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     // Check if form is valid
//     if (this.loginForm.invalid) {
//       return;
//     }

//     // Extract the form values
//     const loginData: LoginData = this.loginForm.value;

//     // Call the AuthService to perform the login operation
//     this.authService.login(loginData).subscribe({
//       next: (response) => {
//         // If login is successful, you might want to store the token and redirect
//         console.log(response);
//         localStorage.setItem('userToken', response.token);
//         this.router.navigate(['/home']); // Modify as needed for your routing structure
//       },
//       error: (err) => {
//         // If there's an error, we'll capture and display the error message
//         this.errorMessage = err.error.message || 'An error occurred during login. Please try again.';
//       }
//     });
//   }
// }
}

