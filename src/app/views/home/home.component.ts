import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setActive } from '../../store/actions/pagination.actions';
import { HousesModel } from '../../models/houses.model';
import { environment } from '../../../../src/environments/environment';

@Component({
  selector: 'hopi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public houses: HousesModel[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setActive({ active: environment.urlAPI }));
  }

}
