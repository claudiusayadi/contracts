import { notFound } from 'next/navigation';

// Define the blog posts we have available
const posts = {
  'welcome': {
    component: () => import('@/mdx/about-me.mdx'),
    metadata: () => import('@/mdx/about-me.mdx').then(mod => mod.metadata)
  },
  'overview': {
    component: () => import('@/mdx/overview.mdx'),
    metadata: () => import('@/mdx/overview.mdx').then(mod => mod.metadata)
  },
  'clients': {
    component: () => import('@/mdx/clients.mdx'),
    metadata: () => import('@/mdx/clients.mdx').then(mod => mod.metadata)
  }
};

// Generate static params for all known blog posts
export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

// Set dynamic params to false to return 404 for unknown slugs
export const dynamicParams = false;

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Check if the post exists
  if (!posts[slug]) {
    return {
      title: 'Post Not Found'
    };
  }
  
  // Get the post metadata
  const metadata = await posts[slug].metadata();
  
  return {
    title: metadata.title,
    description: metadata.description || `Blog post about ${metadata.title}`
  };
}

// The blog post page component
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Check if the post exists
  if (!posts[slug]) {
    notFound();
  }
  
  // Dynamically import the MDX component
  const PostComponent = (await posts[slug].component()).default;
  
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <article className="prose prose-slate max-w-none">
        <PostComponent />
      </article>
    </div>
  );
}
