import { Component, OnInit } from '@angular/core';
import { ConfigService } from './core/services/config.service';
import { IConfig } from './shared/models/config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.title = this.config.get();
  }
  title: undefined | IConfig;
}
