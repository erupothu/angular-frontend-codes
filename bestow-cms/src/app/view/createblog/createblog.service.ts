import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateblogService {

  constructor(private http: HttpClient) { }

  saveBlogData(blogModel: any): Observable<any> {
    return this.http.post('//localhost:8091/addBlogPageData', blogModel);
  }
}
