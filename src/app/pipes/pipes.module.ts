import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorImagesPdfPipe } from './separator-images-pdf/separator-images-pdf.pipe';



@NgModule({
  declarations: [
    SeparatorImagesPdfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeparatorImagesPdfPipe
  ]
})
export class PipesModule { }
