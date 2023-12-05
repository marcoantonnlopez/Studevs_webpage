import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoNavbar: string = ''; 

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.logoNavbar = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630770/share/studevsLogo_r1s9jl.svg';
  }
  

}
