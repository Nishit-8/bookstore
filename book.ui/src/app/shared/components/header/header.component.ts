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

  constructor(private scroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {
    let scrollY = this.scroller.getScrollPosition()[1];
    this.hideTopHeader = scrollY > 74;
  }

}
