import { Route } from '@angular/router';
import { ProductSearch } from './productsearch.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'productList',
    component: ProductSearch,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
