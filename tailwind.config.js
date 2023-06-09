/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4EA8DE',
				secondary: '#5E60CE',
			},
			fontFamily: {
				bubblegum: ['Bubblegum Sans', 'cursive'],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '3rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '5rem',
			},
		},
	},
	plugins: [require('daisyui')],
};
