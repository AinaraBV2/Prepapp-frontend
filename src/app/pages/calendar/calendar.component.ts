import { Component } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {

    // For fullCalendar
    calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
    locales = [esLocale];

}
