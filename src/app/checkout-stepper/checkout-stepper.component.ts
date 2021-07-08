import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-stepper',
  templateUrl: './checkout-stepper.component.html',
  styleUrls: ['./checkout-stepper.component.scss'],
})
export class CheckoutStepperComponent implements AfterViewInit {
  constructor(private route: Router) {}

  checkoutSteps = [
    {
      name: 'Delivery Address',
      class: 'nav__address',
      path: 'checkout/delivery-address',
    },
    {
      name: 'Shipping Method',
      class: 'nav__shipping',
      path: 'checkout/shipping-method',
    },
    {
      name: 'Payment Method',
      class: 'nav__payment',
      path: 'checkout/payment-method',
    },
    {
      name: 'Order Summary',
      class: 'nav__summary',
      path: 'checkout/order-summary',
    },
  ];

  stepper: number = 0;

  ngAfterViewInit() {
    this.setActiveTab();
    this.hideBackBtn();
  }

  nextStep() {
    const nextBtn = document.querySelector('.next-btn');
    const backBtn = document.querySelector('.back-btn');

    if (this.stepper < this.checkoutSteps.length - 1) {
      this.stepper++;
      this.setActiveTab();
    }

    if (this.stepper == this.checkoutSteps.length - 1) {
      nextBtn?.classList.add('order-submit');
      nextBtn!.innerHTML = 'Send me the goods!';
    }
    backBtn?.classList.remove('hidden');
  }

  previousStep() {
    const nextBtn = document.querySelector('.next-btn');
    const backBtn = document.querySelector('.back-btn');

    if (this.stepper > 0) {
      this.stepper--;
      this.setActiveTab();
    }
    if (this.stepper == 0) backBtn?.classList.add('hidden');

    if (this.stepper < this.checkoutSteps.length - 1)
      nextBtn?.classList.remove('order-submit');
    nextBtn!.innerHTML = 'Next';
  }

  setActiveTab() {
    this.route.navigateByUrl(this.checkoutSteps[this.stepper].path);
    const navigationItems = document.querySelectorAll('.checkout-step');

    navigationItems.forEach((navigationItem) => {
      const currentNavigation = this.checkoutSteps[this.stepper];

      if (navigationItem.classList.contains(currentNavigation.class)) {
        navigationItem.classList.add('selected');
      } else {
        navigationItem.classList.remove('selected');
      }
    });
  }

  hideBackBtn() {
    const backBtn = document.querySelector('.back-btn');
    backBtn?.classList.add('hidden');
  }
}
