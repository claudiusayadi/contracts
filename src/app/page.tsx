import AboutMe from '@/components/sections/about-me';
import Acceptance from '@/components/sections/acceptance';
import CostBreakdown from '@/components/sections/cost-breakdown';
import Header from '@/components/header';
import LSO from '@/components/sections/lso';
import Overview from '@/components/sections/overview';
import PaymentStructure from '@/components/sections/payment-structure';
import ScopeOfDelivery from '@/components/sections/scope-of-delivery';
import TechStack from '@/components/sections/tech-stack';
import Terms from '@/components/sections/terms';
import Timeline from '@/components/sections/timeline';
import WhoDoIWorkWith from '@/components/sections/who-do-i-work-with';

import aboutMe from '@/content/about-me.json';
import acceptance from '@/content/acceptance.json';
import costBreakdown from '@/content/cost-breakdown.json';
import lso from '@/content/lso.json';
import metadata from '@/content/metadata.json';
import overview from '@/content/overview.json';
import paymentStructure from '@/content/payment-structure.json';
import scopeOfDelivery from '@/content/scope-of-delivery.json';
import techStack from '@/content/tech-stack.json';
import terms from '@/content/terms.json';
import timeline from '@/content/timeline.json';
import whoDoIWorkWith from '@/content/who-do-i-work-with.json';

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
				<Overview title={overview.title} content={overview.content} />

				<CostBreakdown
					title={costBreakdown.title}
					content={costBreakdown.content}
				/>

				<Timeline title={timeline.title} content={timeline.content} />

				<TechStack title={techStack.title} content={techStack.content} />

				<ScopeOfDelivery
					title={scopeOfDelivery.title}
					content={scopeOfDelivery.content}
				/>

				<LSO title={lso.title} content={lso.content} />

				<PaymentStructure
					title={paymentStructure.title}
					content={paymentStructure.content}
				/>

				<Terms title={terms.title} content={terms.content} />

				<Acceptance title={acceptance.title} content={acceptance.content} />

				<AboutMe title={aboutMe.title} content={aboutMe.content} />

				<WhoDoIWorkWith
					title={whoDoIWorkWith.title}
					content={whoDoIWorkWith.content}
				/>
			</div>

			<footer className='py-8 mt-12 border-t border-border'>
				<div className='max-w-5xl mx-auto px-4 text-center'>
					<p className='text-foreground-muted text-sm'>
						© {new Date().getFullYear()} {metadata.developer.name} |{' '}
						{metadata.agency.name}. All rights reserved.
					</p>
				</div>
			</footer>
		</main>
	);
}
