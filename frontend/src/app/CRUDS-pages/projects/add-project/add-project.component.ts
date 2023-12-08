import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService, Project } from '../../../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  newProject: Project = {
    name: '',
    logoLink: '',
    shortDescription: '',
    largeDescription: '',
    videoLink: '',
    gitHubLink: '',
    additionalLink: '',
    inspiration: '',
    whatDoesItDoes: '',
    howWeBuildIt: '',
    challengesWeRanInto: '',
    whatWeLearned: '',
    nextSteps: '',
  };

  successMessage = '';
  errorMessage = '';

  constructor(private projectService: ProjectService, private router: Router) { }

  onSubmit() {
    this.projectService.addProject(this.newProject)
      .subscribe(
        (response) => {
          this.successMessage = 'Project added successfully';
          this.router.navigate(['/path-to-redirect']); // Actualizar con la ruta deseada
        },
        (error) => {
          this.errorMessage = 'Error adding project: ' + error.message;
        }
      );
  }
}
