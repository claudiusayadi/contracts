import SectionTitle from '../ui/section-title';
import PaymentContent, { metadata } from '@/mdx/payment.mdx';
import { CreditCard } from 'lucide-react';

export default function PaymentSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='flex items-center mb-6'>
					<CreditCard className='h-5 w-5 text-primary mr-2' />
					<PaymentContent />
				</div>
			</div>
		</section>
	);
}
