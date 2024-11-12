import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  templateUrl: './new-folder.dialog.html',
  styleUrls: ['./new-folder.dialog.scss']
})
export class NewFolderDialog {

  folderName !: any
  visibilities !: any
  tags !: any

  selectedVisibility !: any
  selectedTag !: any

  constructor(
    public dialogRef: MatDialogRef<NewFolderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private folderService: FolderService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.folderService.getVisibilities().subscribe((resp) => {
      this.visibilities = resp
    })
    this.folderService.getTags().subscribe((resp)=> {
      this.tags = resp
    })

    if(this.data) {
      this.folderName = this.data.name
      this.selectedVisibility = this.data.visibility.acronym 
      this.selectedTag = this.data.tag.acronym 
    }
  }

  confirm(){
    if(!this.folderName || !this.selectedVisibility || !this.selectedTag) {
      this.toastr.error('Please complete all fields correctly.')
    }else {
      this.dialogRef.close({name: this.folderName, visibility: this.selectedVisibility, tag: this.selectedTag})
    }
  }

  cancel() {
    this.dialogRef.close()
  }

}