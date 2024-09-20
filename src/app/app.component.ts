import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  folders : any = [{name: 'Pasta 1'}, {name: 'Pasta 2'}];

  constructor() {

  }

  ngOnInit() {
  }

}