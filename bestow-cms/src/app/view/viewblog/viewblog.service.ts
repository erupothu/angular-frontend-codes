import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewblogService {

  constructor(private http: HttpClient) { }

  getBlogPagesByUserId(id: any): Observable<any> {
    return this.http.get('//localhost:8091/getBlogDataByUserId/' + id);
  }
}
