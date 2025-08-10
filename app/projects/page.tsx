"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Sample projects data - replace with your actual projects
const projects = [
  {
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project2"
  },
  {
    name: "Observability Demo App",
    description: "A serverless transaction system with fraud detection showcasing AWS observability patterns and monitoring.",
    technologies: ["AWS CDK", "Lambda", "DynamoDB", "API Gateway", "CloudWatch", "Python"],
    githubUrl: "https://github.com/khmichaelkim/agentic-demo-app"
  },
  {
    name: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project4"
  },
];

export default function Projects() {
  return (
    // Main container with consistent styling from landing page
    <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 px-4 py-12">
      <div className="max-w-6xl mx-auto">
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
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Project cards using shadcn Card components */}
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  {project.name}
                </span>
              </div>
              
              {/* Card header with title */}
              <CardHeader className="h-40">
                <CardTitle className="text-xl">
                  {project.name}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              {/* Card content with tech stack */}
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-sky-100 dark:bg-sky-400/20 text-sky-700 dark:text-sky-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              {/* Card footer with animated project links */}
              <CardFooter className="flex gap-3 p-6 mt-auto">
                {project.liveUrl && (
                  <motion.a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-36 px-4 py-3 h-12 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 dark:from-sky-400 dark:to-blue-400 dark:hover:from-sky-500 dark:hover:to-blue-500 text-white rounded-lg text-sm font-medium overflow-hidden group"
                    // Hover animation - scale and lift effect
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    // Tap animation - press down effect
                    whileTap={{ 
                      scale: 0.98,
                      y: 0,
                      transition: { duration: 0.1 }
                    }}
                    // Initial animation when component mounts
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    {/* Animated background shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    {/* Button content with icon */}
                    <span className="relative flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-28 px-4 py-3 h-12 border-2 border-sky-600 text-sky-600 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-400 dark:hover:bg-sky-400/10 rounded-lg text-sm font-medium overflow-hidden group"
                    // Hover animation - scale and lift effect
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      borderColor: "#0284c7", // sky-600 in dark mode
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    // Tap animation - press down effect
                    whileTap={{ 
                      scale: 0.98,
                      y: 0,
                      transition: { duration: 0.1 }
                    }}
                    // Initial animation when component mounts
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index + 0.1, duration: 0.5 }}
                  >
                    {/* Animated border glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        boxShadow: "0 0 20px rgba(14, 165, 233, 0.4)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Sliding background fill on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-blue-600/10 dark:from-sky-400/10 dark:to-blue-400/10 rounded-md"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    />
                    {/* Button content with icon */}
                    <span className="relative flex items-center justify-center gap-2">
                      <Github size={16} />
                      GitHub
                    </span>
                  </motion.a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}