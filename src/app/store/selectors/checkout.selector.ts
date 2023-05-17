import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CheckoutStateModal } from '../reducers/checkout.reducer';

const checkoutFeatureSelector =
  createFeatureSelector<CheckoutStateModal>('checkout');

export const getCheckoutState = createSelector(
  checkoutFeatureSelector,
  (checkout) => checkout
);
