import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from './checkout.service';
// import {EventEmitter} from "rxjs",
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  @Output() checkoutData = new EventEmitter<{ name: string; email: string }>();
  constructor(
    private router: Router,
    private checkoutService: CheckoutService
  ) {}

  checkoutHandler(form: NgForm) {
    // this.checkoutData.
    const checkoutData = {
      name: form.value.name,
      email: form.value.email,
      address: form.value.address,
    };
    this.checkoutService.getDataFromCheckoutForm(checkoutData);
    this.router.navigateByUrl('/order-success');
  }
}
