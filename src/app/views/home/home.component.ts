import { Component, OnInit } from '@angular/core';
import { HousesModel } from 'src/app/models/houses.model';

@Component({
  selector: 'hopi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public houses: HousesModel[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
