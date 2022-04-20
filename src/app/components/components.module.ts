import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CardComponent,
    LoadingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    LoadingComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
