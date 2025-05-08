import SectionTitle from '../ui/section-title';
import TeamContent, { metadata } from '@/mdx/terms.mdx';

export default function TeamSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<TeamContent />
			</div>
		</section>
	);
}
