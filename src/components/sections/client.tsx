import SectionTitle from '../ui/section-title';
import ClientContent, { metadata } from '@/mdx/client.mdx';

export default function ClientSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<ClientContent />
			</div>
		</section>
	);
}
