import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackToTopArrowComponent } from './back-to-top-arrow/back-to-top-arrow.component';
import { CheckoutStepperComponent } from './checkout-stepper/checkout-stepper.component';
import { DeliveryAddressComponent } from './checkout-stepper/delivery-address/delivery-address.component';
import { OrderSummaryComponent } from './checkout-stepper/order-summary/order-summary.component';
import { PaymentMethodComponent } from './checkout-stepper/payment-method/payment-method.component';
import { ShippingMethodComponent } from './checkout-stepper/shipping-method/shipping-method.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
