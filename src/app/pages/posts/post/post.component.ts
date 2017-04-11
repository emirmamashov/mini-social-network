import { Component, OnInit } from '@angular/core';

//config
import { pageCountPost } from '../../../config';

//services
import { PostService } from '../../../services/post.service';
import { MyLocalStorageService } from '../../../services/localStorage.service';

//models
import { Post } from '../../../models/post';
import { Comment } from '../../../models/comment';
import { User } from '../../../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: Array<Post> = new Array<Post>();
  postsTop: Array<Post> = new Array<Post>();
  comments: Array<Comment> = new Array<Comment>();
  currentUser: User = new User();

  newPost: Post = new Post();

  constructor(
    private postService: PostService,
    private localStorage: MyLocalStorageService
  ) { }

  ngOnInit() {
    this.getPosts();
    if (this.localStorage.get('user')) this.currentUser = this.localStorage.get('user');
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (posts: Array<Post>) => {
        this.posts = posts;
        this.randomizePosts();
      },
      err => {
        console.log(err);
      }
    );
  }

  createPost(post: Post): void {
    if (!post || !this.currentUser.id) return console.log('post is null');
    post.userId = this.currentUser.id;

    this.postService.create(post).subscribe(
      (post: Post) => {
        if(post) {
          this.postsTop.push(post);
          //this.newPost = new Post();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePost(postId: number): void {
    if (!postId) return console.log('postId is null');

    this.postService.delete(postId).subscribe(
      (response) => {
        this.postsTop = this.postsTop.filter(x=>x.id != postId);
        this.posts = this.posts.filter(x=>x.id != postId);
      },
      err => {
        console.log(err);
      }
    );
  }

  getComments(postId: number): void {
    let post = this.postsTop.filter(x=>x.id === postId)[0];
    if (!postId || !post) return console.log('postId is null');
    
    this.postService.getComments(postId).subscribe(
      (comments: Array<Comment>) => {
        post.comments = comments;
      },
      err => {
        console.log(err);
      }
    );
  }

  randomizePosts(): void {
    if (!this.posts || this.posts.length==0) return console.log('posts is null');

    for(var i = 0; i < pageCountPost; i++) {
      var post = this.posts[Math.floor(Math.random() * this.posts.length>>0)];
      this.postsTop.push(post);
    }
  }

}