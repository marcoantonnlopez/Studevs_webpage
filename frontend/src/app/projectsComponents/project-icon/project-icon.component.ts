import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent {
  constructor(private router: Router, public userService: UserService) {}

  goToProject() {
    this.router.navigate(['/project']);
  }
}
