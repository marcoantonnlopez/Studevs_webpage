import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  logo: string = ''; 

  ngOnInit(): void {
    this.logo = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/LogoNormal_ojrguh.svg';
  }
  
}
