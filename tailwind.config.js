/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f172a', // slate-900
                primary: '#6366f1', // indigo-500
                secondary: '#10b981', // emerald-500
                accent: '#34d399', // emerald-400
            },
        },
    },
    plugins: [],
}
