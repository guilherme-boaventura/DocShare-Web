import { Component, Input } from '@angular/core';

@Component({
  selector: 'folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss']
})
export class FolderCardComponent {
    
    @Input()
    folder !: any;

    constructor() {

    }

    ngOnInit() {
      
    }

}
