import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  url ='http://localhost:3000/users';

  constructor(private http: HttpClient) {}

 getuser(){
  return this.http.get(this.url);
 }
  adduser(user:any){
    return this.http.post(this.url, user);
  }
  edituser(id:any, user:any){
    return this.http.put(`${this.url}/${id}`,user);
  }
  deleteuser(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}