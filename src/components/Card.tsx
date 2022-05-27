import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { directions } from '../utils/directions';

interface CardProps {
	name: string;
	colors: string;
}

const Card: NextPage<CardProps> = ({ name, colors }) => {
	const [direction, setDirection] = useState<string>('bg-gradient-to-t');
	const [gradient, setGradient] = useState<string>(
		'bg-gradient-to-t ' + colors
	);

	useEffect(() => {
		setGradient(direction + ' ' + colors);
	}, [direction, colors]);

	return (
		<div>
			<div className={`${direction} ${colors} h-64 w-full rounded-3xl`}></div>
			<div className="-mt-12 mx-3 p-6 h-20 bg-gray-900 rounded-3xl shadow-lg">
				<div className="flex justify-between">
					<div className="text-xl font-bold">{name.toUpperCase()}</div>
					<button
						className="w-9 h-9 bg-gray-800 p-1 rounded-lg hover:bg-rose-600 transition-colors duration-300 ease-in"
						onClick={() => navigator.clipboard.writeText(gradient)}
					>
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
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
							/>
						</svg>
					</button>
				</div>
				<div className="mt-5 grid grid-cols-8 gap-0.5">
					{directions.map((dir) => (
						<div
							key={dir.key}
							className="bg-gray-800 h-9 w-9 rounded-lg p-2 hover:bg-rose-600 transition-colors duration-300 ease-in cursor-pointer"
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
