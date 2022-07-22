import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ElectronicsComponent } from './electronics/electronics.component';


const routes: Routes = [


  {
    path:"",component:ProductComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
