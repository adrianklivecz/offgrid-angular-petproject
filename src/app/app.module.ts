import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { SearchComponent } from './search/search.component';
import { BackToTopArrowComponent } from './back-to-top-arrow/back-to-top-arrow.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutStepperComponent } from './checkout-stepper/checkout-stepper.component';
import { DeliveryAddressComponent } from './checkout-stepper/delivery-address/delivery-address.component';
import { ShippingMethodComponent } from './checkout-stepper/shipping-method/shipping-method.component';
import { PaymentMethodComponent } from './checkout-stepper/payment-method/payment-method.component';
import { OrderSummaryComponent } from './checkout-stepper/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductListItemComponent,
    SearchComponent,
    BackToTopArrowComponent,
    ProductDetailsComponent,
    CheckoutStepperComponent,
    DeliveryAddressComponent,
    ShippingMethodComponent,
    PaymentMethodComponent,
    OrderSummaryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
