import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured.component';
import { FeaturedRoutingModule } from './featured-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    SharedModule
  ]
})
export class FeaturedModule { }
