module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		rotate: {
			'-180': '-180deg',
			'-135': '-135deg',
			'-90': '-90deg',
			'-45': '-45deg',
			0: '0',
			45: '45deg',
			90: '90deg',
			135: '135deg',
			180: '180deg',
		},
		extend: {},
	},
	plugins: [],
};
