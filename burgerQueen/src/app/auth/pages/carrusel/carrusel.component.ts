import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  slides = [
    {'image': './assets/hamburguesas2.jpeg'}, 
    {'image': './assets/hamburguesa4.jpeg'},
    {'image': './assets/hamburguesas2.jpeg'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
