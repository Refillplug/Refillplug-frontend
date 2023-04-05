export { default as logo } from "./assets/icons/logo.png";
export { default as eye } from "./assets/icons/eye_visible.png";

export const signupConfig = {
	header: "Log in or Create Account",
	subHeader:
		"Enter the email address you use to sign in to Pharmaco. We'll send you a link to reset it",
	inputs: [
		{
			name: firstname,
			title: "First Name",
			label: firstname,
			placeholder: "Enter Your First Name",
		},
        {
			name: lastname,
			title: "Last Name",
			label: lastname,
			placeholder: "Enter Your Last Name",
		},
        {
			name: username,
			title: "Username",
			label: username,
			placeholder: "username",
		},
        {
            name: email,
            title: "Email",
            label: "email",
            placeholder: "Enter email address",
            type: "email",
        },
        {
            name: phone,
            title: "Phone Number",
            label: "phone",
            placeholder: "Enter your phone no",
            type: "phone",
        },
        {
            name: password,
            title: "Password",
            label: "password",
            placeholder: "Enter your password",
            type: "password",
        },
        {
            name: password2,
            title: "Confirm Password",
            label: "password",
            placeholder: "Re-enter your password",
            type: "password",
        },
	],
	links: {
		to: "/login",
		text: "Log in",
	},
	button: {
		type: "submit",
		text: "Sign up",
	},
};

export const loginConfig = {
	header: "Log in or Create Account",
	inputs: [
        {
            name: email,
            title: "Email",
            label: "email",
            placeholder: "Enter email address",
            type: "email",
        },
        {
            name: password,
            title: "password",
            label: "password",
            placeholder: "Enter your password",
            type: "password",
        },
    ],
	links: {
        to: "/register",
		text: "",
	},
	button: {
		type: "submit",
		text: "Login",
	},
};


export const forgotPasswordConfig = {
	header: "Forgot Password",
    subHeader: "Enter the email address you use to sign in to Refillplug. We'll send you a link to reset it",
	inputs: [
        {
            name: email,
            title: "Email",
            label: "email",
            placeholder: "Enter email address",
            type: "email",
        },
    ],
	links: {
        to: "/login",
		text: "",
	},
	button: {
		type: "submit",
		text: "Reset Password",
	},
};

export const ReActivateConfig = {
	header: "Re Activate Account",
	inputs: [
        {
            name: password,
            title: "Password",
            label: "password",
            placeholder: "Enter your password",
            type: "password",
        },
        {
            name: password2,
            title: "Confirm Password",
            label: "password",
            placeholder: "Re-enter your password",
            type: "password",
        },
    ],
	links: {
        to: "/login",
		text: "",
	},
	button: {
		type: "submit",
		text: "Reset Password",
	},
};
