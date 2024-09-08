import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellingComponent } from './best-selling.component';
import { BestSellingRoutingModule } from './best-selling-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    BestSellingComponent
  ],
  imports: [
    CommonModule,
    BestSellingRoutingModule,
    SharedModule
  ]
})
export class BestSellingModule { }
