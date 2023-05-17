import { createReducer, on } from '@ngrx/store';
import { CheckoutDataModal } from '../modals/checkout.modal';
import {
  CheckoutDataAction,
  ClearCheckoutDataAction,
} from '../actions/checkout.actions';

const initialCheckoutState = {
  data: {},
};

export interface CheckoutStateModal {
  data: CheckoutDataModal | undefined;
}

export const CheckoutReducer = createReducer(
  initialCheckoutState,
  on(CheckoutDataAction, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  }),

  on(ClearCheckoutDataAction, (state) => {
    return {
      data: {},
    };
  })
);
