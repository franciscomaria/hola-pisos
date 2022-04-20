import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { HousesModel } from 'src/app/models/houses.model';

@Component({
  selector: 'hopi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: false, showIndicators: true } }
  ]
})
export class DetailComponent implements OnInit, OnDestroy {
  public house!: HousesModel | null;

  private houseSubscription$!: Subscription;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.houseSubscription$ = this.store.select('house').subscribe(houseResults => {
      if (houseResults) {
        this.house = houseResults.house;
        console.log('HOUSE PARA VER DETALLE', houseResults);
      }
    });
  }

  ngOnDestroy(): void {
    this.houseSubscription$.unsubscribe();
  }

}
