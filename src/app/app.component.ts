import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EmpAddEditComponent} from './emp-add-edit/emp-add-edit.component';
import {PrenotazioniService} from './services/prenotazioni.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id','firstName', 'lastName', 'email', 'dpr', 'gender', 'tscuola', 'denominazione', 'numVisitatori', 'numInsegnanti'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _prenoService: PrenotazioniService) {}

  ngOnInit(): void {
    this.getPrenotazioniList();
  }

  openAddEditEmpForm() {
  this._dialog.open(EmpAddEditComponent)
  }

  getPrenotazioniList() {
    this._prenoService.getPrenotazioniList().subscribe({
      next: (res) => {
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
