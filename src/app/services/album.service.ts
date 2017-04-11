import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

//config
import { Api_config } from '../config';

//models
import { Album } from "../models/album";
import { User } from "../models/user";

//services
import { HandleErrorService } from "./handle.error";
import { MyLocalStorageService } from "./localStorage.service";

@Injectable()
export class AlbumService {
    constructor(
        private http: Http,
        private handleErrorService: HandleErrorService,
        private localStorage: MyLocalStorageService
    ){}

    getMyAlbums(): Observable<any> {
        var user: User = this.localStorage.get('user');
        if (!user || !user.id) this.handleErrorService.returnError('user is null');
        
        let url: string = Api_config.albums.getMyAlbums.url+'/'+user.id+'/albums';
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    getAlbumPhotos(albumId: number): Observable<any> {
        if (!albumId) this.handleErrorService.returnError('albumId is null');
        
        let url: string = Api_config.albums.getAlbumPhotos.url+'/'+albumId+'/photos';
        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

    delete(albumId: number): Observable<any> {
        if (!albumId) return this.handleErrorService.returnError('albumId is null');

        let url: string = Api_config.albums.delete.url+'/'+albumId;
        return this.http.delete(url)
            .map(res => res.json())
            .catch(this.handleErrorService.handleError);
    }

}