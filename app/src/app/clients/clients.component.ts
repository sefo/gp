import {
  Component,
  OnInit
} from '@angular/core';
import { ClientsService } from './clients.service';
import { IClient } from '../../models/client.interface';
import { Client } from '../../models/client.class';

@Component({
  selector: 'clients',
  styles: [`
  `],
  template: require('./clients.component.html'),
  providers: [ClientsService]
})

export class ClientsComponent implements OnInit {

  private clients: Client[];
  private client: Client;
  private newClient: boolean;
  private displayDialog: boolean;

  constructor(private clientsService: ClientsService) {}

  public ngOnInit(): void {
    console.log('hello `Clients` component');
    this.clientsService.getAll().subscribe(
        (res) => this.clients = res
    );
  }

  private showDialogToAdd() {
      this.newClient = true;
      this.client = new Client();
      this.displayDialog = true;
  }

  private saveClient() {
      if (this.newClient) {
          this.clients.push(this.client);
      }
      this.clientsService.createClient(this.client).subscribe(
          (res) => console.log(res)
      );
      this.client = null;
      this.newClient = false;
      this.displayDialog = false;
  }

}
