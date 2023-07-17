export interface IInvoiceFormData {
  invoice_from: string;
  invoice_to: string;
  email: string;
  title: string;
  issued_on: string;
  due_on: string;
}

export interface IInvoice {
  id: number;
  description: string;
  price: any;
  quantity: number;
  total_amount: number;
}

export interface ICurrency {
  value: number;
  label: string;
}
