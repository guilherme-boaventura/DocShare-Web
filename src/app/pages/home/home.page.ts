import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  folders: any = [{ name: 'Angular' }, { name: 'Spring Boot' }, { name: 'Postgres' }, { name: 'SQL Server' }, { name: 'Docker' }];
  folders2: any = [{ name: 'Massinha e js' }, { name: 'Delineador' }, { name: 'Tik Tok' }];

  constructor(private authService : AuthService) {

  }

  ngOnInit() {



  }

  openNewFolderDialog() {

  }

  logout() {
    this.authService.logout();
  }
  
}