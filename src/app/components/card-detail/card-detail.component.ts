import { Component, Input, OnInit } from '@angular/core';
import { HousesModel } from 'src/app/models/houses.model';

@Component({
  selector: 'hopi-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() house!: HousesModel | null;

  constructor() { }

  ngOnInit(): void {
  }

}
