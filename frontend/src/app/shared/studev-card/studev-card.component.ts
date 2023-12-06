import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-studev-card',
  templateUrl: './studev-card.component.html',
  styleUrls: ['./studev-card.component.css']
})
export class StudevCardComponent {
  miIdEspecifico: string = "";
  constructor(private router: Router, public userService: UserService) {}

  goToUser() {
    this.router.navigate(['/user']);
  }
  eliminarRegistro() {
    // this.userService.deleteUser(); //hacer esta funcion en el servicio
  }
}
