import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './file-input.dialog.html',
  styleUrls: ['./file-input.dialog.scss']
})
export class FileInputDialog {

  fileName !: any
  selectedFile !: any

  constructor(
    public dialogRef: MatDialogRef<FileInputDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    if(this.data.editMode) {
      this.fileName = this.data.fileName
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    this.fileName = this.selectedFile.name
  }

  confirm(){
    if(!this.selectedFile || !this.fileName) {
      this.toastr.error('Please complete all fields correctly.')
    } else {
      this.dialogRef.close({file : this.selectedFile, fileName : this.fileName})
    }
  }

  cancel() {
    this.dialogRef.close()
  }

}