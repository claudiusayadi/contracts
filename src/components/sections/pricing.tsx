import SectionTitle from '../ui/section-title';
import PricingContent, { metadata } from '@/mdx/pricing.mdx';
import { DollarSign } from 'lucide-react';

export default function PricingSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<PricingContent />

				<div className='mt-8 p-6 bg-primary text-background rounded-lg'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<DollarSign className='h-6 w-6 text-secondary mr-2' />
							<h3 className='text-xl font-bold'>Total Investment</h3>
						</div>
						<p className='text-xl font-bold text-secondary'>
							{metadata.totalAmount}
						</p>
					</div>
				</div>

				<div className='mt-6 p-4 bg-background-alt border-l-4 border-secondary rounded-lg'>
					<p className='text-primary font-medium'>
						Payable Total (excluding asterisked items):{' '}
						<span className='font-bold'>{metadata.payableAmount}</span>
					</p>
				</div>
			</div>
		</section>
	);
}
