import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
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
export class RegisterComponent {
  errorMessage = '';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: _ => {
          // Después de un registro exitoso, inicia sesión automáticamente
          const loginCredentials = {
            username: this.registerForm.value.username,
            password: this.registerForm.value.password
          };
          this.userService.login(loginCredentials).subscribe({
            next: _ => {
              // Navegación a la página del usuario después de un inicio de sesión exitoso
              this.router.navigate(['/membersPages/user']);
            },
            error: error => {
              // Manejo de errores durante el inicio de sesión
              this.errorMessage = error.error?.message || 'Error en el inicio de sesión';
              console.error('Error en el inicio de sesión', error);
            }
          });
        },
        error: error => {
          // Manejo de errores durante el registro
          this.errorMessage = error.error?.message || 'Error en el registro';
          console.error('Error en el registro', error);
        }
      });
    } else {
      console.log('Formulario no es válido');
    }
  }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     this.userService.register(this.registerForm.value).subscribe({
  //       next: _ => {
  //         // Registro exitoso, inicia sesión automáticamente
  //         const loginCredentials = {
  //           username: this.registerForm.value.username,
  //           password: this.registerForm.value.password
  //         };
  //         this.userService.login(loginCredentials).subscribe({
  //           next: response => {
  //             // Inicio de sesión exitoso, maneja la respuesta y el token si es necesario
  //             const authToken = response.token; // Asume que el servidor devuelve un token
              
  //             // Almacena el token en el almacenamiento local (local storage) o cookies según tu implementación
  //             localStorage.setItem('authToken', authToken);
              
  //             // Navega a la página del usuario después de un inicio de sesión exitoso
  //             this.router.navigate(['/membersPages/user']);
  //           },
  //           error: error => {
  //             // Manejo de errores durante el inicio de sesión
  //             this.errorMessage = error.error?.message || 'Error en el inicio de sesión';
  //             console.error('Error en el inicio de sesión', error);
  //           }
  //         });
  //       },
  //       error: error => {
  //         // Manejo de errores durante el registro
  //         this.errorMessage = error.error?.message || 'Error en el registro';
  //         console.error('Error en el registro', error);
  //       }
  //     });
  //   } else {
  //     console.log('Formulario no es válido');
  //   }
  // }
  
  // ****
  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     // Usando el método modificado para registrar y luego iniciar sesión
  //     this.userService.registerAndLogin(this.registerForm.value).subscribe({
  //       next: _ => {
  //         // Navegación a la página del usuario después de un inicio de sesión exitoso
  //         this.router.navigate(['/membersPages/user']);
  //       },
  //       error: error => {
  //         // Manejo de errores
  //         this.errorMessage = error.error?.message || 'Error en el registro';
  //         console.error('Error en el registro', error);
  //       }
  //     });
  //   } else {
  //     console.log('Formulario no es válido');
  //   }
  // }
}
