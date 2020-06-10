import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//reactive Form mudel
import { ReactiveFormsModule } from '@angular/forms';
//modulo para usar la api de google map
import { AgmCoreModule } from '@agm/core';
//brouser module material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//rutas de mi aplicacion
import { AppRoutingModule } from './app-routing.module';
//componentes de mi aplicacion 
import { AppComponent } from './app.component';
//modulo para almacenar las importancione del angular material
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

//Se usa el entryComponents para poder cargan todos los datos de  ese componente hacia otro componente
@NgModule({
  entryComponents:[MapaEditarComponent],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    AgmCoreModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDGvD7ugy-z2PlxafSQ3qhvg7vXRL-rco'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
