import { Calendar, Mail, User } from 'lucide-react';

interface Props {
	email: string;
	date: string;
	title: string;
	clientName?: string;
}

export default function ProposalHeader({
	email,
	date,
	title,
	clientName,
}: Props) {
	return (
		<header className='bg-[#1a365d] text-white'>
			<div className='max-w-5xl mx-auto px-6 py-16'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
					<div className='flex items-center gap-2 mb-4 md:mb-0'>
						<Mail size={18} className='text-[#f6ad55]' />
						<a
							href={`mailto:${email}`}
							className='text-white hover:text-[#f6ad55] transition-colors'>
							{email}
						</a>
					</div>
					<div className='flex items-center gap-2'>
						<Calendar size={18} className='text-[#f6ad55]' />
						<span>Proposal Date: {date}</span>
					</div>
				</div>

				<div className='mt-12 mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h1>

					{clientName && (
						<div className='flex items-center gap-2 mt-6'>
							<User size={18} className='text-[#f6ad55]' />
							<span className='text-xl'>For: {clientName}</span>
						</div>
					)}

					<div className='h-1.5 w-24 bg-[#f6ad55] mt-10'></div>
				</div>
			</div>
		</header>
	);
}
