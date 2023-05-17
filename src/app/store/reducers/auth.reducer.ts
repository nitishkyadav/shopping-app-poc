import { createReducer, on } from '@ngrx/store';
import { AuthStateModal } from '../modals/store.modal';
import { loginAction, logoutAction } from '../actions/auth.actions';

const initialAuthState: AuthStateModal = {
  user: {},
};

export const authRedducer = createReducer(
  initialAuthState,
  on(loginAction, (state, action) => {
    console.log(action);
    const data = { ...action.user };
    localStorage.setItem(
      'auth',
      JSON.stringify({
        user: data,
      })
    );
    return {
      user: data,
    };
  }),

  on(logoutAction, (state) => {
    // localStorage.removeItem('auth');
    localStorage.setItem('auth', JSON.stringify({ user: {} }));
    return {
      user: {},
    };
  })
);
