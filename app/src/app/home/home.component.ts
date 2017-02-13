import {
  Component,
  OnInit
} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home',
  styles: [`
  `],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

  constructor(protected router: Router) {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  private navigate(route: String) {
    this.router.navigate([route]);
  }

}
