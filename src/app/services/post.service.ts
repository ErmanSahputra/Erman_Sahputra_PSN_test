import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/users';
   
  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get(this.url);
  }
  
}

