import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    console.log('Scroll event detected:', window.scrollY);

    this.isScrolled = window.scrollY > 0;
  }

}
