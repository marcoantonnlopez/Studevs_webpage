import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Manejar la respuesta aquí, como redirigir al usuario
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}

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


