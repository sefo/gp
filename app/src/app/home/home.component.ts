import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  styles: [`
  `],
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Home` component');
  }

}
