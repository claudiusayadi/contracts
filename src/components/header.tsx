import React from 'react';

interface HeaderProps {
	title: string;
	agency: { name: string; email: string };
	developer: { name: string; email: string };
	client: { name: string; email: string };
	date: string;
}

export default function Header({
	title,
	agency,
	developer,
	client,
	date,
}: HeaderProps) {
	return (
		<header className='bg-orange-50 py-10 border-b border-orange-100'>
			<div className='max-w-5xl mx-auto px-4'>
				<div className='mb-6'>
					<h1 className='text-2xl tracking-wider text-gray-950 font-black'>
						{agency.name}
					</h1>
				</div>
				<h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-10'>
					{title}
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<h3 className='text-xs uppercase tracking-wider text-gray-500 mb-2'>
							CLIENT
						</h3>
						<p className='text-gray-800 font-medium'>{client.name}</p>
						<p className='text-gray-500 text-sm'>{client.email}</p>
					</div>
					<div>
						<h3 className='text-xs uppercase tracking-wider text-gray-500 mb-2'>
							DEVELOPER
						</h3>
						<p className='text-gray-800 font-medium'>{developer.name}</p>
						<p className='text-gray-500 text-sm'>{developer.email}</p>
						<p className='text-gray-500 text-sm mt-1'>{date}</p>
					</div>
				</div>
			</div>
		</header>
	);
}
