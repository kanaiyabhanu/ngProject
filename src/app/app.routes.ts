import { Route } from '@angular/router';
import { ProductSearch } from './productsearch.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard/authguard';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'productList',
    component: ProductSearch,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'register',
    component: ReactiveformComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
