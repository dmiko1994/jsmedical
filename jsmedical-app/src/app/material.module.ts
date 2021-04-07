import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

//Module to track all @angular/material dependencies
@NgModule({
    exports: [
        MatExpansionModule,
        MatButtonModule,
        MatDialogModule
    ]
  })
  export class MaterialModule { }