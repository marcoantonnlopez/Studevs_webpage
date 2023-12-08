import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, Project} from '../../services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent  implements OnInit{
  project!: Project; 
  
  // miRuta: string = '/user';
  // miTexto: string = 'Edit event';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProjectById(projectId).subscribe(project => {
        this.project = project;
      });
    }
  }

  getEmbedUrl(videoLink: string | undefined): string {
    if (videoLink && videoLink.includes('watch?v=')) {
      return videoLink.replace('watch?v=', 'embed/');
    }
    return ''; // Devuelve una cadena vacía si videoLink es undefined
  }
}
