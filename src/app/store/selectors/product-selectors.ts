import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModal } from '../modals/product.modal';

const getProductsState = createFeatureSelector<ProductModal[]>('products');

export const getProducts = createSelector(getProductsState, (products) => {
  console.log(products);
  return products;
});

// export const getProductsById = createSelector(
//   getProductsState,
//   (state, props) => {
//     return state.find((product: ProductModal) => product.id === props.id);
//   }
// );

export const getProductsById = (id: number) =>
  createSelector(getProductsState, (products: ProductModal[]) => {
    console.log('Get product by id');
    console.log(products);
    const temp = products.find((product) => product.id === +id);
    console.log(temp);
    return temp;
  });
