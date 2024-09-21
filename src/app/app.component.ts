import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  folders : any = [{name: 'Angular'}, {name: 'Spring Boot'}, {name: 'Postgres'}, {name: 'SQL Server'}, {name: 'Docker'}];

  constructor() {

  }

  ngOnInit() {
  }

}