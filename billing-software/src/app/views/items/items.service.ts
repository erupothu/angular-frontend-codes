import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsList = [
    {name: 'Apple', price: 189, discount: 2, barcode: 123456, stock: 100, mrp: 200, finalPrice: 0, availableStock: 100 },
    {name: 'Orange', price: 179, discount: 2, barcode: 123457, stock: 200, mrp: 200, finalPrice: 0, availableStock: 150 },
    {name: 'Banana', price: 49, discount: 2, barcode: 123458, stock: 150, mrp: 200, finalPrice: 0, availableStock: 120 }
  ];

  constructor() { }
}
