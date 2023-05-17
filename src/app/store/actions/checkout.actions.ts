import { createAction, props } from '@ngrx/store';
import { CheckoutDataModal } from '../modals/checkout.modal';

export const CheckoutDataAction = createAction(
  '[Checkout Page] Clicked on Checkout Button',
  props<{ data: CheckoutDataModal }>()
);

export const ClearCheckoutDataAction = createAction(
  '[Order Success] Cleared by Timeout'
);
