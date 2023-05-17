import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';
import { getCartState } from 'src/app/store/selectors/cart-selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItemModal[] = [];
  cartValue: number;
  constructor(private store: Store<StoreModal>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(getCartState).subscribe((cart) => {
      this.cartItems = cart.cartItems;
      this.cartValue = cart.cartValue;
    });
  }

  checkoutHandler() {
    this.router.navigateByUrl('/checkout');
  }
}
