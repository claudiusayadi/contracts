import SectionTitle from '../ui/section-title';
import SupportContent, { metadata } from '@/mdx/support.mdx';
import { LifeBuoy } from 'lucide-react';

export default function SupportSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='bg-[#1a365d] text-white p-6 rounded-lg'>
					<div className='flex items-center mb-4'>
						<LifeBuoy className='h-6 w-6 text-[#f6ad55] mr-3' />
						<h3 className='text-xl font-bold'>Premium Support Package</h3>
					</div>

					<div className='mb-6'>
						<p className='text-2xl font-bold text-[#f6ad55]'>
							{metadata.price}
						</p>
					</div>

					<div className='bg-white/10 p-4 rounded-lg mb-4'>
						<SupportContent />
					</div>
				</div>
			</div>
		</section>
	);
}
