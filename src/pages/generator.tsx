import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import GradientDropdownRow from '../components/GradientDropdownRow';
import { allDirections } from '../utils/directions';
import { fromColors, viaColors, toColors } from '../utils/colors';

const get_random = (arr: string[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const Generator: NextPage = () => {
	const [direction, setDirection] = useState<string>(get_random(allDirections));
	const [fromValue, setFromValue] = useState<string>(get_random(fromColors));
	const [viaValue, setViaValue] = useState<string>(get_random(viaColors));
	const [toValue, setToValue] = useState<string>(get_random(toColors));
	const [gradient, setGradient] = useState<string>('');

	const handleDirChange = (dir: string) => {
		setDirection(dir);
	};
	const handleFromChange = (from: string) => {
		setFromValue(from);
	};
	const handleViaChange = (via: string) => {
		setViaValue(via);
	};
	const handleToChange = (to: string) => {
		setToValue(to);
	};

	useEffect(() => {
		const randomGradient = fromValue + ' ' + viaValue + ' ' + toValue;
		setGradient(randomGradient);
	}, [fromValue, viaValue, toValue]);

	return (
		<div>
			<Navbar />
			<Hero
				support="Gradients for Tailwind CSS"
				heading="GRADIENT GENERATOR"
				description="Create your own Tailwind CSS gradient with the full Tailwind CSS color library and the extended radial and conic gradient options provided through Hypercolor"
			/>
			<div className="mx-10 my-20">
				<div className="grid grid-cols-3">
					<div className="col-start-2 col-end-4">
						<GradientDropdownRow
							direction={direction}
							from={fromValue}
							via={viaValue}
							to={toValue}
							dirChange={handleDirChange}
							fromChange={handleFromChange}
							viaChange={handleViaChange}
							toChange={handleToChange}
						/>
					</div>
				</div>
				<div className="mt-10 grid grid-cols-2 gap-10">
					<div className={`rounded-2xl ${direction} ${gradient} h-96`}></div>
					<div className="bg-black rounded-2xl relative p-8 flex items-center h-96">
						<p
							className={`text-3xl text-center font-bold text-transparent bg-clip-text ${direction} ${gradient}`}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Generator;
