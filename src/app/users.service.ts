import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { filter, map, Observable } from "rxjs";
import { Users, USERS_LIMIT } from "./users";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  baseUrl = "http://localhost:3333/";
  page = 1;
  limit = USERS_LIMIT;

  constructor(private http: HttpClient) {}

  /**
   * 
   * @param page page number
   * @returns Observable of Users list
   */
  getUsers(page?: number, order?: string, sort?: string, search?: string ): Observable<any> {
    let url = `${this.baseUrl}users`
    if(page){
      
      url = url + `?_page=${page}&_limit=${this.limit}`;
      
    }
    if(order){
      url = url + `&_order=${order}`
    }
    if(sort){
      url = url + `&_sort=${sort}`
    }
    if(search){
      url = url + `&name_like=${search}`
    }
    
    return this.http.get(url, { observe: "response" });
  }

  /**
   * 
   * @param id user id
   * @returns Observable of user
   */
  getUser(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${id}`);
  }

  
  postUser(payload: Users) {
    return this.http.post(`${this.baseUrl}users`, payload).subscribe();
  }

  saveUser(payload: Users, id: string) {
    return this.http.put(`${this.baseUrl}users/${id}`, payload).subscribe();
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.baseUrl}users/${id}`).subscribe();
  }
  // sortAgeUser(order?: string, page?: number) {
  //   return this.http.get(
  //     `${this.baseUrl}users?_sort=age&_order=${order}_page=${page}&_limit=${this.limit}`
  //   );
  // }
  // sortDateUser(order: string) {
  //   return this.http.get(
  //     `${this.baseUrl}users?_sort=createdAt&_order=${order}`
  //   );
  // }

  // searchUser(search:string){
  //   return this.http.get(
  //   `${this.baseUrl}users?name_like=${search}`
  //   );
  // }
}
