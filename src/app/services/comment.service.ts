import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com/comments';
   
  constructor(private httpClient: HttpClient) { }
  
  getComments(){
    return this.httpClient.get(this.url);
  }
}
