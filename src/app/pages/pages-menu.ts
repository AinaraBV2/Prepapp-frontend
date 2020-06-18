import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Calendario',
    icon: 'calendar-outline',
    link: '/pages/calendar',
  },
  {
    title: 'NUEVO',
    group: true,
  },
  {
    title: 'Nuevo desarrollo',
    icon: 'code-outline',
    link: '/pages/development',
  },
];
