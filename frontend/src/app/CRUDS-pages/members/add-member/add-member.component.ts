import { Component } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  newUser = {
    username: '',
    email: '',
    userType: 'miembro',
    name: '',
    lastName: '',
    profilePhoto: '',
    phrase: '',
    description: '',
    projects: [],
    events: [],
  };
  successMessage = '';
  errorMessage = '';

  constructor(private memberService: MemberService) {}

  onSubmit() {
    this.memberService.createMember(this.newUser)
    .subscribe(
      data => {
        console.log('Member added successfully', data);
        this.successMessage = 'Member added successfully!';
        this.errorMessage = '';
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      },
      error => {
        console.error('Error adding member', error);
        this.errorMessage = 'Error adding member. Please try again.';
        this.successMessage = '';
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    );
  }

}
