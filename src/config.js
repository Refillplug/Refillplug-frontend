export { default as logo } from './assets/icons/logo.png'

export const loginConfig = {
    header: 'Login',
    subject: 'welcome back user',
    links: [{ to: '/', text: 'login page' }],
    inputs: [
        { type: 'text', name: 'username', placeholder: 'enter your username', label: 'this is a username' },
        { type: 'password', name: 'password', placeholder: 'enter your password', label: 'this is a password' },
    ],
    buttons: [
        { type: 'submit', text: 'submit' }
    ],
};

export const signupConfig = {
    header: '',
    subject: '',
    links: [],
    inputs: [],
    buttons: [],
};

export const activateAccountConfig = {
    header: '',
    subject: '',
    links: [],
    inputs: [],
    buttons: [],
};

export const resetPasswordConfig = {
    header: '',
    subject: '',
    links: [],
    inputs: [],
    buttons: [],
};

export const forgotPasswordConfig = {
    header: '',
    subject: '',
    links: [],
    inputs: [],
    buttons: [],
};
