import { IClient } from './client.interface';
export class Client implements IClient {

    public id: number;
    public name: string;
    public telephone: string;
    public address: string;
    public zip: string;
    public city: string;

    constructor(name?: string) {
        this.name = name;
    }

}
