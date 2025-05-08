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
						className='text-primary hover:text-secondary transition-colors'>
						{children}
					</Link>
				);
			}
			return (
				<a
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className='text-primary hover:text-secondary transition-colors'>
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
			<h1 className='text-3xl font-bold text-primary mb-6 mt-8'>{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className='text-2xl font-semibold text-primary mb-4 mt-6'>
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className='text-xl font-semibold text-primary mb-3 mt-5'>
				{children}
			</h3>
		),
		p: ({ children }) => (
			<p className='text-foreground-muted mb-4 leading-relaxed'>{children}</p>
		),
		ul: ({ children }) => <ul className='space-y-2 mb-4'>{children}</ul>,
		li: ({ children }) => (
			<li className='flex items-start'>
				<span className='text-secondary mr-2'>•</span>
				<span className='text-foreground-muted'>{children}</span>
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
		thead: ({ children }) => (
			<thead className='bg-background-alt'>{children}</thead>
		),
		th: ({ children }) => (
			<th className='text-left p-3 font-semibold text-primary'>{children}</th>
		),
		td: ({ children }) => (
			<td className='border-b border-border p-3 text-foreground-muted'>
				{children}
			</td>
		),
		tr: ({ children }) => <tr>{children}</tr>,
		code: ({ children }) => (
			<code className='bg-background-alt rounded px-1 py-0.5 font-mono text-sm text-primary'>
				{children}
			</code>
		),
		strong: ({ children }) => (
			<strong className='font-semibold text-primary'>{children}</strong>
		),
		...components,
	};
}
