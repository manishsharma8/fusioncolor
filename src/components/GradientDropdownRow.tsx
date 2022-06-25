import React, { useState, useEffect } from 'react';
import { fromColors, viaColors, toColors } from '../utils/colors';
import { allDirections, directions } from '../utils/directions';
import Dropdown from './Dropdown';

interface GradientDropdownRowProps {
	direction: string;
	from: string;
	via: string;
	to: string;
	dirChange: (dir: string) => void;
	fromChange: (dir: string) => void;
	viaChange: (dir: string) => void;
	toChange: (dir: string) => void;
}

const GradientDropdownRow: React.FC<GradientDropdownRowProps> = ({
	direction,
	from,
	via,
	to,
	dirChange,
	fromChange,
	viaChange,
	toChange,
}) => {
	const [dirValue, setDirValue] = useState<string>(direction);
	const [fromValue, setFromValue] = useState<string>(from);
	const [viaValue, setViaValue] = useState<string>(via);
	const [toValue, setToValue] = useState<string>(to);

	useEffect(() => {
		setDirValue(direction);
		setFromValue(from);
		setViaValue(via);
		setToValue(to);
	}, [direction, from, via, to]);

	const handleDirChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDirValue(event.target.value);
		dirChange(event.target.value);
	};

	const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFromValue(event.target.value);
		fromChange(event.target.value);
	};

	const handleViaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setViaValue(event.target.value);
		viaChange(event.target.value);
	};

	const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setToValue(event.target.value);
		toChange(event.target.value);
	};

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			<Dropdown
				options={allDirections}
				value={dirValue}
				onChange={handleDirChange}
			/>
			<Dropdown
				options={fromColors}
				value={fromValue}
				onChange={handleFromChange}
			/>
			<Dropdown
				options={viaColors}
				value={viaValue}
				onChange={handleViaChange}
			/>
			<Dropdown options={toColors} value={toValue} onChange={handleToChange} />
		</div>
	);
};

export default GradientDropdownRow;
