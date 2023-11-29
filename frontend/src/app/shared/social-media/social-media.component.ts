import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent {
  discord: string = ''; 
  facebook: string = ''; 
  instagram: string = ''; 
  linkedin: string = ''; 
  twitch: string = ''; 
  x: string = ''; 
  youtube: string = ''; 
  
  ngOnInit(): void {
    this.discord = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630873/share/socialMedia/discord_u7fakn.svg';
    this.facebook = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630869/share/socialMedia/facebook_ey9kiv.svg';
    this.instagram = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630869/share/socialMedia/instagram_hedxeo.svg';
    this.linkedin = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630870/share/socialMedia/linkedin_rfqbab.svg';
    this.twitch = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630871/share/socialMedia/twitch_rs0v0o.svg';
    this.x = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630872/share/socialMedia/x_nvcky1.svg';
    this.youtube = 'https://res.cloudinary.com/dmhkvcej4/image/upload/v1700630872/share/socialMedia/youtube_opeiep.svg';
  }
}
