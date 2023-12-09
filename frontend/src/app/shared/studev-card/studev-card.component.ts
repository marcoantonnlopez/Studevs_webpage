import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-studev-card',
  templateUrl: './studev-card.component.html',
  styleUrls: ['./studev-card.component.css']
})
export class StudevCardComponent implements OnInit {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter<string>();
  miRutaEdit: string = '';

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit() {
    if (this.user && this.user._id) {
      this.miRutaEdit = '/edit-user/' + this.user._id;
    }
  }

  goToUser() {
    if (this.user && this.user._id) {
      this.router.navigate(['/user', this.user._id]);
    } else {
      console.error('No user ID available');
    }
  }

  onDelete() {
    if (this.user && this.user._id) {
      this.userService.deleteUser(this.user._id).subscribe({
        next: () => {
          this.userDeleted.emit(this.user._id);
          // Considera una mejor estrategia para actualizar la lista de usuarios
          location.reload();
        },
        error: (err) => {
          console.error('Error al eliminar el usuario:', err);
        }
      });
    } else {
      console.error('Error: ID de usuario no disponible');
    }
  }
}
