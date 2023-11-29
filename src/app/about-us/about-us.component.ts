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
  sec7_1: string = ''; 
  sec7_2: string = ''; 
  sec7_3: string = ''; 
  sec7_4: string = ''; 
  sec7_5: string = ''; 
  sec7_6: string = ''; 
  capi2: string = ''; 

  ngOnInit(): void {
    this.aboutUsLetter = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701140218/AboutUs/AboutUs_Letters_aerg4p.svg';
    this.capi1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701213737/capi_yf5t4l.svg';
    this.studevsLogo = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/LogoNormal_ojrguh.svg';
    this.sec7_1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701237291/AboutUs/se7_1_bylluf.png';
    this.sec7_2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701237294/AboutUs/se7_2_i6kmko.png';
    this.sec7_3 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701237214/AboutUs/se7_3_zrlllc.png';
    this.sec7_4 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701237216/AboutUs/se7_4_erdvyb.png';
    this.sec7_5 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701237215/AboutUs/se7_5_idikyf.png';
    this.sec7_6 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701238597/AboutUs/se7_61_jrpbn4.png';
    this.capi2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701213722/capiFinal_racltk.svg';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / scrollHeight;

    this.scale = 1 + scrollRatio * 178;

  }

}
