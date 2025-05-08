import React from 'react';

interface SectionProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export default function Section({
	title,
	children,
	className = '',
}: SectionProps) {
	return (
		<section className={`py-12 ${className}`}>
			<div className='max-w-5xl mx-auto px-4'>
				<h2 className='text-2xl font-bold text-foreground mb-8'>{title}</h2>
				<div className='mt-4'>{children}</div>
			</div>
		</section>
	);
}
