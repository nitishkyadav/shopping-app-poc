import { createReducer, on } from '@ngrx/store';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import {
  addItemToCart,
  cartLogoutAction,
  decreaseItemById,
  incremeseItemById,
  initCartStateOnReload,
} from '../actions/cart.actions';

export interface CartStateModal {
  cartItems: CartItemModal[] | [];
  cartValue: number;
}

const initialCartState: CartStateModal = {
  cartItems: [],
  cartValue: 0,
};

export const cartReducer = createReducer(
  initialCartState,
  on(addItemToCart, (state, action) => {
    let cartItems = state.cartItems;
    let cartValue = 0;
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === action.cartItem.id
    );
    if (existingItem) {
      const index = cartItems.findIndex(
        (cartItem) => cartItem.id === action.cartItem.id
      );
      cartItems[index].quantity += action.cartItem.quantity;
    } else {
      const newCartItems = [...cartItems, action.cartItem];
      cartItems = newCartItems;
    }
    cartItems.forEach((cartItem) => {
      cartValue = cartValue + +cartItem.quantity * +cartItem.price;
    });
    const finalCartState = {
      ...state,
      cartItems: cartItems,
      cartValue: cartValue,
    };
    localStorage.setItem('cart', JSON.stringify(finalCartState));
    return finalCartState;
  }),

  // Reducer For Clicking On + Btn
  on(incremeseItemById, (state, action) => {
    let cartValue = 0;
    let cartItems = [...state.cartItems];
    console.log('Increment Reducer');
    console.log(cartItems);
    const index = cartItems.findIndex((cartItem) => cartItem.id === action.id);
    // cartItems[index].quantity = cartItems[index].quantity + 1;
    //

    cartItems[index] = {
      ...cartItems[index],
      quantity: cartItems[index].quantity + 1,
    };
    //
    cartItems.forEach((cartItem) => {
      cartValue = cartValue + +cartItem.quantity * +cartItem.price;
    });

    const finalCartState = {
      ...state,
      cartItems: cartItems,
      cartValue: cartValue,
    };
    localStorage.setItem('cart', JSON.stringify(finalCartState));
    return finalCartState;
  }),

  // Reducer For Clicking On - Btn
  on(decreaseItemById, (state, action) => {
    let cartValue = 0;
    let cartItems = [...state.cartItems];
    const index = cartItems.findIndex((cartItem) => cartItem.id === action.id);
    const item = cartItems[index];
    if (item.quantity > 1) {
      // item.quantity = item.quantity - 1;
      //
      cartItems[index] = {
        ...cartItems[index],
        quantity: cartItems[index].quantity - 1,
      };
      //
    }
    if (item.quantity === 1 || item.quantity < 1) {
      console.log('Length<1');
      console.log(cartItems.filter((cartItem) => cartItem.id !== action.id));
      cartItems = cartItems.filter((cartItem) => cartItem.id !== action.id);
    }

    cartItems.forEach((cartItem) => {
      cartValue = cartValue + +cartItem.quantity * +cartItem.price;
    });

    const finalCartState = {
      ...state,
      cartItems: cartItems,
      cartValue: cartValue,
    };
    localStorage.setItem('cart', JSON.stringify(finalCartState));
    return finalCartState;
  }),

  // Initialize Cart State On Reload

  on(initCartStateOnReload, (state, action) => {
    return { ...action.cart };
  }),

  // Clear authState
  on(cartLogoutAction, (state) => {
    localStorage.removeItem('cart');
    return {
      cartItems: [],
      cartValue: 0,
    };
  })
);
