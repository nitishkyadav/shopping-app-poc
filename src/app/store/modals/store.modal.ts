import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ProductModal } from './product.modal';
import { productsReducer } from '../reducers/products.reducer';
import { AuthModal } from './auth.modal';
import { authRedducer } from '../reducers/auth.reducer';
import { CartStateModal, cartReducer } from '../reducers/cart.reducer';
import {
  CheckoutReducer,
  CheckoutStateModal,
} from '../reducers/checkout.reducer';

export interface StoreModal {
  auth: AuthStateModal;
  products: ProductModal[];
  cart: CartStateModal;
  router: RouterReducerState;
  checkout: CheckoutStateModal;
}

export interface AuthStateModal {
  user: AuthModal | {};
}

export const appReducer = {
  auth: authRedducer,
  products: productsReducer,
  cart: cartReducer,
  router: routerReducer,
  checkout: CheckoutReducer,
};
