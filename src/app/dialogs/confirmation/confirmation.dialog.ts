import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './confirmation.dialog.html',
  styleUrls: ['./confirmation.dialog.scss']
})
export class ConfirmationDialog {


  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  confirm() {
    this.dialogRef.close(true)
  }
  
  cancel() {
    this.dialogRef.close()
  }
}