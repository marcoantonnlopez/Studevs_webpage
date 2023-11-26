// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
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
  background: string = '';

  @ViewChildren('reveal') elementsToReveal!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.logo = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/LogoNormal_ojrguh.svg';
    this.adminScroll1 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700984419/home/sec2_adminScroll1_xlnqpr.svg';
    this.adminScroll2 = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700985744/sec2_adminScroll2_pqwky2.png';
    this.background = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700988658/sec2_adminScroll_Background_ly5adg.svg';
  }
  
  ngAfterViewInit() {
    window.addEventListener('scroll', () => this.reveal());
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.reveal());
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
}

// window.addEventListener("scroll", reveal);
