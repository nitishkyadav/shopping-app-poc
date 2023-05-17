import { createAction, props } from '@ngrx/store';
import { AuthModal } from '../modals/auth.modal';

export const loginAction = createAction(
  '[Login Page] Login',
  props<{ user: AuthModal }>()
);

export const logoutAction = createAction('[NavBar] Logout');
