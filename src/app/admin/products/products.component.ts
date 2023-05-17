import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModal } from 'src/app/store/modals/product.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';
import { getProducts } from 'src/app/store/selectors/product-selectors';
import { getParamsFromRouterState } from 'src/app/store/selectors/route-selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  id: undefined | string | number;
  products$: Observable<ProductModal[]>;
  constructor(private store: Store<StoreModal>, private route: ActivatedRoute) {
    console.log('Products');
  }
  ngOnInit(): void {
    // this.products$ = this.store.select((store) => {
    //   console.log(store.products);
    //   return store.products;
    // });

    this.products$ = this.store.select(getProducts);
    this.store
      .select(getParamsFromRouterState('id'))
      .subscribe((id: undefined | number | string) => {
        console.log('ID: ' + id);
        this.id = id;
      });
  }
}
