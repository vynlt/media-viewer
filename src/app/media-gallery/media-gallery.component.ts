import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MediaDialogComponent } from '../media-dialog/media-dialog.component';

const MEDIA_OBJECTS = [
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/5c/cd/75/5ccd7544f3908ca293f66e9b186015df.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/e6/11/97/e611970e5aa8978f4b85b34516f1a718.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/e0/cc/98/e0cc98b760094874983a7e238361df1f.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/7d/c4/f9/7dc4f9e56cbf86feb9dae6f5dda11e99.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://www.w3schools.com/css/img_5terre.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'video',
    mediaContent: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaComment: 'Video content from internet resource'
  },
  {
    mediaType: 'audio',
    mediaContent: 'https://www.w3schools.com/html/horse.mp3',
    mediaComment: 'Audio content from internet resource'
  }
]

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css']
})
export class MediaGalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  mediaObjects = MEDIA_OBJECTS;

  ngOnInit(): void {
  }

  openDialog(media: any): void {
    const dialogRef = this.dialog.open(MediaDialogComponent, {
      data: media,
    });
  }

}
