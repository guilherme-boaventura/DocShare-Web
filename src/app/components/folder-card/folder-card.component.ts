import { Component, Input } from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {

  }

  openFolder() {
    this.clicked = !this.clicked

    this.files = [{ name: 'doc1' }, { name: 'doc2' }]
  }

}
