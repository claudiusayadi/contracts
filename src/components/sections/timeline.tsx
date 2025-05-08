import SectionTitle from '../ui/section-title';
import TimelineContent, { metadata } from '@/mdx/timeline.mdx';
import { CalendarDays } from 'lucide-react';

export default function TimelineSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='flex flex-col mb-6'>
					<TimelineContent />
				</div>

				<div className='mt-6 p-4 bg-[#1a365d] text-white rounded-lg'>
					<p className='font-medium'>
						Total Delivery Timeline:{' '}
						<span className='text-[#f6ad55]'>{metadata.totalWeeks}</span>
					</p>
				</div>
			</div>
		</section>
	);
}
