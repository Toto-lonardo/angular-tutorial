import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EmpAddEditComponent} from './emp-add-edit/emp-add-edit.component';
import {PrenotazioniService} from './services/prenotazioni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app';

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
        console.log(res);
      },
      error: console.log,
    });
  }
}
