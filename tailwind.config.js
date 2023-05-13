/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-red": "#E50914",
                "primary-red-hover": "#F40612",
                "primary-red-active": "#BB0A12",
            },
        },
    },
};
