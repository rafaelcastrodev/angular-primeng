import { MenuItem } from 'primeng/api';

const NOT_AUTH_REDIRECT: MenuItem = {
  label: 'Not Authenticated Redirect',
  url: 'auth',
};
const AUTH: MenuItem = {
  label: 'Auth',
  url: 'auth',
};
const MAIN: MenuItem = {
  label: 'Main',
  url: 'main',
};

export const appRoutesNames = { NOT_AUTH_REDIRECT, AUTH, MAIN };
