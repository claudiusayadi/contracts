import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ href, children }) => {
			if (href && href.startsWith('/')) {
				return (
					<Link
						href={href}
						className='text-[#1a365d] hover:text-[#f6ad55] transition-colors'>
						{children}
					</Link>
				);
			}
			return (
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-[#1a365d] hover:text-[#f6ad55] transition-colors'>
					{children}
				</a>
			);
		},
		img: ({ src, alt }) => (
			<Image
				src={src || ''}
				alt={alt || ''}
				width={800}
				height={400}
				className='w-full h-auto rounded-lg my-4'
			/>
		),
		h1: ({ children }) => (
			<h1 className='text-3xl font-bold text-[#1a365d] mb-6 mt-8'>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className='text-2xl font-semibold text-[#1a365d] mb-4 mt-6'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='text-xl font-semibold text-[#1a365d] mb-3 mt-5'>
				{children}
			</h3>
		),
		p: ({ children }) => (
			<p className='text-gray-700 mb-4 leading-relaxed'>{children}</p>
		),
		ul: ({ children }) => <ul className='space-y-2 mb-4'>{children}</ul>,
		li: ({ children }) => (
			<li className='flex items-start'>
				<span className='text-[#f6ad55] mr-2'>•</span>
				<span className='text-gray-700'>{children}</span>
			</li>
		),
		ol: ({ children }) => (
			<ol className='list-decimal pl-6 mb-4 space-y-2'>{children}</ol>
		),
		table: ({ children }) => (
			<div className='overflow-x-auto mb-6'>
				<table className='w-full border-collapse'>{children}</table>
			</div>
		),
		thead: ({ children }) => <thead className='bg-[#f7fafc]'>{children}</thead>,
		th: ({ children }) => (
			<th className='text-left p-3 font-semibold text-[#1a365d]'>{children}</th>
		),
		td: ({ children }) => (
			<td className='border-b border-[#e2e8f0] p-3 text-gray-700'>
				{children}
			</td>
		),
		tr: ({ children }) => <tr>{children}</tr>,
		code: ({ children }) => (
			<code className='bg-[#f7fafc] rounded px-1 py-0.5 font-mono text-sm text-[#1a365d]'>
				{children}
			</code>
		),
		strong: ({ children }) => (
			<strong className='font-semibold text-[#1a365d]'>{children}</strong>
		),
		...components,
	};
}
