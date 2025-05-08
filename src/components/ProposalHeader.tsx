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
		<header className='bg-primary text-background'>
			<div className='max-w-5xl mx-auto px-6 py-16'>
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
					<div className='flex items-center gap-2 mb-4 md:mb-0'>
						<Mail size={18} className='text-secondary' />
						<a
							href={`mailto:${email}`}
							className='text-background hover:text-secondary transition-colors'>
							{email}
						</a>
					</div>
					<div className='flex items-center gap-2'>
						<Calendar size={18} className='text-secondary' />
						<span>Proposal Date: {date}</span>
					</div>
				</div>

				<div className='mt-12 mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h1>

					{clientName && (
						<div className='flex items-center gap-2 mt-6'>
							<User size={18} className='text-secondary' />
							<span className='text-xl'>For: {clientName}</span>
						</div>
					)}

					<div className='h-1.5 w-24 bg-secondary mt-10'></div>
				</div>
			</div>
		</header>
	);
}
