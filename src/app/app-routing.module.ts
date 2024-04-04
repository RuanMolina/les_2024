import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ShoppingCartPageComponent } from './components/shopping-cart-page/shopping-cart-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { OrderConfirmationPageComponent } from './components/order-confirmation-page/order-confirmation-page.component';
import { ProductManagementComponent } from './components/admin/product-management/product-management.component';
import { OrderManagementComponent } from './components/admin/order-management/order-management.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'search',
    component:SearchpageComponent
  },{
    path:'product',
    component:ProductPageComponent
  },
  {
    path:'shoppingcart',
    component:ShoppingCartPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'register',
    component: RegisterPageComponent
  },
  {
    path:'order',
    component:OrderConfirmationPageComponent
  },
  {
    path:'admin/product',
    component:ProductManagementComponent
  },
  {
    path:'admin/order',
    component:OrderManagementComponent
  },
  {
    path:'admin/user',
    component:UserManagementComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'user/order',
    component:OrdersComponent
  }
  ,
  {
    path:'user/profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
