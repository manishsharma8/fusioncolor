import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import { directions } from '../utils/directions';
import Chevron from '../icons/chevron';
import ActionButton from './actionButtons';

interface CardProps {
	name: string;
	colors: string;
}

const Card: NextPage<CardProps> = ({ name, colors }) => {
	const [direction, setDirection] = useState<string>('bg-gradient-to-t');
	const [gradient, setGradient] = useState<string>(
		'bg-gradient-to-t ' + colors
	);
	const gradientDiv = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setGradient(direction + ' ' + colors);
	}, [direction, colors]);

	return (
		<div>
			<div
				ref={gradientDiv}
				className={`${gradient} h-64 w-full rounded-3xl`}
			></div>
			<div className="-mt-12 mx-3 p-6 h-20 bg-gray-900 rounded-3xl shadow-lg">
				<div className="flex justify-between">
					<div className="text-xl font-bold">{name.toUpperCase()}</div>
					<ActionButton gradient={gradient} gradientDiv={gradientDiv} />
				</div>
				<div className="mt-5 grid grid-cols-8 gap-1">
					{directions.map((dir) => (
						<div
							key={dir.key}
							className="bg-gray-800 h-9 w-9 rounded-lg p-2 hover:bg-rose-600 transition-colors duration-300 ease-in cursor-pointer"
							onClick={() => setDirection(dir.gradient)}
						>
							<Chevron dir={dir} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Card;
