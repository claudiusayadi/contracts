import React from 'react';
import Section from '../section';

interface CostBreakdownProps {
	title: string;
	content: {
		type: string;
		introduction?: string;
		columns: string[];
		rows: {
			item: string;
			cost: string;
			description: string;
		}[];
		footer: {
			totalEstimate: string;
			totalNotes: string;
			payableTotal: string;
			payableTotalNotes: string;
		};
	};
}

export default function CostBreakdown({ title, content }: CostBreakdownProps) {
	return (
		<Section title={title}>
			{content.introduction && (
				<p className='text-gray-500 mb-6'>{content.introduction}</p>
			)}

			<div className='overflow-x-auto'>
				<table className='w-full'>
					<thead>
						<tr className='border-b border-orange-100'>
							<th className='text-left py-2 font-medium text-gray-800'>
								{content.columns[0]}
							</th>
							<th className='text-right py-2 font-medium text-gray-800'>
								{content.columns[1]}
							</th>
							<th className='text-left py-2 pl-6 font-medium text-gray-800 hidden md:table-cell'>
								{content.columns[2]}
							</th>
						</tr>
					</thead>
					<tbody>
						{content.rows.map((row, index) => (
							<tr key={index} className='border-b border-orange-100'>
								<td className='py-3 text-gray-500'>{row.item}</td>
								<td className='py-3 text-right text-gray-500'>{row.cost}</td>
								<td className='py-3 pl-6 text-gray-500 hidden md:table-cell'>
									{row.description}
								</td>
							</tr>
						))}
						<tr className='border-b border-orange-100 font-medium'>
							<td className='py-3 text-gray-800'>Total</td>
							<td className='py-3 text-right text-gray-800'>
								{content.footer.totalEstimate}
							</td>
							<td className='py-3 pl-6 text-gray-500 hidden md:table-cell'>
								{content.footer.totalNotes}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className='mt-4 text-gray-500'>
				<p>
					<strong>Payable Total:</strong> {content.footer.payableTotal} (
					{content.footer.payableTotalNotes})
				</p>
			</div>
		</Section>
	);
}
