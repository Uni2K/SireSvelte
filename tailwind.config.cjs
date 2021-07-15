const colors = require("tailwindcss/colors");
module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'sire-primary': '#07A4E9',
            }
        },
        fontFamily: {
            'display': ['BerkshireSwash',],
        },
    },
    mode: 'jit',
    variants: {
        extend: {
        },
    },
    plugins: [
    ],
}
