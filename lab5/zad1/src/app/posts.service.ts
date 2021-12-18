import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }


  getPosts(): Observable<JSON[]>{
    return this.http.get<JSON[]>("http://jsonplaceholder.typicode.com/posts")
  }

  getPhotos(): Observable<JSON[]>{
    return this.http.get<JSON[]>("http://jsonplaceholder.typicode.com/photos")
  }

  getPhotoUrlById(id: number): Observable<any>{
    return this.http.get<any>("http://jsonplaceholder.typicode.com/photos/" + id.toString())
  }

  sendPost(body: string): Observable<any>{
    return this.http.post<any>("http://jsonplaceholder.typicode.com/posts", body, httpOptions)
  }


}
