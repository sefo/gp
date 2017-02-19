import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { AccessService } from './access/access.service';

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
  `
})
export class AppComponent implements OnInit {
  public name = 'GP';

  constructor(
    public appState: AppState,
    private accessService: AccessService
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
