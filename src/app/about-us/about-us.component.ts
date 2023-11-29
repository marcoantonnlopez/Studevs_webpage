// import { Component, HostListener } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './../shared/animations/animations.component.css']
})
export class AboutUsComponent implements OnInit  {
  aboutUsLetter: string = ''; 
  capi1: string = ''; 
  studevsLogo: string = ''; 
  scale: number = 1; // Define la propiedad scale

  ngOnInit(): void {
    this.aboutUsLetter = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701140218/AboutUs/AboutUs_Letters_aerg4p.svg';
    this.capi1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701213737/capi_yf5t4l.svg';
    this.studevsLogo = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/LogoNormal_ojrguh.svg';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / scrollHeight;

    this.scale = 1 + scrollRatio * 178;

  }

}
