import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))])
    ])
  ]
})
export class AnimationsComponent implements AfterViewInit {
  showFadeAnimation = false;

  @ViewChild('jsAnimation') jsAnimationDiv!: ElementRef;

  ngAfterViewInit() {
    this.applyJsAnimation(); 
  }

  applyJsAnimation() {
    const div = this.jsAnimationDiv.nativeElement;
    div.style.opacity = '0';
    div.style.transition = 'opacity 2s';
    setTimeout(() => div.style.opacity = '1', 1000);
  }

  toggleFadeAnimation() {
    this.showFadeAnimation = !this.showFadeAnimation;
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
