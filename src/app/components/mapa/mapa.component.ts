import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  marcadores : Marcador[] = [];  
  lat: number = 6.1630026;
  lng: number = -75.5976095;
  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) {
      this.mostrarMarcadoresStorage();
   }

  ngOnInit(): void {

  }

  agregarMarcador(evento){
    console.log(evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;
    const nuevoMarcadorE = new Marcador(lat,lng);
    this.marcadores.push(nuevoMarcadorE);
    this.guardarStorage();
    this.snackBar.open('Marcador Guardado', 'Cerrar',{
      duration: 2000,
    });

  }
  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  mostrarMarcadoresStorage(){
      if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));
    }
  }

  borrarMarcador(posicion:number){
   this.marcadores.splice(posicion,1);
   this.guardarStorage();
   this.snackBar.open('Marcador Borrado', 'Cerrar',{
    duration: 2000,
  });
}

editarMarcador(marcador:Marcador){
  const dialogRef = this.dialog.open(MapaEditarComponent, {
    width: '250px',
    data: {titulo: marcador.titulo, descripcion: marcador.descripcion}
});
dialogRef.afterClosed().subscribe(result => {
    if(!result){
      return;
    }
    marcador.titulo = result.titulo;
    marcador.descripcion = result.descripcion;
    this.guardarStorage();

    this.snackBar.open('Marcador Actualizado', 'Cerrar',{
      duration: 2000,
    });
});
}



}
