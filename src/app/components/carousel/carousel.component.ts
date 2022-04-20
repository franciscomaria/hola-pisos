import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hopi-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: Array<string> | undefined = [];

  constructor() { }

  ngOnInit(): void {
  }

}
