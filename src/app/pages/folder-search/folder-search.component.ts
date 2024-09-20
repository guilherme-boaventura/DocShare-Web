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
];

@Component({
  selector: 'folder-search',
  templateUrl: './folder-search.component.html',
  styleUrls: ['./folder-search.component.scss']
})
export class FolderSearchComponent {


  constructor() {

  }

  ngOnInit() {

  }

  displayedColumns: string[] = ['name', 'email'];
  dataSource = ELEMENT_DATA;

  // Variável para armazenar o filtro
  filterValue: string = '';

  // Método para aplicar o filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase(); // Remove espaços e transforma em minúsculas
  }

  // Método para obter os dados filtrados
  get filteredData() {
    return this.dataSource.filter(element => {
      return element.name.toLowerCase().includes(this.filterValue) || 
             element.email.toLowerCase().includes(this.filterValue);
    });
  }
}