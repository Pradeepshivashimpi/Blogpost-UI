import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  blogPost$?:Observable<BlogPost[]>


  constructor(private blogPostservice:BlogPostService){

  }

  ngOnInit(): void {
    // get all blogposts from api
    this.blogPost$= this.blogPostservice.grtAllBlogPosts();
  }

}
