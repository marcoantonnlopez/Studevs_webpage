import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoNavbar: string = ''; 

  ngOnInit(): void {
    this.logoNavbar = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/studevsLogo_r1s9jl.svg';
  }
  

}
