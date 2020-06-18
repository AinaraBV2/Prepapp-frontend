import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CalendarComponent } from './calendar.component';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!


@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    FullCalendarModule, // for FullCalendar!
  ],
  declarations: [
    CalendarComponent,
  ],
})
export class CalendarModule { }
