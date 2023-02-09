import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isNavExpanded: boolean = true;
  @Output() menuClick: EventEmitter<void> = new EventEmitter();

  handleMenuOpen() {
    this.menuClick.emit();
    this.isNavExpanded = false;
  }

  handleMenuClose() {
    this.menuClick.emit();
    this.isNavExpanded = true;
  }
}
