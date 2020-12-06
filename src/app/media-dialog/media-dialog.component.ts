import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData{
  url: string,
}

@Component({
  selector: 'app-media-dialog',
  templateUrl: './media-dialog.component.html',
  styleUrls: ['./media-dialog.component.css']
})
export class MediaDialogComponent{
  @ViewChild('image')
  public image!: ElementRef;
  isVertical: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onLoad() {
      const imgWidth = (this.image.nativeElement as HTMLImageElement).width;
      const imgHeight = (this.image.nativeElement as HTMLImageElement).height;
      
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
