import {
  Component,
  OnInit
} from '@angular/core';
import { ClientsService } from './clients.service';
import { Client } from '../../models/client.interface';

@Component({
  selector: 'clients',
  styles: [`
  `],
  template: require('./clients.component.html'),
  providers: [ClientsService]
})

export class ClientsComponent implements OnInit {

  private clients: Client[];

  constructor(private clientsService: ClientsService) {}

  public ngOnInit(): void {
    console.log('hello `Clients` component');
    this.clientsService.getAll().subscribe(
        res => this.clients = res
    );
  }

}
