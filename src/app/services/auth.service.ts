import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; 

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          if (response.token) {
            document.cookie = `docShareAuthToken=${response.token}; path=/; max-age=3600; SameSite=Strict`;
            // sessionStorage.setItem('authToken', response.token);
            this.toastr.success('Successfully authenticated', 'Welcome!', {timeOut: 3000})
          }
        }),
        catchError(error => {
          this.toastr.error(error.error.errorMessage, 'Error', {timeOut: 3000})
          return of([])
        })
      )
  }

  logout(): void {
    document.cookie = 'docShareAuthToken=; path=/; max-age=0; SameSite=Strict';
    // sessionStorage.removeItem('authToken');
    window.location.reload()
  }

  isAuthenticated(): boolean {
    return this.isCookiePresent('docShareAuthToken')
    // return !!sessionStorage.getItem('authToken');
  }

  isCookiePresent(cookieName: string): boolean {
    return document.cookie.split('; ').some((cookie) => cookie.startsWith(`${cookieName}=`));
  }

  getTokenFromCookie(cookieName: string): string | undefined {
    const match = document.cookie.split('; ').find(row => row.startsWith(`${cookieName}=`));
    return match ? match.split('=')[1] : undefined;
  }
}