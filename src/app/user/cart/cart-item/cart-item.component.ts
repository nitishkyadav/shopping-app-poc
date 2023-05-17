import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import {
  decreaseItemById,
  incremeseItemById,
} from 'src/app/store/actions/cart.actions';
import { StoreModal } from 'src/app/store/modals/store.modal';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem: CartItemModal;

  constructor(private store: Store<StoreModal>) {}

  decrementHandler() {
    this.store.dispatch(decreaseItemById({ id: this.cartItem.id }));
  }
  incrementHandler() {
    this.store.dispatch(incremeseItemById({ id: this.cartItem.id }));
  }
}
