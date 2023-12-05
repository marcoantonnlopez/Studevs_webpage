import { Component, OnInit } from '@angular/core';
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
export class RegisterComponent implements OnInit {
  errorMessage = '';
  registerForm: FormGroup;

  user = {
    username: '',
    email: '' ,
    password: '',
  }

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

  //? ----- new SignUP LogIn ----
  ngOnInit(): void {
  }

  signUp() {
    this.userService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/user']);
        }
      )
    console.log(this.user);
  }
  //? ----- new SignUP LogIn ----


  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     this.userService.register(this.registerForm.value).subscribe({
  //       next: _ => {
  //         // Después de un registro exitoso, inicia sesión automáticamente
  //         const loginCredentials = {
  //           username: this.registerForm.value.username,
  //           password: this.registerForm.value.password
  //         };
  //         this.userService.login(loginCredentials).subscribe({
  //           next: _ => {
  //             // Navegación a la página del usuario después de un inicio de sesión exitoso
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

}
