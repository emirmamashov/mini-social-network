import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

//config
import { Api_config } from '../config';

//models
import { Post } from "../models/post";

//services
import { HandleErrorService } from "./handle.error";

@Injectable()
export class PostService {
    constructor(
        private http: Http,
        private handleErrorService: HandleErrorService
    ){}

    getPosts(): Observable<Array<Post>> {
        let url: string = Api_config.posts.getPosts.url;
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    create(post: Post): Observable<any> {
        if (!post) return this.handleErrorService.returnError('post is null');

        let url: string = Api_config.posts.createPost.url;
        return this.http.post(url, post)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    delete(postId: number): Observable<any> {
        if (!postId) return this.handleErrorService.returnError('post is null');

        let url: string = Api_config.posts.deletePost.url+'/'+postId;
        return this.http.delete(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    getComments(postId: number): Observable<any> {
        if (!postId) return this.handleErrorService.returnError('postId is null.');

        let url: string = Api_config.posts.getPosts.url+'/'+postId+'/comments';
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }
}