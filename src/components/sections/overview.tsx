import React from 'react';
import Section from '../section';

interface OverviewProps {
	title: string;
	content: {
		type: string;
		items: string[];
		features?: {
			title: string;
			description: string;
		}[];
	};
}

export default function Overview({ title, content }: OverviewProps) {
	return (
		<Section title={title}>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='space-y-4'>
					{content.items.map((paragraph, index) => (
						<p key={index} className='text-foreground-muted leading-relaxed'>
							{paragraph}
						</p>
					))}
				</div>

				{content.features && (
					<div className='space-y-4'>
						{content.features.map((feature, index) => (
							<div key={index} className='border-l-2 border-primary pl-4'>
								<h3 className='font-medium text-foreground'>{feature.title}</h3>
								<p className='text-foreground-muted text-sm mt-1'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				)}
			</div>
		</Section>
	);
}
