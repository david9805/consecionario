import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vehiculo } from '../../../interfaces/vehiculo';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent {
  constructor (private dialogRef:MatDialogRef<ConfirmComponent>,@Inject(MAT_DIALOG_DATA) public data: Vehiculo){

  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar(){
    this.dialogRef.close()
  }
}
