import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setActive } from '../../store/actions/pagination.actions';
import { HousesModel } from '../../models/houses.model';
import { environment } from '../../../../src/environments/environment';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { setHouse } from '../../store/actions/houses.actions';

@Component({
  selector: 'hopi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public houses: HousesModel[] = [];
  public nextPagination!: string | null;
  public isLoading = false;

  private housesSubscription$!: Subscription;
  private paginationSubscription$!: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setActive({ active: environment.urlAPI }));

    this.housesSubscription$ = this.store.select('houses').subscribe(housesResults => {
      if (housesResults) {
        this.houses = housesResults.houses;
        this.isLoading = false;
      }
    });

    this.paginationSubscription$ = this.store.select('nextPagination').subscribe(paginationResult => {
      this.nextPagination = paginationResult.next;
    });
  }

  ngOnDestroy(): void {
    this.housesSubscription$.unsubscribe();
    this.paginationSubscription$.unsubscribe();
  }

  public loadMore(): void {
    if (this.nextPagination) {
      this.store.dispatch(setActive({ active: this.nextPagination }))
    }
  }

  public goToDetail(house: HousesModel): void {
    this.store.dispatch(setHouse({ house }));

    this.router.navigate(['/detail']);
  }

}
