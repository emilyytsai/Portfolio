import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
			//custom animation name
			'pulse-blur': 'pulseBlur 3s ease-in-out infinite',
			},
			keyframes: {
			//pulseBar behavior
			pulseBlur: {
				'0%, 100%': {
				transform: 'scale(1)',
				opacity: '0.4',
				},
				'50%': {
				transform: 'scale(1.2)',
				opacity: '0.7',
				},
      },
    },
	    fontFamily: {
			domine: ['Domine', 'serif'],
			raleway: ['Raleway', 'sans-serif'],
			dmsans: ['DM Sans', 'sans-serif'],
		},
  },
},

	plugins: []
} as Config;
