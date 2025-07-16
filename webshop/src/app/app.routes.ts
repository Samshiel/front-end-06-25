import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ShopsComponent } from './shops/shops.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ManageCategoriesComponent } from './admin/manage-categories/manage-categories.component';
import { ManageShopsComponent } from './admin/manage-shops/manage-shops.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "cart", component: CartComponent},
    {path: "contact-us", component: ContactUsComponent},
    {path: "product/:id", component: SingleProductComponent},
    {path: "shops", component: ShopsComponent},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignupComponent},
    {path: "admin", component: AdminHomeComponent},
    {path: "admin/add-product", component: AddProductComponent},
    {path: "admin/manage-products", component: ManageProductsComponent},
    {path: "admin/manage-categories", component: ManageCategoriesComponent},
    {path: "admin/manage-shops", component: ManageShopsComponent},
    {path: "admin/edit-product", component: ManageProductsComponent},
    {path: "**", component: NotFoundComponent}
];
