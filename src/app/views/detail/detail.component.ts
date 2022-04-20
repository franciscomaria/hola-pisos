import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { HousesModel } from 'src/app/models/houses.model';
import { setRef, unSetHouse, unSetRef } from 'src/app/store/actions/houses.actions';

@Component({
  selector: 'hopi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: false, showIndicators: true } }
  ]
})
export class DetailComponent implements OnInit, OnDestroy {
  public house: HousesModel | null = null;
  public isLoading = true;
  public isEmpty = false;
  public ref!: string;

  private houseSubscription$!: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ref = this.route.snapshot.params['ref'];
    this.store.dispatch(setRef({ ref: this.ref }));

    this.houseSubscription$ = this.store.select('house').subscribe(houseResults => {
      if (houseResults && houseResults.house) {
        this.house = houseResults.house;

        this.isEmpty = Object.keys(this.house).length === 0;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(unSetRef());
    this.store.dispatch(unSetHouse());
    this.houseSubscription$.unsubscribe();
  }

  public backLink(): void {
    this.router.navigate(['/home']);
  }

}
