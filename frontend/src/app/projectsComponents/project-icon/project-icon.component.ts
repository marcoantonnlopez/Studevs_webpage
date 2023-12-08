import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ProjectService, Project } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-icon',
  templateUrl: './project-icon.component.html',
  styleUrls: ['./project-icon.component.css']
})
export class ProjectIconComponent implements OnInit {
  @Input() project!: Project;
  @Output() projectDeleted = new EventEmitter<string>();
  miRutaEdit: string = '';
  
  constructor(private router: Router, public userService: UserService, private projectService: ProjectService) {}

  ngOnInit() {
    if (this.project && this.project._id) {
      this.miRutaEdit = '/edit-project/' + this.project._id;
    }
  }

  goToProject() {
    if (this.project && this.project._id) {
      this.router.navigate(['/project', this.project._id]);
    } else {
      console.error('No project ID available');
    }
  }

  onDelete(projectId: string) {
    this.projectService.deleteProject(projectId).subscribe({
      next: () => {
        this.projectDeleted.emit(projectId);
        location.reload();
      },
      error: (err) => {
        console.error('Error al eliminar el project:', err);
        location.reload();

      }
    });
  }
}
