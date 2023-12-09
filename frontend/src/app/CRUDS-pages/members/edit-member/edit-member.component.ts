import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {
  existingUser: User = {} as User;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', userId);
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        userData => {
          console.log('User data received:', userData);
          this.existingUser = userData;
        },
        error => {
          console.error('Error loading user:', error);
          this.errorMessage = 'Error loading user: ' + error.message;
        }
      );
    }
  }
  
  onSubmit() {
    if (this.existingUser && this.existingUser._id) {
      this.userService.editUser(this.existingUser._id, this.existingUser).subscribe({
        next: () => {
          this.successMessage = 'User updated successfully';
          this.router.navigate(['/user-details', this.existingUser._id]);
        },
        error: error => {
          this.errorMessage = 'Error updating user: ' + error;
        }
      });
    } else {
      this.errorMessage = 'Error: No valid user ID';
    }
  }
}
