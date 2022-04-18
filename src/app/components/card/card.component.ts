import { Component, Input } from '@angular/core';
import { HousesModel } from 'src/app/models/houses.model';

@Component({
  selector: 'hopi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() house!: HousesModel;

}
