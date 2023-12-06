import { Injectable } from '@angular/core';

interface Project {
  id: String;
  name: String;
  logoLink: String;
  shortDescription: String;
  largeDescription: String;
  skills: [10];
  event:String[];
  videoLink: String;
  gitHubLink: String;
  AdditionaLink: String;
  Inspiration: String;
  whatDoesItDoes: String;
  howWeBuildIt: String;
  challengesWeRanInto: String;
  whatWeLearned: String;
  nextSteps: String;
  teamMembers: String[];
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
}
