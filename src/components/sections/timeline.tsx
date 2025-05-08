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

				<div className='mt-6 p-4 bg-primary text-background rounded-lg'>
					<div className='flex items-center'>
						<CalendarDays className='h-5 w-5 text-secondary mr-2' />
						<p className='font-medium'>
							Total Delivery Timeline:{' '}
							<span className='text-secondary'>{metadata.totalWeeks}</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
