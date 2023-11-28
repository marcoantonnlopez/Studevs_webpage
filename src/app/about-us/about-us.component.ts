// import { Component, HostListener } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit  {
  aboutUsLetter: string = ''; 
  scale: number = 1; // Define la propiedad scale

  ngOnInit(): void {
    this.aboutUsLetter = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701140218/AboutUs/AboutUs_Letters_aerg4p.svg';
  }

  
  ngAfterViewInit() {
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.onWindowScroll());
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / scrollHeight;

    this.scale = 1 + scrollRatio * 68;

  }

}
