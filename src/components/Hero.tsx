import type { NextPage } from 'next';

interface HeroProps {
	support?: string;
	heading: string;
	description: string;
}

const Hero: NextPage<HeroProps> = ({ support, heading, description }) => {
	return (
		<div className="h-64 lg:h-96 mt-12 flex items-center justify-center flex-col">
			<div className="text-center w-4/5 md:w-2/3 lg:1/2">
				<div className="mb-2 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
					{support}
				</div>
				<div className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
					{heading}
				</div>
				<div className="mt-7 text-lg md:text-2xl text-white">{description}</div>
			</div>
		</div>
	);
};

export default Hero;
