import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MediaDialogComponent } from '../media-dialog/media-dialog.component';

const longMockString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const MEDIA_OBJECTS = [
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/e6/11/97/e611970e5aa8978f4b85b34516f1a718.jpg',
    mediaComment: longMockString
  },
  {
    mediaType: 'image',
    mediaContent: 'https://i.pinimg.com/564x/e0/cc/98/e0cc98b760094874983a7e238361df1f.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://www.w3schools.com/css/img_5terre.jpg',
    mediaComment: 'Image content from internet resource'
  },
  {
    mediaType: 'image',
    mediaContent: 'https://www.w3schools.com/css/img_5terre.jpg',
    mediaComment: longMockString
  },
  {
    mediaType: 'video',
    mediaContent: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaComment: 'Video content from internet resource'
  },
  {
    mediaType: 'video',
    mediaContent: 'https://www.w3schools.com/html/mov_bbb.mp4',
    mediaComment: longMockString
  },
  {
    mediaType: 'video',
    mediaContent: 'http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
    mediaComment: 'Video content from internet resource'
  },
  {
    mediaType: 'video',
    mediaContent: 'http://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
    mediaComment: longMockString
  },
  {
    mediaType: 'audio',
    mediaContent: 'https://www.w3schools.com/html/horse.mp3',
    mediaComment: 'Audio content from internet resource'
  },
  {
    mediaType: 'audio',
    mediaContent: 'https://www.w3schools.com/html/horse.mp3',
    mediaComment: longMockString
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
