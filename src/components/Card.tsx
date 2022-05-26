import type { NextPage } from 'next';
import { directions } from '../utils/directions';
import { useState } from 'react';

interface CardProps {
	name: string;
	colors: string;
}

const Card: NextPage<CardProps> = ({ name, colors }) => {
	const [direction, setDirection] = useState('bg-gradient-to-t');

	return (
		<div key={name}>
			<div className={`${direction} ${colors} h-64 w-full rounded-3xl`}></div>
			<div className="-mt-12 mx-3 p-6 h-20 bg-gray-900 rounded-3xl shadow-lg">
				<div className="text-xl font-bold">{name.toUpperCase()}</div>
				<div className="mt-5 grid grid-cols-8 gap-1.5">
					{directions.map((dir) => (
						<div
							key={dir.key}
							className="bg-gray-800 h-8 w-8 rounded-lg p-1.5 hover:bg-rose-600 transition-colors duration-300 ease-in cursor-pointer"
							onClick={() => setDirection(dir.gradient)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className={`w-5 h-5 ${dir.chevron}`}
							>
								<path
									fillRule="evenodd"
									d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Card;
