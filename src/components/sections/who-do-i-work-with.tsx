import React from 'react';
import Section from '../section';

interface WhoDoIWorkWithProps {
	title: string;
	content: {
		type: string;
		text: string;
		clientTypes: string[];
	};
}

export default function WhoDoIWorkWith({
	title,
	content,
}: WhoDoIWorkWithProps) {
	return (
		<Section title={title}>
			<p className='text-foreground-muted mb-6 leading-relaxed'>
				{content.text}
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
				{content.clientTypes.map((clientType, index) => (
					<div key={index} className='border-l-2 border-primary pl-4'>
						<p className='text-foreground'>{clientType}</p>
					</div>
				))}
			</div>
		</Section>
	);
}
