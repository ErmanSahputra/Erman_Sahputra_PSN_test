import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:any;

  constructor(private service:CommentsService){}

  ngOnInit() {
      this.service.getComments()
        .subscribe(response => {
          this.comments = response;
        });
  }
}
