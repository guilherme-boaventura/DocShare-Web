import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileInputDialog } from 'src/app/dialogs/file-input/file-input.dialog';

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

  constructor(private dialog : MatDialog) {

  }

  ngOnInit() {

  }

  openFolder() {
    this.clicked = !this.clicked

    this.files = [{ name: 'doc1'},{ name: 'doc2'},{ name: 'doc3'},{ name: 'doc4'},{ name: 'doc5'}]
  }

  openFileInputDialog() {
    let dialogRef = this.dialog.open(FileInputDialog, {
      height: '300px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true
    });
  }

}
