import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.scss']
})
export class MapaEditarComponent implements OnInit {
  forma:FormGroup;
  constructor(
    public fb:FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
      this.forma = fb.group({
        'titulo':data.titulo,
        'descripcion':data.descripcion,
      })
    }

  ngOnInit(): void {

  }
  guardarCambios(){
  console.log(this.forma.value);
  this.dialogRef.close(this.forma.value);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
