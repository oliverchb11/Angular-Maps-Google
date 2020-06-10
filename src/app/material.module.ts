import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//material botones
import {MatButtonModule} from '@angular/material/button';
//materias progress bar
import {MatProgressBarModule} from '@angular/material/progress-bar';
//material card
import {MatCardModule} from '@angular/material/card';
//material SnackBar
import {MatSnackBarModule} from '@angular/material/snack-bar';
//material dialog
import {MatDialogModule} from '@angular/material/dialog';
//material input 
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],

})
export class MaterialModule { }
