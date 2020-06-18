import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule,
} from '@nebular/theme';

import { NgxLoginComponent } from './login/login.component';
import { NgxAuthComponent } from './auth.component';
import { NbCardModule } from '@nebular/theme';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxAuthComponent,
  ],
})
export class NgxAuthModule {
}
