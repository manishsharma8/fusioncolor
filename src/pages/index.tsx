import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
	return (
		<div>
			<Navbar />
			<Hero
				support="Gradients for Tailwind CSS"
				heading="FUSIONCOLOR"
				description="A curated collection of beautiful Tailwind CSS gradients using the full range of Tailwind CSS colors. Easily copy and paste the class names, CSS or even save the gradients as an image."
			/>
		</div>
	);
};

export default Home;
