// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, HostListener, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

import { trigger, state, style, transition, animate } from '@angular/animations';

gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,RoughEase,ExpoScaleEase,SlowMo,CustomEase);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './../shared/animations/animations.component.css'],
   animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  logo: string = '';
  adminScroll1: string = ''; 
  adminScroll2: string = ''; 
  // sec3
  sec3_1: string = '';
  sec3_2: string = '';
  sec3_3: string = '';
  // sec4
  sec4: string = '';
  // sec5
  sec5_img1: string = '';
  sec5_img2: string = '';
  sec5_img3: string = '';
  sec5_img4: string = '';
  sec5_img5: string = '';
  sec5_img6: string = '';
  sec5_img7: string = '';
  sec5_img8: string = '';
  sec5_img9: string = '';
  scale = 1;

  @ViewChildren('reveal') elementsToReveal!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.logo = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/LogoNormal_ojrguh.svg';
    this.adminScroll1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700984419/home/sec2_adminScroll1_xlnqpr.svg';
    this.adminScroll2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700985744/sec2_adminScroll2_pqwky2.png';
    this.sec3_1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700992803/sec3_1_azjb0s.svg';
    this.sec3_2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700992803/sec3_2_e2zaqr.svg';
    this.sec3_3 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700992802/sec3_3_g5qjvs.svg';
    this.sec4 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701101957/home/sec4_background_flkyh8.svg';
 
    this.sec5_img1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112937/home/sec5_1_nyzm3c.svg';
    this.sec5_img2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112991/home/sec5_2_mttcaz.svg';
    this.sec5_img3 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112934/home/sec5_3_tgijut.svg';
    this.sec5_img4 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112942/home/sec5_4_uzpmah.svg';
    this.sec5_img5 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112974/home/sec5_5_uszogj.svg';
    this.sec5_img6 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701114011/sec5_6_uxok6w.png';
    this.sec5_img7 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112980/home/sec5_7_t82yed.svg';
    this.sec5_img8 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112964/home/sec5_8_ybiekh.svg';
    this.sec5_img9 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1701112932/home/sec5_9_b3xyf9.svg'; 
  }
  
  ngAfterViewInit() {
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.onWindowScroll());
  }

  reveal() {
    const windowHeight = window.innerHeight;
    this.elementsToReveal.forEach(elementRef => {
      const element = elementRef.nativeElement;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  // Sec3 animation
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const vh = window.innerHeight / 100;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const start = 100 * vh;
    const stop = 200 * vh;

    if (scrollTop > start && scrollTop < stop) {
      this.scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
    } else if (scrollTop <= start) {
      this.scale = 1;
    } else if (scrollTop >= stop) {
      this.scale = 1.6  ;
    }
  }
}

