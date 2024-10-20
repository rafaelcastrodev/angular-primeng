import { MenuItem } from 'primeng/api';

const HOME: MenuItem = {
    label: 'Home',
    url: 'home',
    icon: 'pi pi-fw pi-home',
    allowed_roles: [],
};
const MANAGEMENT: MenuItem = {
    label: 'Management',
    url: 'management',
    icon: 'pi pi-fw pi-building-columns',
    allowed_roles: [],
};
const DASHBOARD: MenuItem = {
    label: 'Dashboard',
    url: 'dashboard',
    icon: 'pi pi-fw pi-home',
    allowed_roles: [],
};
const USERS: MenuItem = {
    label: 'Users',
    url: 'users',
    icon: 'pi pi-fw pi-users',
    allowed_roles: [],
};

export const mainRoutesNames = {
    DASHBOARD,
    HOME,
    MANAGEMENT,
    USERS,
};
