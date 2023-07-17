import { Component, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/data/schema';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {

  invoiceId: string = '';
  companyName: string = '';

  fromOwner: string = '';
  fromAddress: string = '';
  issuedDate: string = '';
  toOwner: string = '';
  toAddress: string = '';
  dueDate: string = '';

  invoiceLists: IInvoice[] = [];
  grandTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.invoiceId = 'NR 00101/08/2023';
    this.companyName = 'Norch Studio';

    this.fromOwner = 'Reza Raharjo';
    this.fromAddress = '4517 Washington Ave. Manchester, Kentucky 39495';
    this.issuedDate = '11 March, 2023';

    this.toOwner = 'Ghyan Gundono';
    this.toAddress = '1901 Thornridge Cir.Shiloh, Hawaii 81063';
    this.dueDate = '16 March, 2023';

    this.invoiceLists = [
      { id: 1, description: "Insurance Landing Page", price: 1000, quantity: 2, total_amount: 0 },
      { id: 2, description: "Insurance Illustration", price: 500, quantity: 1, total_amount: 0 }
    ]

    this.calculateTotalHandler();
  }

  calculateTotalHandler(): void {
    this.grandTotal = this.invoiceLists.reduce((total, item) => {
      const totalAmount = item.price * item.quantity;
      item.total_amount = totalAmount;
      return total + totalAmount;
    }, 0);
  }

}
