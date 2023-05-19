import { MenuItem } from 'primeng/api';

const SIGNIN: MenuItem = {
    label: 'Sign In',
    url: 'signin',
};

const SIGNUP: MenuItem = {
    label: 'Sign Up',
    url: 'signup',
};

const RECOVER_PASSWORD: MenuItem = {
    label: 'Recover Password',
    url: 'recover-password',
};

const FORGOT_PASSWORD: MenuItem = {
    label: 'Forgot Password',
    url: 'forgot-password',
};

export const authRoutesNames = {
    SIGNIN,
    SIGNUP,
    RECOVER_PASSWORD,
    FORGOT_PASSWORD,
};
