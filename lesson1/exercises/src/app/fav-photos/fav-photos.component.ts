import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'A random assortment of images:';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.kym-cdn.com/entries/icons/original/000/030/054/moonhaunted.jpg';
  image3 = 'https://i.kym-cdn.com/photos/images/original/001/584/767/cd7.jpg_large';

  constructor() { }

  ngOnInit() {
  }

}