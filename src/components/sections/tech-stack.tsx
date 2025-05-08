import SectionTitle from '../ui/section-title';
import TechStackContent, { metadata } from '@/mdx/tech-stack.mdx';
import { Code, Layout, Server } from 'lucide-react';

export default function TechStackSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='mb-6'>
					<TechStackContent />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] transition-all hover:shadow-md'>
						<div className='flex items-center mb-4'>
							<Layout className='h-8 w-8 text-[#1a365d]' />
							<h3 className='font-semibold text-[#1a365d] ml-3'>Frontend</h3>
						</div>
					</div>

					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] transition-all hover:shadow-md'>
						<div className='flex items-center mb-4'>
							<Code className='h-8 w-8 text-[#1a365d]' />
							<h3 className='font-semibold text-[#1a365d] ml-3'>Backend</h3>
						</div>
					</div>

					<div className='bg-[#f7fafc] p-6 rounded-lg border border-[#e2e8f0] transition-all hover:shadow-md'>
						<div className='flex items-center mb-4'>
							<Server className='h-8 w-8 text-[#1a365d]' />
							<h3 className='font-semibold text-[#1a365d] ml-3'>Deployment</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
