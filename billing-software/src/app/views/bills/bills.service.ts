import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  billItems = [];
  bills = [];
  total = 0;

  yousaved = 0;
  

  constructor() { }
}
