import SectionTitle from '../ui/section-title';
import PaymentContent, { metadata } from '@/mdx/payment.mdx';
import { CreditCard } from 'lucide-react';

export default function PaymentSection() {
	return (
		<section className='mb-12'>
			<SectionTitle>{metadata.title}</SectionTitle>
			<div className='animate-fadeIn'>
				<div className='flex items-center mb-6'>
					<CreditCard className='h-5 w-5 text-[#1a365d] mr-2' />
					<PaymentContent />
				</div>

				<div className='mt-6 p-4 bg-[#f7fafc] rounded-lg border border-[#e2e8f0]'>
					<h3 className='font-semibold text-[#1a365d] mb-2'>Total</h3>
					<p className='font-bold text-[#1a365d]'>{metadata.totalAmount}</p>
				</div>
			</div>
		</section>
	);
}
