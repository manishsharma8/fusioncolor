import React from 'react';

interface DropdownProps {
	value: string;
	options: string[];
	onChange: any;
}

const Dropdown: React.FC<DropdownProps> = ({ value, options, onChange }) => {
	return (
		<>
			<select
				className="border bg-gray-900 border-gray-800 rounded-lg text-lg py-3 px-5 focus-visible:outline-none"
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<option className="bg-gray-900" key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default Dropdown;
