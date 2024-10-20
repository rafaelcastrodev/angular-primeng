import { MenuItem } from 'primeng/api';

const NOT_AUTH_REDIRECT: MenuItem = {
    label: 'Page Not Found',
    url: '404',
};
const AUTH: MenuItem = {
    label: 'Authentication',
    url: 'auth',
    icon: 'pi pi-fw pi-shield',
};
const MAIN: MenuItem = {
    label: 'Main',
    url: 'm',
};

export const appRoutesNames = { NOT_AUTH_REDIRECT, AUTH, MAIN };
