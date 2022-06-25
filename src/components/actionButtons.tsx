import { NextPage } from 'next';
import { RefObject } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import CopyTailwind from '../icons/copyTailwind';
import Refresh from '../icons/refresh';
import CopyCSS from './../icons/copyCss';

interface ActionButtonProps {
	size?: 'small' | 'large';
	gradient: string;
	gradientDiv: RefObject<HTMLDivElement>;
	getRandom?: () => void;
}

const ActionButton: NextPage<ActionButtonProps> = ({
	size = 'small',
	gradient,
	gradientDiv,
	getRandom,
}) => {
	return (
		<div className={`flex my-auto ${size === 'small' ? 'gap-1.5' : 'gap-4'}`}>
			<button
				className={`${
					size === 'small' ? 'w-9 h-9' : 'w-11 h-11'
				} bg-gray-800 p-1 rounded-xl hover:bg-rose-600 transition-colors duration-300 ease-in`}
				onClick={() => {
					navigator.clipboard.writeText(gradient);
					toast('Copied to Clipboard');
				}}
			>
				<CopyTailwind />
			</button>
			<button
				className={`${
					size === 'small' ? 'w-9 h-9' : 'w-11 h-11'
				} bg-gray-800 p-1 rounded-xl hover:bg-rose-600 transition-colors duration-300 ease-in`}
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
			{getRandom && (
				<button
					className={`${
						size === 'small' ? 'w-9 h-9' : 'w-11 h-11'
					} bg-gray-800 p-1 rounded-xl hover:bg-rose-600 transition-colors duration-300 ease-in`}
					onClick={() => getRandom()}
				>
					<Refresh />
				</button>
			)}
			<Toaster />
		</div>
	);
};

export default ActionButton;
