import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './admin/products/products.component';
import { ProductComponent } from './admin/products/product/product.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserProductsComponent as UserProducts } from './user/products/products.component';
import {
  UserProductComponent as UserProduct,
  UserProductComponent,
} from './user/product/product.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminUsersGuard } from './guards/adminUsers.guard';
import { NormalUsersGuard } from './guards/NormalUser.guard';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { OrderSuccessComponent } from './user/order-success/order-success.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { SuccessGuard } from './guards/success.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'admin/products',
    component: ProductsComponent,
    canActivate: [AdminUsersGuard],
    children: [{ path: ':id', component: ProductComponent }],
  },

  {
    path: 'products',
    component: UserProducts,
    canActivate: [NormalUsersGuard],
  },

  {
    path: 'products/:id',
    component: UserProductComponent,
    canActivate: [NormalUsersGuard],
  },

  {
    path: 'cart',
    component: CartComponent,
    canActivate: [NormalUsersGuard],
  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [NormalUsersGuard, CheckoutGuard],
  },

  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [NormalUsersGuard, SuccessGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
