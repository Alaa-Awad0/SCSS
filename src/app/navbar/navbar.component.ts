import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isOpen: boolean = false; 

  @ViewChild('navbar') navbar!: ElementRef; 
  @ViewChild('toggleButton') toggleButton!: ElementRef; 
  @Output() categorySelected = new EventEmitter<string>();

  onCategoryClick(category: string): void {
    this.categorySelected.emit(category);
  }


  toggleNavbar() {
    this.isOpen = !this.isOpen; 
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.isOpen &&
      this.navbar &&
      !this.navbar.nativeElement.contains(event.target) &&
      this.toggleButton &&
      !this.toggleButton.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }

}
