import type { NextPage } from 'next';
import { gradients } from '../utils/gradients';

type CardProps = {};

const Card: NextPage<CardProps> = ({}) => {
	return (
		<div className="m-10 grid grid-cols-3 gap-10">
			{gradients.map((gradient) => (
				<div key={gradient.name}>
					<div
						className={`bg-gradient-to-t ${gradient.colors} h-64 w-full rounded-3xl`}
					></div>
					<div className="-mt-12 mx-3 p-6 h-20 bg-gray-900 rounded-3xl shadow-lg">
						<div className="text-xl font-bold">
							{gradient.name.toUpperCase()}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Card;
