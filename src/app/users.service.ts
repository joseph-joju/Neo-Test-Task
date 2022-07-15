import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:3333/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{

    const users = this.http.get(this.url)
    return users
  }
  getUser(id : string): Observable<any>{
   return this.http.get(`${this.url}/${id}`)
  }
  postUser(payload: Users){
    return this.http.post(this.url,payload)
      .subscribe()
  }

  saveUser(payload: Users, id: string){
    return this.http.put(`${this.url}/${id}`,payload)
      .subscribe()
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/${id}`).subscribe();
  }
}
