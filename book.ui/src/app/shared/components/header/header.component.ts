import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSearch = false;
  hideTopHeader = false;
  searchText = "";
  isMobile = false;
  hamburgerMenuOpen = false;

  constructor(private scroller: ViewportScroller) {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {
    let scrollY = this.scroller.getScrollPosition()[1];
    this.hideTopHeader = scrollY > 74;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobile = window.innerWidth < 768;
    console.log(this.isMobile + window.innerWidth.toString());
  }

}
