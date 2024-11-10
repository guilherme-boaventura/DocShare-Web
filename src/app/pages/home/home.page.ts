import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NewFolderDialog } from 'src/app/dialogs/new-folder/new-folder.dialog';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/events.service';
import { FolderService } from 'src/app/services/folder.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  userFolders !: any[]
  importedFolders !: any[]

  constructor(private authService : AuthService,
              private folderService : FolderService,
              private dialog : MatDialog,
              private toastr : ToastrService,
              private eventService : EventService
            ) {
    this.eventService.folderDeletedEvent.subscribe((folder)=>{
      this.userFolders = this.userFolders.filter(f=> f.id != folder.id)
    }) 
  }

  ngOnInit() {
    this.getUserFolders()
  }

  getUserFolders() {
    this.folderService.getUserFolders().subscribe((resp:any)=> {

      this.userFolders = resp.filter((f : any) => !f.referenceFolder)
      this.userFolders.sort((a, b) => b.id - a.id);

      this.importedFolders = resp.filter((f : any) => f.referenceFolder)
      this.importedFolders.sort((a, b) => b.id - a.id);
      
    })
  }

  openNewFolderDialog() {
    const dialogRef = this.dialog.open(NewFolderDialog, {
      height: '400px',
      width: '700px',
      disableClose: false,
      hasBackdrop: true
    })

    dialogRef.afterClosed().subscribe((resp)=> {
      if(resp) {
        this.folderService.saveFolder(undefined,resp.name, resp.visibility, resp.tag).subscribe((resp) => {
          this.userFolders.push(resp)
          this.toastr.success('Folder successfully created!')
        })
      }
    })
  }

  logout() {
    this.authService.logout();
  }
  
}