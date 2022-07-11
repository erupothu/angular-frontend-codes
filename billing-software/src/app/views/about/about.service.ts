import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  companyDetails = {
    company_name: '',
    address_line1: '',
    address_line2: '',
    state: '',
    country: '',
    zip: 0,
    email: '',
    phone: 0
  }

  constructor() { }
}
