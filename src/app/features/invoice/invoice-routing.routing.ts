import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'create-invoice',
    pathMatch: 'full'
  },
  {
    path: 'create-invoice',
    component: InvoiceCreateComponent
  },
  {
    path: 'detailed-invoice',
    component: InvoiceDetailComponent
  },
];

export const InvoiceRoutingRoutes = RouterModule.forChild(routes);
