import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthHttp {

  constructor(private http: Http) {}

  public createAuthorizationHeader(headers: Headers) {
    if (localStorage.getItem('token')) {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
  }

  public get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers // header: header (property shorthand)
    });
  }

  public post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers
    });
  }

  public delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers
    });
  }

  public put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers
    });
  }
}
