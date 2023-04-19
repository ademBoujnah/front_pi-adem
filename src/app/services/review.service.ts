import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiServerUrl: "http://localhost/8090"
  constructor(private http : HttpClient) { } 

  public getReviews(): Observable <Review[]> {
    return this.http.get<Review[]> (`http://localhost:8090/review/all-reviews`);
  }
}
