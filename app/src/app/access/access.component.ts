import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccessService } from './access.service';

@Component({
  selector: 'access',
  styles: [`
  `],
  template: require('./access.component.html')
})
export class AccessComponent implements OnInit {

  private accessCode: string;

  constructor(private router: Router, private accessService: AccessService) {
    this.accessCode = null;
  }

  public ngOnInit() {
    console.log('hello `Access` component');
  }

  public login() {
    this.accessService.login(this.accessCode).subscribe(
      (data) => {
        localStorage.setItem('token', <string> data.user.token);
        this.router.navigate(['/home']);
      },
        (error) => console.log('No access')
      );
  }

}
