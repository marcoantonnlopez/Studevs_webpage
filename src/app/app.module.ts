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
// Share
import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { StudevCardForHomeComponent } from './home/components/studev-card-for-home/studev-card-for-home.component';
import { BtnPrincipalComponent } from './shared/btn-principal/btn-principal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './shared/animations/animations.component';

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
    StudevCardForHomeComponent,
    BtnPrincipalComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule,
    BrowserAnimationsModule, //para animaciones

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
