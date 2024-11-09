import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './file-input.dialog.html',
  styleUrls: ['./file-input.dialog.scss']
})
export class FileInputDialog {

  fileName !: any
  selectedFile !: any

  constructor(
    public dialogRef: MatDialogRef<FileInputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    this.fileName = this.selectedFile.name
  }

  confirm(){
    this.dialogRef.close({file : this.selectedFile, fileName : this.fileName})
  }

  cancel() {
    this.dialogRef.close()
  }

}