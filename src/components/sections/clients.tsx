import SectionTitle from '../ui/section-title';
import ClientsContent, { metadata } from '@/mdx/clients.mdx';

export default function ClientsSection() {
	return (
		<section className='mb-12 bg-[#f7fafc] p-8 rounded-lg'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<ClientsContent />
			</div>
		</section>
	);
}
