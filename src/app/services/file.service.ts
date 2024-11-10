import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  private apiUrl = 'http://localhost:8080/api/file'; 

  constructor(private http: HttpClient) {}

  saveFile(pFile:any, pFileName : any, pFolderId:any) {
    const body = new FormData()

    body.append("file", pFile)
    body.append("fileName", pFileName)
    body.append("folderId", pFolderId)

    return this.http.post(`${this.apiUrl}/saveFile`, body)
  }

  getByFolder(folderId:any) {
    return this.http.get(`${this.apiUrl}/getByFolder?folderId=${folderId}`)
  }

  delete(fileId : any) {
    return this.http.get(`${this.apiUrl}/deleteFile?fileId=${fileId}`)
  }

  download(fileId : any) {
    return this.http.get(`${this.apiUrl}/downloadFile?fileId=${fileId}`, { responseType: 'blob' })
  }
 }