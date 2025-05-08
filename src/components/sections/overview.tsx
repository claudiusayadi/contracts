import SectionTitle from '../ui/section-title';
import OverviewContent, { metadata } from '@/mdx/overview.mdx';

export default function OverviewSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<OverviewContent />

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] shadow-sm'>
						<h3 className='font-semibold text-[#1a365d] mb-2'>
							Modern Architecture
						</h3>
						<p className='text-gray-700'>
							Built with the latest web technologies for optimal performance,
							security, and scalability.
						</p>
					</div>

					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] shadow-sm'>
						<h3 className='font-semibold text-[#1a365d] mb-2'>
							User Experience
						</h3>
						<p className='text-gray-700'>
							Intuitive navigation and responsive design for all devices and
							screen sizes.
						</p>
					</div>

					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] shadow-sm'>
						<h3 className='font-semibold text-[#1a365d] mb-2'>SEO Optimized</h3>
						<p className='text-gray-700'>
							Built with search engines in mind to improve visibility and
							organic traffic.
						</p>
					</div>

					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] shadow-sm'>
						<h3 className='font-semibold text-[#1a365d] mb-2'>
							Content Management
						</h3>
						<p className='text-gray-700'>
							Easy-to-use interface for updating content without technical
							knowledge.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
