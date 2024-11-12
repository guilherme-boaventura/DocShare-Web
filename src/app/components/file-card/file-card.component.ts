import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileInputDialog } from 'src/app/dialogs/file-input/file-input.dialog';
import { EventService } from 'src/app/services/events.service';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent {

  @Input()
  file !: any;

  @Input()
  editable !: any

  constructor(private fileService : FileService,
              private eventsService : EventService,
              private dialog : MatDialog
  ) {

  }

  ngOnInit() {
    
  }

  download() {
    this.fileService.download(this.file.id).subscribe((blob)=> {
       const url = window.URL.createObjectURL(blob);

       const a = document.createElement('a');
       a.href = url;
       a.download = (this.file.name.endsWith(this.file.extension))? this.file.name : this.file.name + this.file.extension;
       document.body.appendChild(a);
       a.click();
 
       document.body.removeChild(a);
       window.URL.revokeObjectURL(url);
    })
  }

  delete() {
    this.fileService.delete(this.file.id).subscribe((resp)=> {
      this.eventsService.emitFileDeletion(this.file)
    })
  }

  openFileEditionDialog() {
    let dialogRef = this.dialog.open(FileInputDialog, {
      height: '300px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true,
      data: { editMode : true,
              fileName : this.file.name
       }
    });

    dialogRef.afterClosed().subscribe((resp) => {
      this.fileService.saveFile(undefined, resp.fileName, undefined, this.file.id).subscribe(resp => {
        this.file = resp
      })
    })
  }

}
