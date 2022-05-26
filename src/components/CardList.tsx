import type { NextPage } from 'next';
import { gradients } from '../utils/gradients';
import Card from './Card';

interface CardListProps {}

const CardList: NextPage<CardListProps> = ({}) => {
	return (
		<div className="m-10 grid grid-cols-3 gap-x-10 gap-y-20">
			{gradients.map((gradient) => (
				<Card
					key={gradient.name}
					name={gradient.name}
					colors={gradient.colors}
				/>
			))}
		</div>
	);
};
export default CardList;
