import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProductsComponent
  ]
})
export class SharedModule { }
