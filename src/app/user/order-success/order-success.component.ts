import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import { cartLogoutAction } from 'src/app/store/actions/cart.actions';
import { ClearCheckoutDataAction } from 'src/app/store/actions/checkout.actions';
import { CheckoutDataModal } from 'src/app/store/modals/checkout.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
})
export class OrderSuccessComponent implements OnInit {
  cartItems: CartItemModal[];
  deliveryDate: string;
  email: string;
  name: string;
  checkoutData: CheckoutDataModal | undefined;
  //prettier-ignore
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

  //prettier-ignore
  months = ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"];

  constructor(private store: Store<StoreModal>) {}

  ngOnInit(): void {
    this.deliveryDate = this.getDeliveryDate();
    this.store.subscribe((store) => {
      this.cartItems = store.cart.cartItems;
      this.checkoutData = store.checkout.data;

      if (
        this.checkoutData &&
        ('name' in this.checkoutData, 'email' in this.checkoutData)
      ) {
        this.name = this.checkoutData.name;
        this.email = this.checkoutData.email;
      }
    });

    setTimeout(() => {
      this.store.dispatch(cartLogoutAction());
      this.store.dispatch(ClearCheckoutDataAction());
    }, 10000);
  }

  getDeliveryDate(): string {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    const day = this.days[date.getDay()];
    const updatedDate = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    const deliveryDate = `${day}, ${month} ${updatedDate}th, ${year}`;
    return deliveryDate;
  }
}
