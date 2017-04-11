import {LocalStorageService} from 'angular-2-local-storage';
import {Injectable} from '@angular/core';

@Injectable()
export class MyLocalStorageService {
  constructor(private localStorage: LocalStorageService){}

  get(name: string): any {
    return this.localStorage.get(name);
  }

  set(name: string, value: any): any {
    if (this.localStorage.get(name)) {
      this.localStorage.set(name, value);
    } else {
      this.localStorage.add(name, value);
    }
  }
}
