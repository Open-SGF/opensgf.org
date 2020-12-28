module.exports = {
    darkMode: false,
    theme: {
        colors: {
            blue: "#56A4D8",
            darkBlue: "#133654",
            white: "#FFFFFF",
            meetupRed: "#E42143",
            discordPurple: "#6D86D7"
        },
        fontFamily: {
            'sans': ['Open Sans', 'sans-serif'],
            'mono': ['Inconsolata', 'sans-serif']
        },
        container: {
            center: true,
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-debug-screens'),
    ],
    purge: [
        './src/**/*.js',
        './src/**/*.njk',
        './src/**/*.svg',
    ],
};
