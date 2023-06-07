export { default as logo } from "./assets/icons/logo.png";
export { default as mail } from "./assets/icons/mail.svg";
export { default as copy } from "./assets/icons/copy.svg";
export { default as logo2 } from "./assets/icons/logo2.svg";
export { default as phone } from "./assets/icons/phone.svg";
export { default as banner } from './assets/image/banner.svg';
export { default as twitter } from "./assets/icons/twitter.svg";
export { default as facebook } from "./assets/icons/facebook.svg";
export { default as instagram } from "./assets/icons/instagram.svg";
export { default as subscribe } from './assets/image/subscribe.svg';

export const signupConfig = {
    header: "Sign Up",
    subHeader:
        "Enter all details correctly",
    inputs: [
        {
            required: true,
            name: 'first_name',
            title: "First Name",
            label: 'first name',
            placeholder: "Enter Your First Name",
        },
        {
            required: true,
            name: 'lastname',
            title: "Last Name",
            label: 'last name',
            placeholder: "Enter Your Last Name",
        },
        {
            name: 'email',
            required: true,
            type: "email",
            title: "Email",
            label: "email",
            placeholder: "Enter email address",
        },
        {
            required: true,
            type: "phone",
            title: "phone",
            name: 'phone_number',
            label: "Phone Number",
            placeholder: "Enter your phone no",
        },
        {
            required: true,
            name: 'password',
            type: "password",
            title: "Password",
            label: "password",
            placeholder: "Enter your password",
        },
        {
            required: true,
            type: "password",
            name: 'password2',
            label: "Confirm Password",
            title: "repeat-password",
            placeholder: "Confirm your password",
        },
    ],
    links: [{ to: "/login", text: "Already on Refillplug? *Log in*", }],
    buttons: [{ type: "submit", text: "Sign up", }],
};

export const loginConfig = {
    header: "Log in or Create Account",
    inputs: [
        {
            type: "email",
            name: 'email',
            required: true,
            title: "email",
            label: "email",
            placeholder: "Enter email address",
        },
        {
            required: true,
            type: "password",
            name: 'password',
            title: "password",
            label: "password",
            placeholder: "Enter your password",
            link: [{ to: "/password-reset", text: 'forgot password?' }],
        },
    ],
    links: [{ text: "New to Refillplug? *sign up*", to: "/register", }],
    buttons: [{ type: "submit", text: "Login" },],
};

export const forgotPasswordConfig = {
    header: "Forgot Password",
    subject: "Enter the email address you use to sign up to Refillplug. We'll send you a link to reset your password",
    inputs: [
        {
            name: 'email',
            type: "email",
            title: "Email",
            label: "email",
            required: true,
            placeholder: "Enter email address",
        },
    ],
    links: [{ to: "/login", text: "Back to *login*", }],
    buttons: [{ type: "submit", text: "Reset Password", }],
};

export const ReActivateConfig = {
    header: "Re Activate Account",
    subject: "Enter the email address you use to sign up to Refillplug. We'll send you a link to activate your account",
    inputs: [
        {
            type: "email",
            name: 'email',
            label: "email",
            required: true,
            title: "Enter email",
            placeholder: "Enter your email",
        },
        
    ],
    links: [{ to: "/login", text: "Back to *login*", }],
    buttons: [{ type: "submit", text: "Activate", }],
};

export const subscribeConfig = {
    inputs: [
        {
            type: "text",
            required: true,
            name: 'first_name',
            title: "First Name",
            placeholder: "First Name",
        },
        {
            type: "text",
            required: true,
            name: 'last_name',
            title: "Last Name",
            placeholder: "Last Name",
        },
        {
            type: "email",
            name: 'email',
            required: true,
            title: "Enter your Email Address",
            placeholder: "Enter your Email Address",
        },
    ],
    buttons: [{ type: "submit", text: "Subscribe", }],
};

export const portfolio = [
    { title: "Customer's Satisfaction", data: "98%" },
    { title: "Trust us", data: "500+" },
    { title: "Saved on Medication", data: "50%" },
    { title: "Saved Monthly", data: "5Hrs" },
];
