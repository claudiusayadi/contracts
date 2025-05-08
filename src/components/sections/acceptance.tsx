import SectionTitle from '../ui/section-title';
import AcceptanceContent, { metadata } from '@/mdx/acceptance.mdx';

export default function AcceptanceSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<AcceptanceContent />

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
					<div>
						<h4 className='font-bold text-[#1a365d] mb-2'>Software Engineer</h4>
						<p className='text-gray-700'>
							Ayadi
							<br />
							Email:{' '}
							<a
								href={`mailto:me`}
								className='text-[#1a365d] hover:text-[#f6ad55]'>
								me@ayadiclaudius.com
							</a>
						</p>

						<div className='mt-6 border-b border-gray-300 pt-8'>
							<p className='text-xs text-gray-500 -mt-6'>Signature</p>
						</div>

						<div className='mt-4 border-b border-gray-300 pt-8'>
							<p className='text-xs text-gray-500 -mt-6'>Date</p>
						</div>
					</div>

					<div>
						<h4 className='font-bold text-[#1a365d] mb-2'>Client</h4>
						<p className='text-gray-700'>
							Explorers 33 Group
							<br />
							Email:{' '}
							<a
								href={`mailto:explorers33group@gmail.com`}
								className='text-[#1a365d] hover:text-[#f6ad55]'>
								explorers33group@gmail.com
							</a>
						</p>

						<div className='mt-6 border-b border-gray-300 pt-8'>
							<p className='text-xs text-gray-500 -mt-6'>Signature</p>
						</div>

						<div className='mt-4 border-b border-gray-300 pt-8'>
							<p className='text-xs text-gray-500 -mt-6'>Date</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
