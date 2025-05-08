import createMDX from '@next/mdx';
import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm';

const nextConfig: NextConfig = {
	pageExtensions: ['mdx', 'ts', 'tsx'],
	// Add experimental mdxRs flag to fix metadata issues
	experimental: {
		mdxRs: true,
	},
};

const withMDX = createMDX({
	extension: /\.mdx$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
		// Ensure we can use exports in MDX files
		providerImportSource: '@mdx-js/react',
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
