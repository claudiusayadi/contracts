import Link from 'next/link';

// Define metadata for the blog index page
export const metadata = {
  title: 'Blog',
  description: 'Read our latest blog posts'
};

// Define the blog posts
const posts = [
  {
    slug: 'welcome',
    title: 'About Me',
    excerpt: 'Learn more about my background and expertise in software development.'
  },
  {
    slug: 'overview',
    title: 'Overview',
    excerpt: 'A high-level overview of our approach to building modern web applications.'
  },
  {
    slug: 'clients',
    title: 'Who Do I Work With',
    excerpt: 'Discover the types of clients and industries I specialize in serving.'
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      
      <div className="space-y-8">
        {posts.map(post => (
          <article key={post.slug} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
