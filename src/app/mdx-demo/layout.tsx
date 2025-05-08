export default function MDXDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <header className="mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">MDX Demo Section</h1>
        <p className="text-gray-600">Demonstrating MDX capabilities in Next.js</p>
      </header>
      
      <main className="prose prose-slate max-w-none">
        {children}
      </main>
      
      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>This is a demonstration of MDX in Next.js</p>
      </footer>
    </div>
  );
}
