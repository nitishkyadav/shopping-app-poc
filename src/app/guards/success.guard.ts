import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { State, Store } from '@ngrx/store';
import { CheckoutService } from '../user/checkout/checkout.service';
import { StoreModal } from '../store/modals/store.modal';
import { getCheckoutState } from '../store/selectors/checkout.selector';
import { CheckoutStateModal } from '../store/reducers/checkout.reducer';

@Injectable({ providedIn: 'root' })
export class SuccessGuard {
  isDataAvailable: boolean;
  checkData: CheckoutStateModal;
  constructor(private store: Store<StoreModal>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.store.select(getCheckoutState).subscribe((store) => {
      this.checkData = store;
    });
    if (this.checkData.data && Object.keys(this.checkData.data).length > 0) {
      this.isDataAvailable = true;
    } else {
      this.router.navigateByUrl('/products');
      this.isDataAvailable = false;
    }
    return this.isDataAvailable;
  }
}
