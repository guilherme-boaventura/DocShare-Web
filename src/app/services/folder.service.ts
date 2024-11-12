import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { preserveWhitespacesDefault } from '@angular/compiler';

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

  getSharedFolders() {
    return this.http.get(`${this.apiUrl}/getSharedFolders`)
  }
 
  saveFolder(pId:any, pName:any, pVisibility:any, pTag:any, pReferenceFolder:any) {
    let body = {
      id: pId,
      name: pName,
      visibility: pVisibility,
      tag: pTag,
      referenceFolderId: pReferenceFolder
    }

    return this.http.post(`${this.apiUrl}/saveFolder`, body)
  }

  delete(id:number) {
    return this.http.post(`${this.apiUrl}/deleteFolder?id=${id}`, {})
  }
  
}