import React from 'react';
import Section from '../section';

interface LSOProps {
	title: string;
	content: {
		type: string;
		introduction?: string;
		cost: string;
		benefits: string[];
		note?: string;
	};
}

export default function LSO({ title, content }: LSOProps) {
	return (
		<Section title={title}>
			{content.introduction && (
				<p className='text-gray-500 mb-6'>{content.introduction}</p>
			)}

			<div className='bg-orange-50 p-6 rounded-md'>
				<h3 className='font-medium text-gray-800 mb-4'>
					Package Cost: <span className='text-orange-700'>{content.cost}</span>
				</h3>

				<h4 className='font-medium text-gray-800 mb-2'>Package Includes:</h4>
				<ul className='list-disc pl-5 space-y-2 text-gray-500'>
					{content.benefits.map((benefit, index) => (
						<li key={index}>{benefit}</li>
					))}
				</ul>

				{content.note && (
					<p className='mt-4 text-gray-500 text-sm italic'>* {content.note}</p>
				)}
			</div>
		</Section>
	);
}
