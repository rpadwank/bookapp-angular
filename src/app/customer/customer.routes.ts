import { Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { CustomerLoginComponent } from './customer-login.component';

export const customerRoutes: Routes=[
{path:"signup", component: CustomerRegistrationComponent},
{path:"signin", component: CustomerLoginComponent}
];