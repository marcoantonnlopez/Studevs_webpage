import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: any; // Tipo según tu modelo de usuario

  constructor(/* inyecta servicios si es necesario */) { }

  ngOnInit(): void {
    // Lógica para obtener la información del usuario
  }
}
