import { Component } from '@angular/core';
import { EventService } from 'src/app/services/events.service';
import { FolderService } from 'src/app/services/folder.service';


@Component({
  selector: 'folder-search',
  templateUrl: './folder-search.page.html',
  styleUrls: ['./folder-search.page.scss']
})
export class FolderSearchComponent {
  
  dataSource : any[] = [];

  filterValue: string = '';


  constructor(private folderService : FolderService,
              private eventService : EventService
  ) {

  }

  ngOnInit() {
    this.folderService.getSharedFolders().subscribe((resp:any) => {
      this.dataSource = resp
    })
 }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
  }

  get filteredData() {
    return this.dataSource.filter(element => 
            element.name.toLowerCase().includes(this.filterValue.toLowerCase()) || 
            element.tag.name.toLowerCase().includes(this.filterValue.toLowerCase()) || 
            element.visibility.name.toLowerCase().includes(this.filterValue.toLowerCase()) || 
            element.user.username.toLowerCase().includes(this.filterValue.toLowerCase()) || 
            element.user.department.toLowerCase().includes(this.filterValue.toLowerCase())
    )
  }

  importFolder(folder:any) {
    this.folderService.saveFolder(null,folder.name,folder.visibility.acronym,folder.tag.acronym,folder.id).subscribe((resp:any) => {
      this.eventService.emitFolderImported(resp)
    })
  }
}