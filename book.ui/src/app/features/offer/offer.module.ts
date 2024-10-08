import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    OfferComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ]
})
export class OfferModule { }
