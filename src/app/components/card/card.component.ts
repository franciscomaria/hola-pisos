import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousesModel } from 'src/app/models/houses.model';

@Component({
  selector: 'hopi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() house!: HousesModel;

  @Output() goToDetailPage = new EventEmitter<HousesModel>();

  public goToDetail(house: HousesModel) {
    this.goToDetailPage.emit(house);
  }

}
