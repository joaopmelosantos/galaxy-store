import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderBackgroundComponent } from './header-background/header-background.component';
import { ChartComponent } from './chart/chart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: "", component: HeaderBackgroundComponent  },
  { path: "products", component: ProductListComponent },
  { path: "product/:id", component: ProductDetailsComponent },
  { path: "cart", component: ChartComponent },
  { path: "checkout", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
