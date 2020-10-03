import { AppBadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400) {
          return Observable.throw(new AppBadRequestError(error));
        }
        return Observable.throw(new AppError(error));
      }));
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        }
        return Observable.throw(new AppError(error));
      }));
  }
}
