import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from 'src/app/services/user.service';
import { ProjectService, Project } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
export class ProjectsComponent implements OnInit {
  miRuta: string = '/add-project';
  miTexto: string = '+ Add a project';
  projects: Project[] = [];

  constructor(public userService: UserService, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProjects()
      .subscribe(
        (projects) => {
          this.projects = projects;
        },
        (error) => {
          console.error('Error fetching projects', error);
        }
      );
  }
}
