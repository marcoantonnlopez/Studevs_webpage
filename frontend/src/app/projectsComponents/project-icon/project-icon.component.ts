import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent {
  constructor(private router: Router) {}

  goToProject() {
    this.router.navigate(['/project']);
  }
}
