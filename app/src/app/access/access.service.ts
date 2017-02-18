import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttp } from '../auth-http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    AuthHttp
  ]
})

@Injectable()
export class AccessService {

    private _user: Subject<any> = new ReplaySubject<any>(1);
    private user: Observable<any> = this._user.asObservable();

    constructor(protected http: AuthHttp) { }

    public getAuthConnexion() {
        return this.http.get('/auth-connexion')
            .map((response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    public login(password: string) {
        return this.http.post('/auth/access', {password})
            .map((response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    this._user.next(response.json().password);
                    return response.json();
                }
            });
    }

    public logout(): void {
        this._user.next(null);
    }

    public getUser(): any {
        return this.user;
    }

    public setUser(utilisateur: any): void {
        this._user.next(utilisateur);
    }

    public isLogged(): boolean {
        return !(this._user.next() == null || this._user.next() === undefined);
    }

}
