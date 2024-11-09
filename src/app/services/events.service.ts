import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    
  private folderDeletedSubject = new Subject<any>();

  private fileDeletedSubject = new Subject<any>();

  folderDeletedEvent = this.folderDeletedSubject.asObservable();
  
  fileDeletedEvent = this.fileDeletedSubject.asObservable();

  emitFolderDeletion(folder: any) {
    this.folderDeletedSubject.next(folder);
  }

  emitFileDeletion(file: any) {
    this.fileDeletedSubject.next(file);
  }
}