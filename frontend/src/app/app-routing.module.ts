import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './membersPages/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './eventsPages/event/event.component';
import { ProjectComponent } from './projectsPages/project/project.component';
import { AddMemberComponent } from './CRUDS-pages/members/add-member/add-member.component';
import { AddEventComponent } from './CRUDS-pages/events/add-event/add-event.component';
import { AddProjectComponent } from './CRUDS-pages/projects/add-project/add-project.component';
import { EditMemberComponent } from './CRUDS-pages/members/edit-member/edit-member.component';
import { EditEventComponent } from './CRUDS-pages/events/edit-event/edit-event.component';
import { EditProjectComponent } from './CRUDS-pages/projects/edit-project/edit-project.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'projects', component: ProjectsComponent },
  // Login Signup
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Loggeado
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  // { path: 'event', component: EventComponent },
  { path: 'project', component: ProjectComponent },
  // CRUDS admin
  { path: 'add-member', component: AddMemberComponent, canActivate: [AuthGuard] },
  { path: 'add-event', component: AddEventComponent, canActivate: [AuthGuard] },
  { path: 'add-project', component: AddProjectComponent, canActivate: [AuthGuard] },
  // CRUD visualizar
  { path: 'event/:id', component: EventComponent },
  // CRUD editar
  { path: 'edit-event/:id', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'edit-project/:id', component: EditProjectComponent, canActivate: [AuthGuard] },
  { path: 'edit-member/:id', component: EditMemberComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
