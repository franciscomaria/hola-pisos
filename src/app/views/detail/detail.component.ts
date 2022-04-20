import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { HousesModel } from 'src/app/models/houses.model';
import { unSetHouse } from 'src/app/store/actions/houses.actions';

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
  public isLoading = true;

  private houseSubscription$!: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.houseSubscription$ = this.store.select('house').subscribe(houseResults => {
      if (houseResults) {
        this.house = houseResults.house;

        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(unSetHouse());
    this.houseSubscription$.unsubscribe();
  }

  public backLink(): void {
    this.router.navigate(['/home']);
  }

}
