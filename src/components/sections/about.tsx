import SectionTitle from '../ui/section-title';
import AboutContent, { metadata } from '@/mdx/about-me.mdx';

export default function About() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<AboutContent />
			</div>
		</section>
	);
}
