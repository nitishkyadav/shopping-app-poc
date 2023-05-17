import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModal } from 'src/app/store/modals/store.modal';
import { Observable } from 'rxjs';
import { ProductModal } from 'src/app/store/modals/product.modal';
import { Router } from '@angular/router';
import { getParamsFromRouterState } from 'src/app/store/selectors/route-selector';
import { getProducts } from 'src/app/store/selectors/product-selectors';
import { NgForm } from '@angular/forms';
import { CartItemModal } from 'src/app/shared/modal/cart-item.modal';
import { addItemToCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-user-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class UserProductComponent implements OnInit {
  id: number;
  defaultQuantity = 1;
  // product$: Observable<ProductModal | undefined>;
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

  formSubmit(data: NgForm) {
    console.log(data);

    if (this.product) {
      //
      this.store.dispatch(
        addItemToCart({
          cartItem: {
            title: this.product?.title,
            id: this.product?.id,
            price: this.product?.price,
            quantity: +data.value.quantity,
            image: this.product.image,
          },
        })
      );
    }
  }
}
