import SectionTitle from '../ui/section-title';
import PricingContent, { metadata } from '@/mdx/pricing.mdx';
import { DollarSign } from 'lucide-react';

export default function PricingSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<PricingContent />

				<div className='mt-8 p-6 bg-[#1a365d] text-white rounded-lg'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<DollarSign className='h-6 w-6 text-[#f6ad55] mr-2' />
							<h3 className='text-xl font-bold'>Total Investment</h3>
						</div>
						<p className='text-xl font-bold text-[#f6ad55]'>
							{metadata.totalAmount}
						</p>
					</div>
				</div>

				<div className='mt-6 p-4 bg-[#f7fafc] border-l-4 border-[#f6ad55] rounded-lg'>
					<p className='text-[#1a365d] font-medium'>
						Payable Total (excluding asterisked items):{' '}
						<span className='font-bold'>{metadata.payableAmount}</span>
					</p>
				</div>
			</div>
		</section>
	);
}
