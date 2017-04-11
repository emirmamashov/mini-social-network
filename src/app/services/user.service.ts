import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";

//config
import { Api_config } from '../config';

//services
import { HandleErrorService } from "./handle.error";

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private handleErrorService: HandleErrorService
    ){}

    getUser(userId: number): Observable<any> {
        if (!userId) return this.handleErrorService.returnError('userId is null');

        let url: string = Api_config.users.getUserById.url+'/'+userId;
        return this.http.get(url)
                .map(res => res.json())
                .catch(this.handleErrorService.handleError);
    }
}