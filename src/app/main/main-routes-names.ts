import { MenuItem } from 'primeng/api';

const HOME: MenuItem = {
    label: 'Início',
    url: 'início',
    icon: 'pi pi-fw pi-home',
};
const MANAGEMENT: MenuItem = {
    label: 'Gestão',
    url: 'gestao',
    icon: 'pi pi-fw pi-building-columns',
};
const DASHBOARD: MenuItem = {
    label: 'Dashboard',
    url: 'dashboard',
    icon: 'pi pi-fw pi-home',
};
const REPORTS: MenuItem = {
    label: 'Relatórios',
    url: 'relatorios',
    icon: 'pi pi-fw pi-chart-bar',
};
const USERS: MenuItem = {
    label: 'Usuários',
    url: 'usuarios',
    icon: 'pi pi-fw pi-user',
};
const DEVICES: MenuItem = {
    label: 'Dispositivos',
    url: 'dispositivos',
    icon: 'pi pi-fw pi-box',
};

export const mainRoutesNames = {
    HOME,
    MANAGEMENT,
    DASHBOARD,
    REPORTS,
    USERS,
    DEVICES,
};
