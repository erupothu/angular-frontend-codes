import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post('//localhost:8091/register', user);
  }

  validateName(name: string): Observable<any> {
    return this.http.get('//localhost:8091/validate-user/' + name);
  }
}
