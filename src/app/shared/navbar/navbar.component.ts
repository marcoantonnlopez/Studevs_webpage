import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoNavbar: string = ''; 

  ngOnInit(): void {
    this.logoNavbar = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/studevsLogo_r1s9jl.svg';
  }
  
}
