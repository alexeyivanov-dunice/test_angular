import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';  // URL to web api


  constructor(private http: HttpClient) { }

  getPosts (): Observable<any> {
    return this.http.get<any>(this.postUrl)
      .pipe(
        catchError(this.handleError('getPosts', {}))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
