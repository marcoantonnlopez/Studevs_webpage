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

const routes: Routes = [
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  // { path: 'membersPages/user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // En solitrario
  { path: 'user', component: UserComponent },
  { path: 'event', component: EventComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
