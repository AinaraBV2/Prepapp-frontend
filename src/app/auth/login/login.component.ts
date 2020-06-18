import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { UserService } from '../../@core/services/users.service';
import { Router } from '@angular/router';
import { GenericResponse } from '../../@core/data/generic-response';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent extends NbLoginComponent {

    constructor(
        private userService: UserService,
        authService: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) options,
        cd: ChangeDetectorRef,
        router: Router,
    ) {
        super(authService, options, cd, router);
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
    }

    login(): void {
        this.errors = [];
        this.messages = [];
        this.submitted = true;

        const username = this.user.email.replace('@everis.com', '');
        const hashed_pwd = sha512.sha512(this.user.password);

        this.userService.getUser(username).subscribe(
            (response: GenericResponse) => {
                this.submitted = false;

                if (response.isFailure()) {
                    this.errors = response.getErrors();
                    return;
                }

                if (hashed_pwd !== response.getDataResponse()?.hash) {
                    this.errors = ['La contraseña no es correcta'];
                    return;
                }

                // Seteamos el token
                this.userService.setToken(response.getDataResponse()?.token);
                // Seteamos el nombre
                this.userService.setIdentifier(response.getDataResponse()?.id_usuario);

                setTimeout(() => {
                    return this.router.navigateByUrl('pages');
                }, this.redirectDelay);

                this.cd.detectChanges();

            },
        );
    }
}
