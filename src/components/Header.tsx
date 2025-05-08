import { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
			}`}>
			<div className='container mx-auto px-4 flex justify-between items-center'>
				<div className='flex items-center gap-2'>
					<Compass size={28} className='text-blue-800' />
					<span className='font-bold text-xl text-slate-800'>
						Explorers <span className='text-blue-800'>33</span> Group
					</span>
				</div>

				<nav className='hidden md:flex space-x-6'>
					<a
						href='#'
						className='text-slate-700 hover:text-blue-800 transition-colors'>
						Home
					</a>
					<a
						href='#'
						className='text-slate-700 hover:text-blue-800 transition-colors'>
						Services
					</a>
					<a
						href='#'
						className='text-slate-700 hover:text-blue-800 transition-colors'>
						About
					</a>
					<a
						href='#'
						className='text-slate-700 hover:text-blue-800 transition-colors'>
						Contact
					</a>
				</nav>

				<button className='inline-flex md:hidden'>
					<span className='sr-only'>Menu</span>
					<svg
						className='w-6 h-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}
