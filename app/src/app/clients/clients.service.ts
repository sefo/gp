import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IClient } from '../../models/client.interface';

@Injectable()
export class ClientsService {

    constructor(protected http: Http) {}

    public getAll() {
        return this.http.get('/api/clients/')
            .map((response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    public createClient(client: IClient) {
        return this.http.post('/api/clients/', client)
            .map((response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
