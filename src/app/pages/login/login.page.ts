import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  username!: string
  password!: string

  constructor(private authService: AuthService, private router: Router) {

  }

  authenticate() {
    this.authService.login(this.username, this.password).subscribe(() => {
      this.router.navigate([''])
    })
  }

}