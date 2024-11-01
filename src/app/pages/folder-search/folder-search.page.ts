import { Component } from '@angular/core';

interface UserData {
  id: number;
  name: string;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 3, name: 'Henrique', email: 'henrique@example.com' }
];

@Component({
  selector: 'folder-search',
  templateUrl: './folder-search.page.html',
  styleUrls: ['./folder-search.page.scss']
})
export class FolderSearchComponent {


  constructor() {

  }

  ngOnInit() {

  }

  dataSource = ELEMENT_DATA;

  filterValue: string = '';

  applyNameFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
  }

  applyTagFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
  }

  applyVisibilityFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
  }

  get filteredData() {
    return this.dataSource.filter(element => {
      return element.name.toLowerCase().includes(this.filterValue) || 
             element.email.toLowerCase().includes(this.filterValue);
    });
  }
}