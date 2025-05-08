export default function SectionTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='mb-8'>
			<h2 className='text-xl font-bold text-[#1a365d] uppercase tracking-wider relative pb-4'>
				{children}
				<span className='absolute bottom-0 left-0 w-12 h-1 bg-[#f6ad55]'></span>
			</h2>
		</div>
	);
}
