import SectionTitle from '../ui/section-title';
import TechStackContent, { metadata } from '@/mdx/tech-stack.mdx';

export default function TechStackSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<TechStackContent />
			</div>
		</section>
	);
}
