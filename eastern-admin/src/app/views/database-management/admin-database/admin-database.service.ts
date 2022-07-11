import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDatabaseService {

  constructor(private http: HttpClient) { }

  saveTableData(tableData: any): Observable<any> {
    return this.http.post('//localhost:9092/insert-into-tables', tableData)
  }
}
