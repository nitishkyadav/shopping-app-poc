import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './admin/products/products.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { ProductComponent } from './admin/products/product/product.component';
import { productsReducer } from './store/reducers/products.reducer';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appReducer } from './store/modals/store.modal';
import { CustomSerializer } from './router/custom-serializer';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { UserProductsComponent } from './user/products/products.component';
import { UserProductComponent } from './user/product/product.component';
import { CartItemComponent } from './user/cart/cart-item/cart-item.component';
import { OrderSuccessComponent } from './user/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    UserProductsComponent,
    UserProductComponent,
    CartItemComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
