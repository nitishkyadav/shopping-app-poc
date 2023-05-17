import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartStateModal } from '../reducers/cart.reducer';

const cartSelector = createFeatureSelector<CartStateModal>('cart');

export const getCartState = createSelector(cartSelector, (cart) => cart);
