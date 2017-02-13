import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    ''
  ],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <a [routerLink]=" ['./about'] " routerLinkActive="active">
        About
      </a>
      <a [routerLink]=" ['./clients'] " routerLinkActive="active">
        Clients
      </a>
    </footer>
    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
export class AppComponent implements OnInit {
  public name = 'GP';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
