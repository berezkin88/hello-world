import { AppBadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => {
          this.posts = response;
        });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.id;
          console.log(response);
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof AppBadRequestError) {
            alert('Bad request');
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
        });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          } else {
            throw error;
          }
        });
  }
}
