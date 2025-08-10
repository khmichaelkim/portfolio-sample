import Link from "next/link";

export default function Home() {
  return (
    // Main container with sky-50 background and full viewport height
    <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 flex items-center justify-center px-4">
      {/* Content wrapper with responsive max width */}
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Main greeting with gradient text effect */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
          Hi! I'm Michael
        </h1>
        
        {/* About me paragraph with proper text colors */}
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto">
          I love to build things.
        </p>
        
        {/* View Projects button with hover states and responsive styling */}
        <Link 
          href="/projects"
          className="inline-block bg-gradient-to-r from-sky-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-blue-600 dark:hover:from-sky-400 dark:hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
