import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setActive } from '../../store/actions/pagination.actions';
import { HousesModel } from '../../models/houses.model';
import { environment } from '../../../../src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'hopi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public houses: HousesModel[] | null = [];
  public isLoading = false;

  private housesSubscription$!: Subscription;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setActive({ active: environment.urlAPI }));

    this.housesSubscription$ = this.store.select('houses').subscribe(housesResults => {
      if (housesResults) {
        this.houses = housesResults.houses;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.housesSubscription$.unsubscribe();
  }

  public loadMore(): void {
    console.log('CARGAR MÁS');
  }

}
