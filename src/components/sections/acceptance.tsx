import SectionTitle from '../ui/section-title';
import AcceptanceContent, { metadata } from '@/mdx/acceptance.mdx';

export default function AcceptanceSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<AcceptanceContent />
			</div>
		</section>
	);
}
