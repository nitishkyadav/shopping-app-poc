import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateModal } from '../modals/store.modal';
import { AuthModal } from '../modals/auth.modal';

const authSelector = createFeatureSelector<AuthStateModal>('auth');

export const getAuthState = createSelector(
  authSelector,
  (auth: AuthStateModal) => auth
);

export const getUserState = createSelector(
  authSelector,
  (auth: AuthStateModal) => auth.user
);

// To check for User to be Admin
export const getAdminStatus = createSelector(
  getUserState,
  (user: AuthModal | {}) => {
    // if (user) {
    if ('isAdmin' in user) {
      return user.isAdmin;
    } else {
      return false;
    }
  }
);
