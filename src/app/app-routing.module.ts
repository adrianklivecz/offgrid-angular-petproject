import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutStepperComponent } from './checkout-stepper/checkout-stepper.component';
import { DeliveryAddressComponent } from './checkout-stepper/delivery-address/delivery-address.component';
import { ShippingMethodComponent } from './checkout-stepper/shipping-method/shipping-method.component';
import { PaymentMethodComponent } from './checkout-stepper/payment-method/payment-method.component';
import { OrderSummaryComponent } from './checkout-stepper/order-summary/order-summary.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'checkout',
    component: CheckoutStepperComponent,
    children: [
      { path: '', redirectTo: '/checkout/delivery-address', pathMatch: 'full' },

      {
        path: 'delivery-address',
        component: DeliveryAddressComponent,
      },
      { path: 'shipping-method', component: ShippingMethodComponent },
      { path: 'payment-method', component: PaymentMethodComponent },
      { path: 'order-summary', component: OrderSummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
