import {DialogRef} from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {PrenotazioniService} from '../services/prenotazioni.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education: string[] = [
  'Asilo',
  'Elementare',
  'Medie',
  'Superiori',
  'Universita',
  ]

  constructor(private _fb: FormBuilder, private _empService:PrenotazioniService, private _dialogRef: DialogRef<EmpAddEditComponent>) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dpr: '',
      gender: '',
      tscuola: '',
      denominazione: '',
      numVisitatori: '',
      numInsegnanti: '',
    })
  }

  onFormSubmit() {
  if(this.empForm.valid) {
    this._empService.addPrenotazione(this.empForm.value).subscribe({
      next: (val: any)=> {
        alert('Prenotazioni aggiunta con successo');
        this._dialogRef.close();
      },
      error: (err: any) => {
     console.error(err);
      },
    })
    }
}
}
