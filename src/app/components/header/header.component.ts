import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hopi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() backLinkCallback = new EventEmitter();

  public backLink(): void {
    this.backLinkCallback.emit();
  }
}

