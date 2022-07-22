import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ProductComponent } from './product/product.component';
import { FilterproductComponent } from './filterproduct/filterproduct.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{HttpClientModule} from '@angular/common/http';
import { ElectronicsComponent } from './electronics/electronics.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatagoryComponent,
    ProductComponent,
    FilterproductComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
