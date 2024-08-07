import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  // can also create an json file in assets then can give directly the url of http to thegetposts() methos
  

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]>
  {
    return this.http.get<any[]>(this.url);
  }
}
