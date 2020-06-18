
import { Component, OnInit } from '@angular/core';
import { UserService } from './@core/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {

    if (this.userService.getToken() !== '') {
      // Redireccionamos al dashboard
      this.router.navigateByUrl('pages');
    } else {
      // Redireccionamos al login
      this.router.navigateByUrl('auth');
    }
  }
}
