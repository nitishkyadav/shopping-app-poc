import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductModal } from 'src/app/store/modals/product.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';
import { getProducts } from 'src/app/store/selectors/product-selectors';

@Component({
  selector: 'app-user-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class UserProductsComponent implements OnInit {
  products: ProductModal[];

  constructor(private store: Store<StoreModal>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(getProducts).subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
