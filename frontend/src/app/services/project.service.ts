import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface Project {
  _id?: string;
  name: string;
  logoLink: string;
  shortDescription: string;
  largeDescription: string;
  // eventId: string;
  videoLink: string;
  gitHubLink: string;
  additionalLink: string;
  inspiration: string;
  whatDoesItDoes: string;
  howWeBuildIt: string;
  challengesWeRanInto: string;
  whatWeLearned: string;
  nextSteps: string;
  // teamMembers: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsUrl = 'http://localhost:8081/api/projects';

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.error.message || 'Error del servidor');
  }

  // * ----- FUNCIONES PARA BACK ----- 

  // getAllProjects(): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.projectsUrl);
  // }
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.projectsUrl}`);
  }

  getProjectById(projectId: string): Observable<Project> {
    const url = `${this.projectsUrl}/${projectId}`;
    return this.http.get<Project>(url);
  }

  addProject(projectData: Project): Observable<Project> {
    return this.http.post<Project>(`${this.projectsUrl}/create`, projectData);
  }

  editProject(projectId: string, updatedProjectData: Project): Observable<Project> {
    const url = `${this.projectsUrl}/${projectId}/edit`;
    return this.http.put<Project>(url, updatedProjectData);
  }

  deleteProject(projectId: string): Observable<any> {
    return this.http.delete(`${this.projectsUrl}/${projectId}`);
  }

}
