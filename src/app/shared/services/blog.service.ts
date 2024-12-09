import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { ApiConstant } from '../constants/api.constant';
import { BlogInterface } from '../models/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _httpClient: HttpClient) { }

  fetchPosts(page: number = 1, perPage: number = 9): Observable<BlogInterface[]> {
    return this._httpClient
      .get<BlogInterface[]>(`${ApiConstant.articlesAPi}?page=${page}&per_page=${perPage}`)
      .pipe(catchError(() => throwError(() => new Error('Failed to fetch blog posts.'))));
  }
}
