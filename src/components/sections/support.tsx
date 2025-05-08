import SectionTitle from '../ui/section-title';
import SupportContent, { metadata } from '@/mdx/support.mdx';
import { LifeBuoy } from 'lucide-react';

export default function SupportSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='bg-white/10 p-4 rounded-lg mb-4'>
					<SupportContent />
				</div>
			</div>
		</section>
	);
}
