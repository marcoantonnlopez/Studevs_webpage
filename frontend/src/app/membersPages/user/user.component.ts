import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pic: string = '';
  user: User | undefined;

  miRuta: string = '/edit-user';  // Asegúrate de que esta ruta exista en tu configuración de rutas
  miTexto: string = 'Edit profile';

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pic = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701684455/Users/MarcoStudev_ryoci1.jpg';
    
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        userData => {
          this.user = userData;
        },
        error => {
          console.error('Error loading user:', error);
        }
      );
    }
  }
}
