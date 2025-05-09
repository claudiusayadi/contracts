import React from 'react';
import Section from '../section';

interface TermsProps {
	title: string;
	content: {
		type: string;
		items: string[];
	};
}

export default function Terms({ title, content }: TermsProps) {
	return (
		<Section title={title}>
			<ol className='list-decimal pl-5 space-y-4 text-foreground-muted'>
				{content.items.map((term, index) => (
					<li key={index} className='pl-2'>
						{term}
					</li>
				))}
			</ol>
		</Section>
	);
}
