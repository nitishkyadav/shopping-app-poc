import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CheckoutDataAction } from 'src/app/store/actions/checkout.actions';
import { StoreModal } from 'src/app/store/modals/store.modal';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  constructor(private store: Store<StoreModal>) {}
  clickedCheckout: boolean = false;
  checkoutData: {
    name: string;
    email: string;
    address: string;
  };

  getDataFromCheckoutForm(data: {
    name: string;
    email: string;
    address: string;
  }) {
    this.checkoutData = data;
    console.log(data);
    this.store.dispatch(CheckoutDataAction({ data: data }));
  }
}
