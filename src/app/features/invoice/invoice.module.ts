// core
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { InvoiceRoutingRoutes } from './invoice-routing.routing';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, InvoiceRoutingRoutes, ReactiveFormsModule, FormsModule],
  declarations: [InvoiceCreateComponent],
  providers: [CurrencyPipe],
})
export class InvoiceModule { }
