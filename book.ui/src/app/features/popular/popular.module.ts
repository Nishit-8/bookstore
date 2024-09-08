import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { PopularRoutingModule } from './popular-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    PopularComponent
  ],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule
  ]
})
export class PopularModule { }
