export default function SectionTitle({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='mb-8'>
			<h2 className='text-xl font-bold text-primary uppercase tracking-wider relative pb-4'>
				{children}
				<span className='absolute bottom-0 left-0 w-12 h-1 bg-secondary'></span>
			</h2>
		</div>
	);
}
