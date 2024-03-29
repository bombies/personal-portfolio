/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        screens: {
            desktop: {'max': '1920px'},
            'laptop-big': {'max': '1440px'},
            laptop: {'max': '1280px'},
            tablet: {'max': '1025px'},
            phone: {'max': '615px'},
            'laptop-min': {'min': '1280px'},
            'tablet-min': {'min': '1025px'},
            'phone-min': {'min': '615px'},
        },
        extend: {
            animation: {
                'bounce-slow': 'bounce 5s infinite'
            },
            colors: {
                primary: "#c1189b",
                secondary: "#b0007e",
                danger: "#900000",
                warning: "#ffa700",
            },
            boxShadow: {
                'glow-primary-md': '0 0px 6px -1px #ff6f6f, 0 2px 4px -2px #ff6f6f)',
                'glow-primary-lg': '0 0px 15px -3px #ff6f6f, 0 4px 6px -4px #ff6f6f'
            },
            dropShadow: {
                'glow-primary-md': '0 4px 3px rgb(255 111 111 / 0.55)',
                'glow-primary-lg': '0 4px 10px rgb(255 111 111 / 0.55)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}
