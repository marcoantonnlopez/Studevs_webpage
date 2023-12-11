import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  newUser = {
    username: '',
    password: '',
    email: '',
    userType: 'miembro', // Valor predeterminado
    name: '',
    lastName: '',
    profilePhoto: '',
    phrase: '',
    description: '',
  };

  successMessage = '';
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.addUser2(this.newUser)
      .subscribe(
        (response) => { 
          this.successMessage = 'Member added successfully';
          console.log(response);
          // this.router.navigate(['/some-other-route']);
        },
        (error) => {
          this.errorMessage = 'Error adding member';
          console.log(error);
        }
      );
  }
}
