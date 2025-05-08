import SectionTitle from '../ui/section-title';
import ScopeContent, { metadata } from '@/mdx/scope.mdx';

export default function ScopeSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<ScopeContent />
			</div>
		</section>
	);
}
