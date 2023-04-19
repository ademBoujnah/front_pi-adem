import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { Comment } from '../services/comment';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private commentService:CommentService , private router:Router) { }
  public comments:Comment[] ;
 comment:Comment = new Comment();
  ngOnInit(): void {
  }


  addComment(){
    this.commentService.addComment(this.comment).subscribe( data =>{
      console.log(this.comment);
      this.goToComments();
    },
    error => console.log(error));
  }
goToComments(){
  this.router.navigate(['/comments']);
}

}
