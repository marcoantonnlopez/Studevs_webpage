import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CloudinaryModule} from '@cloudinary/ng';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Share
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { BtnPrincipalComponent } from './shared/btn-principal/btn-principal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './shared/animations/animations.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MultiuseBtnComponent } from './shared/multiuse-btn/multiuse-btn.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './membersPages/user/user.component';
import { ExternalUserComponent } from './membersPages/external-user/external-user.component';
import { ProjectBigCardComponent } from './projectsComponents/project-big-card/project-big-card.component';
import { ProjectIconComponent } from './projectsComponents/project-icon/project-icon.component';
import { PastEventCardComponent } from './eventsComponents/past-event-card/past-event-card.component';
import { FutureEventCardComponent } from './eventsComponents/future-event-card/future-event-card.component';
import { EditBtnComponent } from './shared/edit-btn/edit-btn.component';
import { AddBtnComponent } from './shared/add-btn/add-btn.component';
import { StudevCardComponent } from './shared/studev-card/studev-card.component';
import { EventComponent } from './eventsPages/event/event.component';
import { ProjectComponent } from './projectsPages/project/project.component';
import { OnSiteTagComponent } from './shared/on-site-tag/on-site-tag.component';
import { OnLineTagComponent } from './shared/on-line-tag/on-line-tag.component';

// Auth
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    EventsComponent,
    MembersComponent,
    ProjectsComponent,
    RegisterComponent,
    HomeComponent,
    SocialMediaComponent,
    BtnPrincipalComponent,
    AnimationsComponent,
    FooterComponent,
    MultiuseBtnComponent,
    LoginComponent,
    UserComponent,
    ExternalUserComponent,
    ProjectBigCardComponent,
    ProjectIconComponent,
    PastEventCardComponent,
    FutureEventCardComponent,
    EditBtnComponent,
    AddBtnComponent,
    StudevCardComponent,
    EventComponent,
    ProjectComponent,
    OnSiteTagComponent,
    OnLineTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, //para validaciones de inputs
    BrowserAnimationsModule, //para animaciones

  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true //para que no se sobreescriba el interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
