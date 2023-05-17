import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductModal } from 'src/app/store/modals/product.modal';
import { StoreModal } from 'src/app/store/modals/store.modal';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // products: ProductModal[] = [];

  // constructor(private store: Store<StoreModal>) {}
  ngOnInit(): void {}
}
