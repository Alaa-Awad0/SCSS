import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() isVisible: boolean = false;
@Output() visibilityChange = new EventEmitter<boolean>(); 



closeNav(e:MouseEvent, navBox:HTMLDivElement): void {
  if (e.target !== navBox) {
    this.visibilityChange.emit(false);
  }
}
}
