import { Component, OnInit } from '@angular/core';

const IMAGES = [
  {url: 'https://i.pinimg.com/564x/5c/cd/75/5ccd7544f3908ca293f66e9b186015df.jpg'},
  {url: 'https://i.pinimg.com/564x/e6/11/97/e611970e5aa8978f4b85b34516f1a718.jpg'},
  {url: 'https://i.pinimg.com/564x/e0/cc/98/e0cc98b760094874983a7e238361df1f.jpg'},
  {url: 'https://i.pinimg.com/564x/7d/c4/f9/7dc4f9e56cbf86feb9dae6f5dda11e99.jpg'},
  {url: 'https://www.w3schools.com/css/img_5terre.jpg'}
]

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css']
})
export class MediaGalleryComponent implements OnInit {

  constructor() { }
  images = IMAGES;

  ngOnInit(): void {
  }

}
