import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  private apiUrl = 'http://localhost:8080/api/folder'; 

  constructor(private http: HttpClient) {}

  getVisibilities() : Observable<any> {
    return this.http.get(`${this.apiUrl}/getVisibilities`)
  }
  
  getTags() : Observable<any> {
    return this.http.get(`${this.apiUrl}/getTags`)
  }

  getUserFolders() {
    return this.http.get(`${this.apiUrl}/getUserFolders`)
  }

  saveFolder(pId:number | undefined, pName:string, pVisibility:string, pTag:string) {
    let body = {
      id: pId,
      name: pName,
      visibility: pVisibility,
      tag: pTag
    }

    return this.http.post(`${this.apiUrl}/saveFolder`, body)
  }

  delete(id:number) {
    return this.http.post(`${this.apiUrl}/deleteFolder?id=${id}`, {})
  }
}