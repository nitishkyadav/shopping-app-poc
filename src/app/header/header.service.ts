import { Injectable } from '@angular/core';
import { StoreModal } from '../store/modals/store.modal';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { logoutAction } from '../store/actions/auth.actions';
import { cartLogoutAction } from '../store/actions/cart.actions';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  constructor(private store: Store<StoreModal>, private router: Router) {}

  logoutHandler() {
    this.store.dispatch(logoutAction());
    this.store.dispatch(cartLogoutAction());
    this.router.navigateByUrl('/login');
  }
}
