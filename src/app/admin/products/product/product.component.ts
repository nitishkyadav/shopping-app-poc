import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductModal } from 'src/app/store/modals/product.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';
import {
  getProducts,
  getProductsById,
} from 'src/app/store/selectors/product-selectors';
import { getParamsFromRouterState } from 'src/app/store/selectors/route-selector';
import { removeProductAction } from 'src/app/store/actions/removeProduct.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  id: number;
  product$: Observable<ProductModal | undefined>;
  product: ProductModal | undefined;
  products: ProductModal[] = [];
  constructor(private router: Router, private store: Store<StoreModal>) {}

  ngOnInit(): void {
    this.store
      .select(getProducts)
      .subscribe((products) => (this.products = products));

    this.store.select(getParamsFromRouterState('id')).subscribe((id) => {
      this.id = id;
      this.product = this.products.find((product) => product.id === +id);
    });
  }

  removeFromStore() {
    this.store.dispatch(removeProductAction({ id: this.id }));
    this.router.navigateByUrl('/admin/products');
  }
}
