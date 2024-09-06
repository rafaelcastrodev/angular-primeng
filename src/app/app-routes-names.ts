import { MenuItem } from 'primeng/api';

const NOT_AUTH_REDIRECT: MenuItem = {
    label: 'Página Não Encontrada',
    url: '404',
};
const AUTH: MenuItem = {
    label: 'Autenticação',
    url: 'aut',
    icon: 'pi pi-fw pi-shield',
};
const MAIN: MenuItem = {
    label: 'Main',
    url: 'm',
};

export const appRoutesNames = { NOT_AUTH_REDIRECT, AUTH, MAIN };
