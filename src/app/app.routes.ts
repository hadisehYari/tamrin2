import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+pablic/public-template/public-template';
import { HomePage } from './+pages/+pablic/home-page/home-page';
import { AboutPage } from './+pages/+pablic/about-page/about-page';
import { ProductPage } from './+pages/+pablic/product-page/product-page';
import { ContactPage } from './+pages/+pablic/contact-page/contact-page';
import { PrivateTemplate } from './+pages/+private/private-template/private-template';
import { DashboardPage } from './+pages/+private/dashboard-page/dashboard-page';
import { UsersPage } from './+pages/+private/users-page/users-page';
import { ProductsPage } from './+pages/+private/products-page/products-page';
import { OrdersPage } from './+pages/+private/orders-page/orders-page';

export const routes: Routes = [
    {path:'pablic',component:PublicTemplate,children:[
        {path:'home',component:HomePage},
        {path:'about',component:AboutPage},
        {path:'products',component:ProductPage},
        {path:'contact',component:ContactPage},
        {path:'', redirectTo:'home',pathMatch:'prefix'},
        {path:'**',redirectTo:'home'},
    ]},
    {path:'private',component:PrivateTemplate,children:[
        {path:'dashboard', component:DashboardPage},
        {path:'users', component:UsersPage},
        {path:'products', component:ProductsPage},
        {path:'orders', component:OrdersPage},
        {path:'', redirectTo:'dashboard',pathMatch:'prefix'},
        {path:'**',redirectTo:'dashboard'},
    ]},
    {path:'',redirectTo:'pablic',pathMatch:'full'},
    {path:'**',redirectTo:'pablic'},

];
