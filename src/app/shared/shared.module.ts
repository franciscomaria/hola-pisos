import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CarouselModule
  ]
})
export class SharedModule { }
