const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                'small':'10px',
            },
            backgroundColor : {
                blue:'#2196F3'
            },
            height : {
                '40px':'40px'
            },
            height : {
                '38px':'38px'
            },
            width : {
                '38px':'38px'
            }
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'),
        require('@tailwindcss/custom-forms'),
    ],
};
