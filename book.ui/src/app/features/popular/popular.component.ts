import { Component } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {
  currentTab = 'All Genre'

  onGenreChange(name: string) {
    this.currentTab = name;
  }
}
