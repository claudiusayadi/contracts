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
		<header className='bg-primary-light py-10 border-b border-border'>
			<div className='max-w-5xl mx-auto px-4'>
				<div className='mb-6'>
					<h1 className='text-2xl tracking-wider text-foreground-muted font-medium'>
						{agency.name}
					</h1>
				</div>
				<h1 className='text-3xl md:text-4xl font-bold text-foreground mb-10'>
					{title}
				</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div>
						<h3 className='text-xs uppercase tracking-wider text-foreground-muted mb-2'>
							CLIENT
						</h3>
						<p className='text-foreground font-medium'>{client.name}</p>
						<p className='text-foreground-muted text-sm'>{client.email}</p>
					</div>
					<div>
						<h3 className='text-xs uppercase tracking-wider text-foreground-muted mb-2'>
							DEVELOPER
						</h3>
						<p className='text-foreground font-medium'>{developer.name}</p>
						<p className='text-foreground-muted text-sm'>{developer.email}</p>
						<p className='text-foreground-muted text-sm mt-1'>{date}</p>
					</div>
				</div>
			</div>
		</header>
	);
}
