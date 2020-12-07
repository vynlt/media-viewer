import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData{
  mediaType: string,
  mediaContent: string,
  mediaComment: string
}

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent{
  @ViewChild('media')
  public media!: ElementRef;
  
  isVertical: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onLoad() {
      console.log(this.data);
      const imgWidth = (this.media.nativeElement as HTMLImageElement).width;
      const imgHeight = (this.media.nativeElement as HTMLImageElement).height;
      
      console.log(imgWidth, imgHeight);
      const imgRatio = imgHeight / imgWidth;
      const screenRatio = window.innerHeight / window.innerWidth;
      if (imgRatio > screenRatio){
        this.isVertical = true;
      } else{
        this.isVertical = false;
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
