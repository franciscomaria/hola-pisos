import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { ApiModel } from '../../models/houses.model';
import { setHouse, setHouses, setRef } from '../actions/houses.actions';
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
              setLast({ last: apiData.links.last.href }),
              setNext({ next: apiData.links.next.href })
            ];
          })
        )
      })
    )
  );

  setHouse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setRef),
      switchMap((refActive) => {
        return this.appService.getHouse(refActive.ref).pipe(
          map((apiData: ApiModel) => {
            return setHouse({ house: apiData.data[0] })
          })
        )
      })
    )
  );
}
