import { Component, OnInit } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studevs-website';
  // imageUrl: string;
  imageUrl: string = '';
  
  ngOnInit() {
    // Elimina cualquier token existente en el almacenamiento local al iniciar la app
  // localStorage.removeItem('token');

    const cld = new Cloudinary({cloud: {cloudName: 'dmhkvcej4'}});
    this.imageUrl = cld.image('tu-nombre-de-imagen').toURL();
    // Aquí puedes usar `cld` para trabajar con Cloudinary
  }
}
