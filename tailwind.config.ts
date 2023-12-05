import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-bg': "url('/top-screen_bg.jpg')",
				'hero-man': "url('/top-screen_man.png')",
				'check-green': "url('/check-green.svg')",
				'licenses-bg': "url('/licenses_bg.jpg')",
				loupe: "url('/loupe.svg')",
			},
			keyframes: {
				overlayShow: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				overlayHide: {
					from: { opacity: '1' },
					to: { opacity: '0' },
				},
				slideIn: {
					from: { scale: '0.95', opacity: '0' },
					to: { scale: '1', opacity: '1' },
				},
				slideOut: {
					from: { scale: '1', opacity: '1' },
					to: { scale: '0.95', opacity: '0' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				rotateDown: {
					from: { rotate: '0deg' },
					to: { rotate: '90deg' },
				},
			},
			animation: {
				overlayShow: 'overlayShow 0.3s ease-in-out',
				overlayHide: 'overlayHide 0.3s ease-in-out',
				slideIn: 'slideIn 0.3s ease-in-out',
				slideOut: 'slideOut 0.3s ease-in-out',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				rotateDown: 'rotateDown 0.2s ease-out',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
export default config;
