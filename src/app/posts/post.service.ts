import { BadRequestError } from './../common/badRequest';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './post.interface';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

import { NotFoundError } from '../common/notFound';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  private url = 'https://jsonplaceholder.typicode.com/posts/';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
        .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
   if (error.status === 400)
      return throwError( new BadRequestError('error: Bad Request') || "error: Bad Request" );
   else if (error.status === 404)
      return throwError( new NotFoundError('error: Not Fond') || "error: Not Fond" );
   else (error.status === 0)
      return throwError( new AppError('error unexpected') || "error" );
  }

  // handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }
  

  getPost(id){
    return this.http.get<Post>(this.url+id);
  }

  addPost(post): Observable<Post> {
    return this.http.post<Post>(this.url,post)
      .pipe(catchError(this.errorHandler));
  }

  updatePost(id,post): Observable<Post>{
    return this.http.put<Post>(this.url + id,post)
  }

  deletePost(id): Observable<Post>{
    return this.http.delete<Post>(this.url+id)
      .pipe(catchError(this.errorHandler));
  }

}
