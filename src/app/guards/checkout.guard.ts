import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { State, Store } from '@ngrx/store';
import { getCartState } from '../store/selectors/cart-selectors';

@Injectable({ providedIn: 'root' })
export class CheckoutGuard {
  containsCartItems: boolean;
  constructor(private store: Store, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.store.select(getCartState).subscribe((cart) => {
      if (cart.cartItems.length > 0) {
        this.containsCartItems = true;
      } else {
        this.containsCartItems = false;
        this.router.navigateByUrl('/products');
      }
    });
    return this.containsCartItems;
  }
}
