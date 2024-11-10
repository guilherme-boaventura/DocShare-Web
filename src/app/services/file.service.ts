import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  private apiUrl = 'http://localhost:8080/api/file'; 

  constructor(private http: HttpClient) {}

  saveFile(pFile:any, pFileName : any, pFolderId:any, pFileId : any) {
    const body = new FormData()

    if(pFile) {
      body.append("file", pFile)
    }

    if(pFileName) {
      body.append("fileName", pFileName)
    }

    if(pFolderId) {
      body.append("folderId", pFolderId)
    }

    if(pFileId) {
      body.append("fileId", pFileId)
    }

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