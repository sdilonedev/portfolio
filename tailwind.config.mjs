import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
        'token-dark-5': 'rgb(5, 5, 5)',
        'token-dark-10': 'rgb(10, 10, 11)',
        'token-dark-15': 'rgb(15, 15, 16)',
        'token-dark-18': 'rgb(18, 18, 18)',
        'token-dark-20': 'rgb(20, 20, 21)',
        'token-dark-25': 'rgb(25, 25, 26)',
        'token-dark-32': 'rgb(32, 32, 33)',
        'token-dark-40': 'rgb(40, 40, 42)',
        'token-dark-45': 'rgb(45, 45, 47)',
        'token-dark-55': 'rgb(55, 55, 57)',
        'token-dark-62': 'rgb(62, 62, 65)',
        'token-neutral-102': 'rgb(102, 102, 102)',
        'token-neutral-117': 'rgb(117, 117, 117)',
        'token-neutral-153': 'rgb(153, 153, 153)',
        'token-neutral-204': 'rgb(204, 204, 204)',
        'token-neutral-217': 'rgb(217, 217, 217)',
        'token-neutral-230': 'rgb(230, 230, 230)'
      },
      fontFamily: {
        sans: ['Space Grotesk Variable', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
