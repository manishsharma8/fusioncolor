import type { NextPage } from 'next';

interface CopyCSSProps {}

const CopyCSS: NextPage<CopyCSSProps> = ({}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="mx-auto h-5 w-5 text-gray-100"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
			/>
		</svg>
	);
};

export default CopyCSS;
