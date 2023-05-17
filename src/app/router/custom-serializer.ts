import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateURL {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface CustomRouterModal {
  state: RouterStateURL;
  navigationId: number;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateURL> {
  serialize(routerState: RouterStateSnapshot): RouterStateURL {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
