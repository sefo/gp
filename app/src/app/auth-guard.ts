import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AccessService } from './access/access.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private accessService: AccessService, private router: Router) { }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.accessService.getAuthConnexion().map(
            (result) => {
                if (!result.logFailed) {
                    return true;
                }
            })
            .catch(() => {
                this.router.navigate(['/access']);
                return Observable.of(false);
            });
    }
}
