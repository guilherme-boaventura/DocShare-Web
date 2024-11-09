import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation/confirmation.dialog';
import { FileInputDialog } from 'src/app/dialogs/file-input/file-input.dialog';
import { NewFolderDialog } from 'src/app/dialogs/new-folder/new-folder.dialog';
import { EventService } from 'src/app/services/events.service';
import { FileService } from 'src/app/services/file.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss']
})
export class FolderCardComponent {

  @Input()
  folder !: any;

  files !: any[];

  clicked = false;

  constructor(private dialog : MatDialog, 
              private folderService: FolderService,
              private toastr: ToastrService,
              private eventService: EventService,
              private fileService : FileService
  ) {

  }

  ngOnInit() {
    this.fileService.getByFolder(this.folder.id).subscribe((resp:any) => {
      this.files = resp
    })
  }

  openFolder() {
    this.clicked = !this.clicked
  }

  openFileInputDialog() {
    let dialogRef = this.dialog.open(FileInputDialog, {
      height: '300px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe((resp) => {
      this.fileService.saveFile(resp.file, resp.fileName, this.folder.id).subscribe(resp => {
        console.log(resp);
      })
    })
  }

  openFolderEditionDialog() {
    const dialogRef = this.dialog.open(NewFolderDialog, {
      height: '400px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true,
      data: this.folder
    })

    dialogRef.afterClosed().subscribe((resp)=> {
      if(resp) {
        this.folderService.saveFolder(this.folder.id, resp.name, resp.visibility, resp.tag).subscribe((resp) => {
          this.folder = resp
          this.toastr.success('Folder successfully edited!')
        })
      }
    })
  }

  deleteFolder() {

    const dialogRef = this.dialog.open(ConfirmationDialog, {
      height: '200px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true,
      data: {message: 'Confirm the folder exclusion?'}
    })

    dialogRef.afterClosed().subscribe((resp)=> {
      if(resp) {
        this.folderService.delete(this.folder.id).subscribe(()=> {
          this.eventService.emitFolderDeletion(this.folder);
          this.toastr.success('Folder deleted')
        })
      }
    })
  }

}
