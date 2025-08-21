import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
      {title}
    </h2>
    <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const ProjectCard = ({ title, description, tags, image, demoUrl, repoUrl, category }) => (
  <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative p-6">
      <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={16} />
            Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const FilterButton = ({ label, active, onClick, count }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
      active
        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
    }`}
  >
    {label} ({count})
  </button>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "University Placement Portal",
      description: "Comprehensive placement management system built with Next.js and Node.js, featuring role-based authentication, job applications, interview scheduling, and analytics dashboard for students, companies, and administrators.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "JWT", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://placement-portal-g3c8.vercel.app/auth/login",
      repoUrl: "https://github.com",
      category: "web-dev"
    },
    {
      title: "RAG Chatbot with Knowledge Graphs",
      description: "Advanced AI chatbot combining RAG (Retrieval Augmented Generation) with LLM and Knowledge Graphs for intelligent query processing and contextual understanding.",
      tags: ["RAG", "LLM", "Knowledge Graphs", "Python", "AI"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Radiants_mosdac.git",
      category: "ai-ml"
    },
    {
      title: "Chrome Keyword Highlighter Extension",
      description: "Chrome extension that searches and highlights keywords on webpages, provides contextual tag information, and includes optional AI summarization via ApyHub API with result storage and display.",
      tags: ["JavaScript", "Chrome Extension", "AI Summarization", "ApyHub API"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Highlighter_summarizer/tree/master",
      category: "web-dev"
    },
    {
      title: "QR Code Ticketing System",
      description: "Secure event management solution with Streamlit frontend, JWT authentication, and MySQL backend. Features QR code generation, 24-hour token validity, and admin validation system.",
      tags: ["Streamlit", "JWT", "MySQL", "QR Code", "Python"],
      image: "/api/placeholder/600/400",
      demoUrl: "https://qr-code-ticketing-system.streamlit.app",
      repoUrl: "https://github.com/suryaansh001/qr_code_ticketing",
      category: "web-dev"
    },
    {
      title: "AI Financial Planner",
      description: "FastAPI-based financial planning application with AI-driven predictions, portfolio analysis, bank statement processing, and PDF report generation using DistilRoBERTa for sentiment analysis.",
      tags: ["FastAPI", "AI", "DistilRoBERTa", "Financial Analysis", "PDF Generation"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Finance",
      category: "ai-ml"
    },
    {
      title: "GUNI 17-DOF Robot",
      description: "Comprehensive AI-powered robotic system with voice interaction, facial expressions, Next.js web interface, and IoT capabilities. Features real-time animated expressions, AI conversations, and MQTT integration.",
      tags: ["Robotics", "AI", "Next.js", "PyGame", "MQTT", "Voice Recognition"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com",
      category: "robotics"
    },
    {
      title: "VaxIntelliBio Nuclear Analysis",
      description: "AI-powered nuclear analysis report system using LLM and DNABERT for intelligent document processing and automated report generation with advanced biological data interpretation.",
      tags: ["DNABERT", "LLM", "Bioinformatics", "Document Analysis", "AI"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Vax_intelli_bio.git",
      category: "ai-ml"
    },
    {
      title: "Smart Attendance System",
      description: "Automated attendance system using YOLOv8 for pose detection and CNN for face recognition. Features hand-raising gesture detection, real-time face verification, and anti-cheating mechanisms.",
      tags: ["YOLOv8", "CNN", "Computer Vision", "OpenCV", "Face Recognition"],
      image: "/api/placeholder/600/400",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Attendance-system",
      category: "ai-ml"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'robotics', label: 'Robotics' }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectCount = (categoryId) => {
    if (categoryId === 'all') return projects.length;
    return projects.filter(project => project.category === categoryId).length;
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of my recent work spanning web development, AI/ML, and robotics" 
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <Filter size={20} />
            <span className="font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                label={category.label}
                active={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
                count={getProjectCount(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
              category={project.category}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/suryaansh001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;