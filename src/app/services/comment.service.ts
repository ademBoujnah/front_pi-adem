import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
  private apiServerUrl: "http://localhost/8090"
  constructor(private http : HttpClient) { } 

  public getComments(): Observable <Comment[]> {
    return this.http.get<Comment[]> (`http://localhost:8090/comment/all-comments`);
  }
  
  public deleteComment(id:number):Observable <Object> {
    return this.http.delete<Object>(`http://localhost:8090/comment/delete-comment/${id}`);
  }

  public addComment(comment:Comment):Observable<Comment>{
    return this.http.post<Comment> (`http://localhost:8090/comment/add-comment`,comment);
  }

}
