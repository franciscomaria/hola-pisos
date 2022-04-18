import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { ApiModel } from '../../models/houses.model';
import { setHouse, setHouses } from '../actions/houses.actions';
import { setActive, setLast, setNext } from '../actions/pagination.actions';

@Injectable()
export class HolaPisosEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}

  setHouses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setActive),
      switchMap((activePage) => {
        return this.appService.getHouses(activePage.active).pipe(
          switchMap((apiData: ApiModel) => {
            return [
              setHouses({ houses: apiData.data}),
              setLast({last: apiData.links.last.href}),
              setNext({next: apiData.links.next.href})
            ];
          })
        )
      })
    )
  );

  setHouse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setHouse),
      switchMap((houseActive) => {
        return this.appService.getHouse(houseActive.house.attributes.field_inmu_refe).pipe(
          switchMap((apiData: ApiModel) => {
            console.log('DETALLE', apiData);
            return [
              setHouses({ houses: apiData.data}),
              setLast({last: apiData.links.last.href}),
              setNext({next: apiData.links.next.href})
            ];
          })
        )
      })
    )
  );
}
