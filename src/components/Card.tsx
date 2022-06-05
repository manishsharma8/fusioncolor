import React, { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import toast, { Toaster } from 'react-hot-toast';
import { directions } from '../utils/directions';
import Chevron from '../icons/chevron';
import CopyTailwind from '../icons/copyTailwind';
import CopyCSS from './../icons/copyCss';

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
					<div className="flex gap-1.5">
						<button
							className="w-9 h-9 bg-gray-800 p-1 rounded-xl hover:bg-rose-600 transition-colors duration-300 ease-in"
							onClick={() => {
								navigator.clipboard.writeText(gradient);
								toast('Copied to Clipboard');
							}}
						>
							<CopyTailwind />
						</button>
						<button
							className="w-9 h-9 bg-gray-800 p-1 rounded-xl hover:bg-rose-600 transition-colors duration-300 ease-in"
							onClick={() => {
								navigator.clipboard.writeText(
									window
										.getComputedStyle(gradientDiv.current as Element)
										.getPropertyValue('background-image')
								);
								toast('Copied to Clipboard');
							}}
						>
							<CopyCSS />
						</button>
					</div>
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
			<Toaster />
		</div>
	);
};
export default Card;
