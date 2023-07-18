import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICurrency, IInvoice, IInvoiceFormData } from 'src/app/data/schema';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  currencyList: ICurrency[] = [];
  invoiceId: string = '';
  invoiceData!: IInvoiceFormData;
  invoiceList: IInvoice[] = [];
  newInvoice!: IInvoice;
  total: number = 0;

  constructor(private currencyPipe: CurrencyPipe) {
    this.invoiceData = {} as IInvoiceFormData;
  }

  ngOnInit() {
    initFlowbite();
    this.currencyList = [
      { value: 1, label: 'USD' },
      { value: 2, label: 'LKR' },
      { value: 3, label: 'EUR' },
      { value: 4, label: 'JPY' },
      { value: 5, label: 'INR' },
    ];
    this.invoiceId = 'NR 00101/08/2023';

    // For table
    this.invoiceList = [
      {
        id: 1,
        description: 'Company Name',
        price: 500,
        quantity: 1,
        total_amount: 0,
      },
    ];
    this.calculateTotalHandler();
  }

  invoiceForm = new FormGroup({
    bill_from: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    bill_to: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl('', Validators.required),
    currency: new FormControl(''),
  });

  get f() {
    return this.invoiceForm.controls;
  }

  submit() {
    console.log(this.invoiceForm.value);
  }

  // Format price for total amount calculation
  getFormattedPrice(item?: IInvoice) {
    this.invoiceList.forEach((e) => {
      if (item) {
        if (!item.price.startsWith('$')) {
          if (e.id === item.id) {
            e.price =
              this.currencyPipe.transform(item.price, 'USD', 'symbol') || '';
          }
        }
      } else {
        e.price =
          this.currencyPipe.transform(e.price, 'USD', 'symbol') || '';
      }
    });
  }

  // Calculate total amount of the invoice table
  calculateTotalHandler(): void {
    this.total = this.invoiceList.reduce((total, item) => {
      const price = typeof item.price === 'number'
        ? item.price
        : parseFloat(item.price.substring(1));
      item.total_amount = price * item.quantity;
      return total + item.total_amount;
    }, 0);
  }

  // On table data update
  onCellValueChange(): void {
    this.calculateTotalHandler();
  }

  // Add a new row
  addRow(): void {
    this.newInvoice = {
      id: this.invoiceList.length + 1,
      description: '',
      price: 0,
      quantity: 0,
      total_amount: 0,
    };
    this.invoiceList.push(this.newInvoice);
  }

  // Adding navigation for detail page
  navigateTo(route: string): void {
    window.open(route, '_blank');
  }

}
