import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { filter, map, Observable } from "rxjs";
import { Users } from "../shared/Interfaces/users";
import { BASE_URL, INITIAL_PAGE, USERS_LIMIT } from "../shared/constants/url_params";


@Injectable({
  providedIn: "root",
})
export class UsersService {
  baseUrl = BASE_URL;
  page = INITIAL_PAGE;
  limit = USERS_LIMIT;
  sort = 'age';
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param page page number
   * @returns Observable of Users list
   */
  getUsers(page?: number, order?: string, sort?: string, search?: string ): Observable<HttpResponse<Users>> {
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
    
    return this.http.get<Users>(url, { observe: "response" , responseType: 'json'});
  }

  getUsersOnly(){
    return this.http.get(`${this.baseUrl}users`)
  }

  /**
   * 
   * @param id user id
   * @returns Observable of user
   */
  getUser(id: string): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}users/${id}`);
  }

  
  postUser(payload: any): Observable<Users> {
    return this.http.post<Users>(`${this.baseUrl}users`, payload);
  }

  saveUser(payload: Users, id: string) : Observable<Users>{
    return this.http.put<Users>(`${this.baseUrl}users/${id}`, payload);
  }

  deleteUser(id: string): Observable<Users> {
    return this.http.delete<Users>(`${this.baseUrl}users/${id}`);
  }
 
}
