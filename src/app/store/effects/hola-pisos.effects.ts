import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { AppService } from '../../app.service';
import { ApiModel, HousesModel } from '../../models/houses.model';
import { setHouses } from '../actions/houses.actions';
import { setActive } from '../actions/pagination.actions';

@Injectable()
export class HolaPisosEffects {

  setHouse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setActive),
      switchMap((activePage) => {
        return this.appService.getHouses(activePage.active).pipe(
          map((api: ApiModel) => {
            return setHouses(({ houses: api.data }));
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}
