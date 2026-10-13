import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor(private http: HttpClient) { }

  myurl = 'https://dummyjson.com/users?limit=10&select=id,firstName,lastName,age';

  get(): Observable<any> {
    return this.http.get(this.myurl);
  }
// add data
  post(): Observable<any> {
    return this.http.post('https://dummyjson.com/users/add', {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    });
  }
// update data
  put(): Observable<any> {
    return this.http.put('https://dummyjson.com/users/1', {
      firstName: 'John',
      lastName: 'Doe',
      age: 33
    });
  }

  delete(): Observable<any> {
    return this.http.delete('https://dummyjson.com/users/1');
  }
}