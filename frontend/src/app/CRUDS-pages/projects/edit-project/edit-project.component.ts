import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  existingProject: Project = {} as Project;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(
        projectData => {
          this.existingProject = projectData;
        },
        error => {
          this.errorMessage = 'Error loading project: ' + error;
        }
      );
    }
  }

  onSubmit() {
    if (this.existingProject && this.existingProject._id) {
      this.projectService.editProject(this.existingProject._id, this.existingProject).subscribe({
        next: () => {
          this.successMessage = 'Project updated successfully';
          // Opcional: Redirigir al usuario después de la actualización
          this.router.navigate(['/project-details', this.existingProject._id]);
        },
        error: error => {
          this.errorMessage = 'Error updating project: ' + error;
        }
      });
    } else {
      this.errorMessage = 'Error: No valid project ID';
    }
  }
}
