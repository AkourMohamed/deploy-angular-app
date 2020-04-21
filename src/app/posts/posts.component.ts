
import { Component, OnInit } from '@angular/core';
import { Post } from './post.interface';
import { PostService } from './post.service';
import { AppError } from './../common/app-error';
import { BadRequestError } from '../common/badRequest';
import { NotFoundError } from './../common/notFound';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
 isHidden : boolean = false;  
 
 posts: Post[] = [];

  post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
 }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe( (response: Post[]) => {
          this.posts = response;
      }, (error: AppError) => {
        if(error instanceof BadRequestError){
          alert('bad request error ( get )');
          console.log(error);
        } else if(error instanceof NotFoundError){
          alert('not found ( get )');
          console.log(error);
        } else {
          alert('unexpected error ( get ) ');
          console.log(error);
        }
      });
  }

  addPost(): void {
    this.postService.addPost(this.post)
      .subscribe( (response: Post) => {
        //let json = JSON.parse(JSON.stringify(response)).id;
          this.post.id = response.id;
          this.posts.unshift(this.post);

          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: 1
          }
          console.log('ajouter avec succeser');
        },  (error: AppError) => {
          if(error instanceof BadRequestError){
            alert('bad request error ( post )');
            console.log(error);
          } 
          else {
            alert('unexpected error ( post )');
            console.log(error);
          }
          
        });
  }

  editPost(post){
   this.post = post;
   this.isHidden = true;
  }

  updatePost(){

    this.postService.updatePost(this.post.id,this.post)
      .subscribe( (response: Post) => {

        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 1
        }

        this.isHidden = false;
        console.log('updated');
      }, error => {
        alert('unexpected error');
        console.log(error);
      });
  }

  deletePost(post){
    this.postService.deletePost(post.id)
      .subscribe( (response: Post) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        console.log('deleted');
      }, (error: AppError) => {
        if(error instanceof NotFoundError){
          alert('this post not existe, or alreaady deleted ( delete )');
          console.log(error);
        } 
        else {
          alert('unexpected error( delete )');
          console.log(error);
        }

      });
  }

  lunch(){
    console.log(this.posts);
  }

}