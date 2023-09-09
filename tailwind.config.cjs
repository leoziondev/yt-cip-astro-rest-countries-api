/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Nunito Sans", "system-ui"]
			},
			colors: {
				theme: {
					bg: "hsl(var(--theme-bg) / <alpha-value>)",
					elements: "hsl(var(--theme-elements) / <alpha-value>)",
					text: "hsl(var(--theme-text) / <alpha-value>)",
					input: "hsl(var(--theme-input) / <alpha-value>)",
				}
			}
		},
	},
	plugins: [],
}
