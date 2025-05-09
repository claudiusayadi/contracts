import Header from '@/components/Header';
import Overview from '@/components/sections/Overview';
import CostBreakdown from '@/components/sections/CostBreakdown';
import Timeline from '@/components/sections/Timeline';
import LSO from '@/components/sections/LSO';
import PaymentStructure from '@/components/sections/PaymentStructure';
import Terms from '@/components/sections/Terms';
import ScopeOfDelivery from '@/components/sections/ScopeOfDelivery';
import AboutMe from '@/components/sections/AboutMe';
import WhoDoIWorkWith from '@/components/sections/WhoDoIWorkWith';
import Acceptance from '@/components/sections/Acceptance';
import TechStack from '@/components/sections/TechStack';

import metadata from '@/content/metadata.json';
import overviewData from '@/content/overview.json';
import costBreakdownData from '@/content/cost-breakdown.json';
import timelineData from '@/content/timeline.json';
import lsoData from '@/content/lso.json';
import paymentStructureData from '@/content/payment-structure.json';
import termsData from '@/content/terms.json';
import scopeOfDeliveryData from '@/content/scope-of-delivery.json';
import aboutMeData from '@/content/about-me.json';
import whoDoIWorkWithData from '@/content/who-do-i-work-with.json';
import acceptanceData from '@/content/acceptance.json';
import techStackData from '@/content/tech-stack.json';

export default function Home() {
	return (
		<main className='min-h-screen bg-background'>
			<Header
				title={metadata.title}
				agency={metadata.agency}
				developer={metadata.developer}
				client={metadata.client}
				date={metadata.date}
			/>

			<div className='max-w-5xl mx-auto'>
				<Overview title={overviewData.title} content={overviewData.content} />

				<CostBreakdown
					title={costBreakdownData.title}
					content={costBreakdownData.content}
				/>

				<Timeline title={timelineData.title} content={timelineData.content} />

				<TechStack
					title={techStackData.title}
					content={techStackData.content}
				/>

				<ScopeOfDelivery
					title={scopeOfDeliveryData.title}
					content={scopeOfDeliveryData.content}
				/>

				<LSO title={lsoData.title} content={lsoData.content} />

				<PaymentStructure
					title={paymentStructureData.title}
					content={paymentStructureData.content}
				/>

				<Terms title={termsData.title} content={termsData.content} />

				<Acceptance
					title={acceptanceData.title}
					content={acceptanceData.content}
				/>

				<AboutMe title={aboutMeData.title} content={aboutMeData.content} />

				<WhoDoIWorkWith
					title={whoDoIWorkWithData.title}
					content={whoDoIWorkWithData.content}
				/>
			</div>

			<footer className='py-8 mt-12 border-t border-border'>
				<div className='max-w-5xl mx-auto px-4 text-center'>
					<p className='text-foreground-muted text-sm'>
						© {new Date().getFullYear()} {metadata.developer.name}. All rights
						reserved.
					</p>
				</div>
			</footer>
		</main>
	);
}
