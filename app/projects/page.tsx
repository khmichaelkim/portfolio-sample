import Link from "next/link";

export default function Projects() {
  return (
    // Main container with consistent styling from landing page
    <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back to home link */}
        <Link 
          href="/"
          className="inline-flex items-center text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>
        
        {/* Page title */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8">
          My Projects
        </h1>
        
        {/* Projects placeholder content */}
        <div className="text-center py-16">
          <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-4">
            Projects coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}