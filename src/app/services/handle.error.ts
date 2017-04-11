import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class HandleErrorService {
  handleError (error: Response | any): Observable<any> {
    let errMsg: any;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg.status = parseInt(`${error.status}`);
      var errorDetail = `${err}`;
      errMsg.message = `${error.statusText || ''} ${err}`;
      //errMsg.message = `${err}`;
      errMsg.details = JSON.parse(errorDetail);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  returnError (err: string): Observable<string> {
    return Observable.throw(err);
  }
}
