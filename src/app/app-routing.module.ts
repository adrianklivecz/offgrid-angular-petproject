import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutStepperComponent } from './checkout-stepper/checkout-stepper.component';
import { DeliveryAddressComponent } from './checkout-stepper/delivery-address/delivery-address.component';
import { OrderSummaryComponent } from './checkout-stepper/order-summary/order-summary.component';
import { PaymentMethodComponent } from './checkout-stepper/payment-method/payment-method.component';
import { ShippingMethodComponent } from './checkout-stepper/shipping-method/shipping-method.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'checkout',
    component: CheckoutStepperComponent,
    children: [
      {
        path: '',
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
