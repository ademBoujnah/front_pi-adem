import { Component, OnInit } from '@angular/core';
import { Review } from '../services/review';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  public reviews: Review[];
  public show: boolean = false;

constructor(private reviewService:ReviewService){}

  ngOnInit() {
    this.getReviews();
  }

  public getReviews(): void {
    this.reviewService.getReviews().subscribe(
      (response: Review[]) => {
        this.reviews = response;
        // console.log(this.offers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.show = true;
  }



}