import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="bg-slate-800 text-white p-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Blog</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/blog/welcome" className="hover:underline">About</Link></li>
              <li><Link href="/blog/overview" className="hover:underline">Overview</Link></li>
              <li><Link href="/blog/clients" className="hover:underline">Clients</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="bg-slate-100 p-4 mt-12">
        <div className="max-w-3xl mx-auto text-center text-slate-600">
          <p>© 2023 MDX Blog Demo</p>
        </div>
      </footer>
    </div>
  );
}
