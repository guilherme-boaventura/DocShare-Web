import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    
  private folderDeletedSubject = new Subject<any>();

  folderDeletedEvent = this.folderDeletedSubject.asObservable();

  emitFolderDeletion(folder: any) {
    this.folderDeletedSubject.next(folder);
  }
}