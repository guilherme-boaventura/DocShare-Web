import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent {

  @Input()
  file !: any;

  constructor() {

  }

  ngOnInit() {

  }

}
