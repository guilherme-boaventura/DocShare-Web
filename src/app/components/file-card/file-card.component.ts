import { Component, Input } from '@angular/core';
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

  constructor(private fileService : FileService,
              private eventsService : EventService
  ) {

  }

  ngOnInit() {

  }

  download() {
    this.fileService.download(this.file.id).subscribe((blob)=> {
       const url = window.URL.createObjectURL(blob);

       const a = document.createElement('a');
       a.href = url;
       a.download = this.file.name;
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

  }

}
