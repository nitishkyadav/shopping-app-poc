import { createAction, props } from '@ngrx/store';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import { CartStateModal } from '../reducers/cart.reducer';

export const addItemToCart = createAction(
  '[Product Page] Add Product To Cart',
  props<{ cartItem: CartItemModal }>()
);

export const incremeseItemById = createAction(
  '[Cart] Click on + Btn',
  props<{ id: number }>()
);
export const decreaseItemById = createAction(
  '[Cart] Click on - Btn',
  props<{ id: number }>()
);

export const initCartStateOnReload = createAction(
  '[On Reload] App Component',
  props<{ cart: CartStateModal }>()
);

export const cartLogoutAction = createAction('[Header Logout Button] Logout');
