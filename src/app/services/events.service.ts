import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    
  private folderDeletedSubject = new Subject<any>();

  private fileDeletedSubject = new Subject<any>();
  
  private folderImportedSubject = new Subject<any>();

  folderDeletedEvent = this.folderDeletedSubject.asObservable();
  
  fileDeletedEvent = this.fileDeletedSubject.asObservable();

  folderImportedEvent = this.folderImportedSubject.asObservable();

  emitFolderDeletion(folder: any) {
    this.folderDeletedSubject.next(folder);
  }

  emitFileDeletion(file: any) {
    this.fileDeletedSubject.next(file);
  }

  emitFolderImported(folder: any) {
    this.folderImportedSubject.next(folder);
  }
}