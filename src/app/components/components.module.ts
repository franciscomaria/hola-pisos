import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardDetailComponent } from './card-detail/card-detail.component';



@NgModule({
  declarations: [
    CardComponent,
    LoadingComponent,
    HeaderComponent,
    CarouselComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CardComponent,
    LoadingComponent,
    HeaderComponent,
    CarouselComponent,
    CardDetailComponent
  ]
})
export class ComponentsModule { }
