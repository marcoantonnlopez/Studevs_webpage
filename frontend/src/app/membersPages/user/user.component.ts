import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  pic: string = '';
  user: any; 
  
  miRuta: string = '/user';
  miTexto: string = 'Edit profile';

  constructor() { }

  ngOnInit(): void {
    this.pic = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701684455/Users/MarcoStudev_ryoci1.jpg';
    // Lógica para obtener la información del usuario
  }
}
