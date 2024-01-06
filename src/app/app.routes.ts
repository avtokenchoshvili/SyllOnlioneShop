import { Routes } from '@angular/router';


import { HomeComponent } from './Components/home/home.component';
import { ProductInnerComponent } from './Components/shared/product-inner/product-inner.component';
import { ShopComponent } from './Components/shared/shop/shop.component';
import { CartsummaryComponent } from './Components/shared/cartsummary/cartsummary.component';
import { ShopInnerPgComponent } from './Components/shared/shop-inner-pg/shop-inner-pg.component';
import { SingUpComponent } from './Components/shared/sing-up/sing-up.component';
export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'products/inner/:productId', component: ProductInnerComponent },
    { 'path': 'shop', component: ShopComponent },
    { 'path': 'carts/:productId', component: CartsummaryComponent },
    { 'path': 'shop/inners/:shopId', component: ShopInnerPgComponent },
    { 'path': 'singup', component: SingUpComponent }
];
