import type { NextPage } from 'next';
import Link from 'next/link';

const Navbar: NextPage = () => {
	return (
		<header className="sticky top-0 text-lg border-b border-gray-800 py-5 px-8">
			<div className="flex justify-between gap-5">
				<nav className="flex gap-9">
					<Link href={'/'}>Gradients</Link>
					<Link href={'/'}>Generator</Link>
					<Link href={'/'}>Favourite</Link>
				</nav>
				<div>
					<a>Github</a>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
