import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from '../actions/auth.actions';
import { initCartStateOnReload } from '../actions/cart.actions';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private store: Store) {}

  setAuthState() {
    const getData = localStorage.getItem('auth');
    if (getData != null) {
      const auth = JSON.parse(getData);
      this.store.dispatch(loginAction(auth));
    }
  }

  setCartState() {
    const getData = localStorage.getItem('cart');
    if (getData != null) {
      const cart = JSON.parse(getData);
      this.store.dispatch(initCartStateOnReload({ cart: cart }));
    }
  }
}
