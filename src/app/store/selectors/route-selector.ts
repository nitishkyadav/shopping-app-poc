import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomRouterModal } from 'src/app/router/custom-serializer';

const routeState = createFeatureSelector<CustomRouterModal>('router');

export const getRouterState = createSelector(routeState, (state) => state);

export const getParamsFromRouterState = (paramName: string) =>
  createSelector(routeState, (router) => {
    // console.log(router);
    return router.state.params[paramName];
  });
