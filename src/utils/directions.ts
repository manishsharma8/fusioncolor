export interface DirectionProps {
	key: string;
	chevron: string;
	gradient: string;
	radial: string;
	conic: string;
}

export const allDirections: string[] = [
	'bg-gradient-to-t',
	'bg-gradient-to-b',
	'bg-gradient-to-l',
	'bg-gradient-to-r',
	'bg-gradient-to-tl',
	'bg-gradient-to-tr',
	'bg-gradient-to-bl',
	'bg-gradient-to-br',
	'bg-radial-at-t',
	'bg-radial-at-b',
	'bg-radial-at-l',
	'bg-radial-at-r',
	'bg-radial-at-tl',
	'bg-radial-at-tr',
	'bg-radial-at-bl',
	'bg-radial-at-br',
	'bg-conic-to-t',
	'bg-conic-to-b',
	'bg-conic-to-l',
	'bg-conic-to-r',
	'bg-conic-to-tl',
	'bg-conic-to-tr',
	'bg-conic-to-bl',
	'bg-conic-to-br',
];

export const directions: DirectionProps[] = [
	{
		key: 'top',
		chevron: '',
		gradient: 'bg-gradient-to-t',
		radial: 'bg-radial-at-t',
		conic: 'bg-conic-to-t',
	},
	{
		key: 'bottom',
		chevron: 'rotate-180',
		gradient: 'bg-gradient-to-b',
		radial: 'bg-radial-at-b',
		conic: 'bg-conic-to-b',
	},
	{
		key: 'left',
		chevron: '-rotate-90',
		gradient: 'bg-gradient-to-l',
		radial: 'bg-radial-at-l',
		conic: 'bg-conic-to-l',
	},
	{
		key: 'right',
		chevron: 'rotate-90',
		gradient: 'bg-gradient-to-r',
		radial: 'bg-radial-at-r',
		conic: 'bg-conic-to-r',
	},
	{
		key: 'top-left',
		chevron: '-rotate-45',
		gradient: 'bg-gradient-to-tl',
		radial: 'bg-radial-at-tl',
		conic: 'bg-conic-to-tl',
	},
	{
		key: 'top-right',
		chevron: 'rotate-45',
		gradient: 'bg-gradient-to-tr',
		radial: 'bg-radial-at-tr',
		conic: 'bg-conic-to-tr',
	},
	{
		key: 'bottom-left',
		chevron: '-rotate-135',
		gradient: 'bg-gradient-to-bl',
		radial: 'bg-radial-at-bl',
		conic: 'bg-conic-to-bl',
	},
	{
		key: 'bottom-right',
		chevron: 'rotate-135',
		gradient: 'bg-gradient-to-br',
		radial: 'bg-radial-at-br',
		conic: 'bg-conic-to-br',
	},
	// {
	// 	key: 'center',
	// 	chevron: '',
	// 	gradient: '',
	// 	radial: 'bg-radial',
	// 	conic: 'bg-conic',
	// },
];
