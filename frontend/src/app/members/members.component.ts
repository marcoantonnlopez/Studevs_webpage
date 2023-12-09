import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService, User } from 'src/app/services/user.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
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
export class MembersComponent implements OnInit {
  // users: User[] = [];
  admins: User[] = [];
  members: User[] = [];
  exAdmins: User[] = [];
  miRuta: string = '/add-member';
  miTexto: string = '+ Add a member';

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.admins = data.filter(user => user.userType === 'admin');
        this.members = data.filter(user => user.userType === 'miembro');
        this.exAdmins = data.filter(user => user.userType === 'exadmin');
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
