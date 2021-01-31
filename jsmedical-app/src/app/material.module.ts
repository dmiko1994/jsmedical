import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

//Module to track all @angular/material dependencies
@NgModule({
    exports: [
        MatExpansionModule
    ]
  })
  export class MaterialModule { }