import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Comment } from './comment-interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {

  comments: Comment[] = [];
  url = 'https://jsonplaceholder.typicode.com/posts/:post/comments';

  userId: number;
  postId: number;
  title: string;
  constructor(private http: HttpClient,private activatedRoute: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.paramMap.get('post');
    this.url = this.url.replace(':post',id);
    this.postId = +id;

    this.userId = +this.activatedRoute.snapshot.queryParamMap.get('userId');
    this.title  =  this.activatedRoute.snapshot.queryParamMap.get('title');

    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.url = this.url.replace(':post',params.get('post'));
    //   this.postId = +params.get('post');
    // });

    // this.activatedRoute.queryParamMap.subscribe((query) => {
    //   this.userId = +query.get('userId');
    //   this.title = query.get('title');
    // });

    this.http.get<Comment[]>(this.url)
          .subscribe((response: Comment[]) => this.comments = response);

  }

  redirectToTest(){
    this.router.navigate(['test', 12,'hello'],{
      queryParams : {
        one: 1,
        two:2
      }
    });
  }

}
