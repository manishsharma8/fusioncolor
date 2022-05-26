module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
