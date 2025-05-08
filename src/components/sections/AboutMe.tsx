import React from 'react';
import Section from '../Section';

interface AboutMeProps {
	title: string;
	content: {
		type: string;
		items?: string[];
		text?: string;
	};
}

export default function AboutMe({ title, content }: AboutMeProps) {
	return (
		<Section title={title}>
			<div className='space-y-4'>
				{content.type === 'paragraph' && content.text && (
					<p className='text-foreground-muted leading-relaxed'>
						{content.text}
					</p>
				)}

				{content.type === 'paragraphs' && content.items && (
					<>
						{content.items.map((paragraph, index) => (
							<p key={index} className='text-foreground-muted leading-relaxed'>
								{paragraph}
							</p>
						))}
					</>
				)}
			</div>
		</Section>
	);
}
