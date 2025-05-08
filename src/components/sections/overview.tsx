import SectionTitle from '../ui/section-title';
import OverviewContent, { metadata } from '@/mdx/overview.mdx';

export default function OverviewSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<OverviewContent />
			</div>
		</section>
	);
}
