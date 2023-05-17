import { createAction, props } from '@ngrx/store';

export const removeProductAction = createAction(
  '[Admin-Products] Remove Product',
  props<{ id: number }>()
);
