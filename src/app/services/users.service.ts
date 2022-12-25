import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
    return this.httpClient.get(this.url);
  }
}
