import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoNavbar: string = ''; 
  isScrolled = false;

  ngOnInit(): void {
    this.logoNavbar = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/studevsLogo_r1s9jl.svg';
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 100; // Ajusta el 100 según tus necesidades
  }
}
