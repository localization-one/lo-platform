import { IMenuItem } from '@services/menu';
import { ROUTES } from '@const';

const MENU_ITEMS: IMenuItem[] = [
  {
    label: 'Home',
    route: `${ROUTES.platform}/${ROUTES.projects}`,
    icon: 'home',
  },
  {
    label: 'Projects',
    route: `${ROUTES.platform}/${ROUTES.projects}`,
    icon: 'project',
  },
  {
    label: 'Users',
    route: 'users',
    icon: 'team',
  },
  {
    label: 'Settings',
    route: `${ROUTES.platform}/${ROUTES.profile}`,
    icon: 'setting',
  },
];

export { MENU_ITEMS };
