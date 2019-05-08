import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.routes';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
@NgModule({
    declarations:[CustomerRegistrationComponent, CustomerLoginComponent],
    imports:[BrowserModule, FormsModule, HttpClientModule, RouterModule.forChild(customerRoutes)],
    exports:[CustomerRegistrationComponent, CustomerLoginComponent, RouterModule],
    providers:[CustomerService]
})
export class CustomerModule{

}