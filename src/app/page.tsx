import ProposalHeader from '@/components/ProposalHeader';
import AboutSection from '@/components/sections/about';
import OverviewSection from '@/components/sections/overview';
import ClientSection from '@/components/sections/client';
import ClientsSection from '@/components/sections/clients';
import ScopeSection from '@/components/sections/scope';
import TechStackSection from '@/components/sections/tech-stack';
import TimelineSection from '@/components/sections/timeline';
import PricingSection from '@/components/sections/pricing';
import PaymentSection from '@/components/sections/payment';
import SupportSection from '@/components/sections/support';
import TeamSection from '@/components/sections/terms';
import AcceptanceSection from '@/components/sections/acceptance';

export default function Home() {
	return (
		<div className='min-h-screen bg-white'>
			<ProposalHeader
				email='ayadiclaudius@gmail.com'
				date='May 8, 2023'
				title='Web Development Project Proposal'
				clientName='Explorers 33 Group'
			/>

			<main className='max-w-5xl mx-auto px-6 py-16'>
				<ClientSection />

				<div className='border-b border-gray-200 py-8'>
					<OverviewSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<ScopeSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<TechStackSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<TimelineSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<PricingSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<PaymentSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<SupportSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<TeamSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<AboutSection />
				</div>

				<div className='border-b border-gray-200 py-8'>
					<ClientsSection />
				</div>

				<div className='py-8'>
					<AcceptanceSection />
				</div>
			</main>

			<footer className='bg-[#1a365d] text-white py-8'>
				<div className='max-w-5xl mx-auto px-6'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='mb-4 md:mb-0'>
							© 2023 Claudius A. All rights reserved.
						</p>
						<div className='flex items-center gap-4'>
							<a
								href='mailto:ayadiclaudius@gmail.com'
								className='text-white hover:text-[#f6ad55]'>
								ayadiclaudius@gmail.com
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
