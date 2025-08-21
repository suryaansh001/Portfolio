"use client"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Filter, ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import DecryptedText from '@/components/ui/DecryptedText';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LogoLoop from "@/components/ui/LogoLoop"
import CircularText from "@/components/ui/CircularText"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiMongodb, SiPostgresql, SiMysql, SiDocker, SiLinux } from 'react-icons/si';
import { useState, useEffect } from 'react';
import Orb from "@/components/ui/Orb";
const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiLinux />, title: "Linux", href: "https://linux.org" },
];

const TypingHero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const staticText = "I build  ";
  const dynamicTexts = [
    "intelligent AI systems that solve real-world problems.",
    "modern web applications with cutting-edge technologies.",
    "robotics solutions that bridge hardware and software.",
    "digital experiences that users love and remember.",
    "full-stack applications that scale and perform."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentDynamicText = dynamicTexts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentDynamicText.length) {
          setCurrentText(currentDynamicText.slice(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, dynamicTexts]);

  // Cursor blink effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <p className="text-lg sm:text-xl text-zinc-400 max-w-[600px] mx-auto lg:mx-0 min-h-[3.5rem] flex items-center">
      <span>
        <span className="text-white">{staticText}</span>
        {currentText}
        <span className={`inline-block w-0.5 h-6 bg-purple-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
      </span>
    </p>
  );
};
// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  category: string;
}

const ProjectCard = ({ title, description, tags, image, demoUrl, repoUrl, category }: ProjectCardProps) => (
  <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative p-4 sm:p-6">
      <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
        {tags.slice(0, 4).map((tag, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
          >
            {tag}
          </span>
        ))}
        {tags.length > 4 && (
          <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-gray-500/20 text-gray-400 rounded-full border border-gray-500/30">
            +{tags.length - 4}
          </span>
        )}
      </div>
      
      <div className="flex gap-2 sm:gap-3">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">Demo</span>
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors text-sm font-medium"
          >
            <Github size={14} />
            <span className="hidden sm:inline">Code</span>
          </a>
        )}
      </div>
    </div>
  </div>
);

// Certificate Card Component
const CertificateCard = ({ title, organization, year, skills, link }: {
  title: string;
  organization: string;
  year: string;
  skills: string[];
  link: string;
}) => (
  <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative p-4 sm:p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-purple-400 font-medium">{year}</p>
            <p className="text-xs sm:text-sm text-gray-400">{organization}</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors leading-tight">
        {title}
      </h3>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 sm:px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm font-medium w-full justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25"
      >
        <ExternalLink size={14} />
        <span>View Certificate</span>
      </a>
    </div>
  </div>
);

// Filter Button Component
const FilterButton = ({ label, active, onClick, count }: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) => (
  <button
    onClick={onClick}
    className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
      active
        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
    }`}
  >
    <span className="sm:hidden">{label.split(' ')[0]} ({count})</span>
    <span className="hidden sm:inline">{label} ({count})</span>
  </button>
);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "University Placement Portal",
      description: "Comprehensive placement management system built with Next.js and Node.js, featuring role-based authentication, job applications, interview scheduling, and analytics dashboard for students, companies, and administrators.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "TypeScript", "JWT", "Tailwind CSS"],
      image: "/placeholder.jpg",
      demoUrl: "https://placement-portal-g3c8.vercel.app/auth/login",
      repoUrl: "https://github.com",
      category: "web-dev"
    },
    {
      title: "RAG Chatbot with Knowledge Graphs",
      description: "Advanced AI chatbot combining RAG (Retrieval Augmented Generation) with LLM and Knowledge Graphs for intelligent query processing and contextual understanding.",
      tags: ["RAG", "LLM", "Knowledge Graphs", "Python", "AI"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Radiants_mosdac.git",
      category: "ai-ml"
    },
    {
      title: "Chrome Keyword Highlighter Extension",
      description: "Chrome extension that searches and highlights keywords on webpages, provides contextual tag information, and includes optional AI summarization via ApyHub API with result storage and display.",
      tags: ["JavaScript", "Chrome Extension", "AI Summarization", "ApyHub API"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Highlighter_summarizer/tree/master",
      category: "web-dev"
    },
    {
      title: "QR Code Ticketing System",
      description: "Secure event management solution with Streamlit frontend, JWT authentication, and MySQL backend. Features QR code generation, 24-hour token validity, and admin validation system.",
      tags: ["Streamlit", "JWT", "MySQL", "QR Code", "Python"],
      image: "/placeholder.jpg",
      demoUrl: "https://qr-code-ticketing-system.streamlit.app",
      repoUrl: "https://github.com/suryaansh001/qr_code_ticketing",
      category: "web-dev"
    },
    {
      title: "AI Financial Planner",
      description: "FastAPI-based financial planning application with AI-driven predictions, portfolio analysis, bank statement processing, and PDF report generation using DistilRoBERTa for sentiment analysis.",
      tags: ["FastAPI", "AI", "DistilRoBERTa", "Financial Analysis", "PDF Generation"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Finance",
      category: "ai-ml"
    },
    {
      title: "GUNI 17-DOF Robot",
      description: "Comprehensive AI-powered robotic system with voice interaction, facial expressions, Next.js web interface, and IoT capabilities. Features real-time animated expressions, AI conversations, and MQTT integration.",
      tags: ["Robotics", "AI", "Next.js", "PyGame", "MQTT", "Voice Recognition"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com",
      category: "robotics"
    },
    {
      title: "VaxIntelliBio Nuclear Analysis",
      description: "AI-powered nuclear analysis report system using LLM and DNABERT for intelligent document processing and automated report generation with advanced biological data interpretation.",
      tags: ["DNABERT", "LLM", "Bioinformatics", "Document Analysis", "AI"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Vax_intelli_bio.git",
      category: "ai-ml"
    },
    {
      title: "Smart Attendance System",
      description: "Automated attendance system using YOLOv8 for pose detection and CNN for face recognition. Features hand-raising gesture detection, real-time face verification, and anti-cheating mechanisms.",
      tags: ["YOLOv8", "CNN", "Computer Vision", "OpenCV", "Face Recognition"],
      image: "/placeholder.jpg",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Attendance-system",
      category: "ai-ml"
    }
  ];

  const certifications = [
    {
      title: "Introduction to TensorFlow for AI, ML, and Deep Learning",
      organization: "DeepLearning.AI",
      year: "2023",
      skills: ["Deep Learning Fundamentals", "Neural Networks", "TensorFlow Implementation"],
      link: "https://www.coursera.org/account/accomplishments/verify/BWHOFQD66HN7"
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      organization: "DeepLearning.AI",
      year: "2023",
      skills: ["Image Processing", "CNN Architecture", "Computer Vision"],
      link: "https://www.coursera.org/account/accomplishments/verify/GFARU5OXTIE2"
    },
    {
      title: "Machine Learning with Python",
      organization: "IBM",
      year: "2023",
      skills: ["ML Algorithms", "Python Implementation", "Data Analysis"],
      link: "https://www.coursera.org/account/accomplishments/records/3G2DV9KL8BSC"
    },
    {
      title: "Automate Cybersecurity Tasks with Python",
      organization: "Google",
      year: "2023",
      skills: ["Python Automation", "Security Scripts", "Task Automation"],
      link: "https://www.coursera.org/account/accomplishments/records/QWACL9Z6UB5B"
    },
    {
      title: "Foundations of Cybersecurity",
      organization: "Google",
      year: "2023",
      skills: ["Security Fundamentals", "Threat Analysis", "Security Protocols"],
      link: "https://www.coursera.org/account/accomplishments/records/LRBQKGR3YLTJ"
    },
    {
      title: "Penetration Testing, Threat Hunting, and Cryptography",
      organization: "IBM",
      year: "2023",
      skills: ["Penetration Testing", "Threat Hunting", "Cryptography"],
      link: "https://www.coursera.org/account/accomplishments/records/DPJXNCHLHSJ5"
    },
    {
      title: "Introduction to Virtual Reality",
      organization: "University of London, Goldsmiths",
      year: "2023",
      skills: ["VR Development", "3D Interaction"],
      link: "https://www.coursera.org/account/accomplishments/records/YUE9MTMS3T4D"
    },
    {
      title: "C for Everyone: Programming Fundamentals",
      organization: "UC Santa Cruz",
      year: "2023",
      skills: ["Core Programming", "Data Structures", "Problem Solving"],
      link: "https://www.coursera.org/account/accomplishments/records/XR7ZWLN2HQSR"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ai-ml', label: 'AI & ML' },
    { id: 'robotics', label: 'Robotics' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getProjectCount = (categoryId: string) => {
    if (categoryId === 'all') return projects.length;
    return projects.filter(project => project.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">AI Developer & Software Engineer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                <DecryptedText
                  text="Suryaansh Sharma"
                  speed={100}
                  maxIterations={20}
                  characters="CD@#$%^14!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  animateOn="view"
                />
              </span>
            </h1>
            
            <TypingHero />
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <Button 
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <Link href="https://github.com/suryaansh001" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/suryaansh/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>             
              <Link href="mailto:suryaansh958@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center order-first lg:order-last">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      

<section id="about" className="py-16 sm:py-24 lg:py-32 relative">
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <SectionHeading title="About Me" subtitle="My background and journey" />

    <div className="mt-8 sm:mt-12 lg:mt-16">
      <GlassmorphicCard>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[400px]">
          
          {/* Left Side - Image and Education */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 lg:p-8 bg-gradient-to-b from-zinc-800/30 to-zinc-900/30 lg:border-r lg:border-zinc-700/50">
            {/* Profile Image with Orb */}
            <div className="relative mb-6 flex items-center justify-center">
              {/* Orb Background */}
              <div className="absolute" style={{ width: '320px', height: '320px' }}>
                <Orb
                  hoverIntensity={0.3}
                  rotateOnHover={true}
                  hue={270}
                  forceHoverState={false}
                />
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-zinc-700/50">
                <img
                  src="/suryaansh.png"
                  alt="Suryaansh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name */}
            <br></br>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-center">
              Suryaansh Sharma
            </h3>
            
            {/* Education */}
            <div className="text-center space-y-2 mb-4">
              <p className="text-sm sm:text-base text-zinc-400">
                Pursuing BTech from
              </p>
              <p className="text-purple-400 font-medium text-sm sm:text-base">
                JK Lakshmipat University
              </p>
            </div>
            
            {/* Status */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-green-400 font-medium">Available for work</span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              staggerDelay={30}
              threshold={0.2}
            >
              <div className="space-y-4 mb-6">
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  I'm an AI developer and software engineer specializing in machine learning, computer vision, and full-stack web development. With expertise in Python, JavaScript, and modern frameworks, I create intelligent systems that solve real-world problems.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  My journey spans from robotics internships to AI model development, where I've built everything from healthcare prediction systems to humanoid robot integrations. I'm passionate about combining cutting-edge AI with practical applications.
                </p>
                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Currently pursuing my degree while gaining hands-on experience through internships and freelance projects. I'm also the Co-Chair of the Competitive Programming Club at JKLU and actively mentor peers in algorithms and data structures.
                </p>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Email</div>
                  <div className="font-medium text-sm text-zinc-300">suryaansh958@gmail.com</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Location</div>
                  <div className="font-medium text-sm text-zinc-300">Jaipur, Rajasthan</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Education</div>
                  <div className="font-medium text-sm text-zinc-300">JK Lakshmipat University[2023 -2027]</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">Availability</div>
                  <div className="font-medium text-sm text-green-500">Open to opportunities</div>
                </div>
              </div>

              {/* Resume Button */}
              <div>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white transition-colors duration-200">
                    Download Resume
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />
          <div className="h-32 sm:h-48 lg:h-64 relative overflow-hidden mt-8 sm:mt-12">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
            <SkillBadge name="Python" level={95} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="C/C++" level={90} />
            <SkillBadge name="React" level={85} />
            <SkillBadge name="Next.js" level={80} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="Django" level={85} />
            <SkillBadge name="Flask" level={90} />
            <SkillBadge name="FastAPI" level={85} />
            <SkillBadge name="MongoDB" level={80} />
            <SkillBadge name="PostgreSQL" level={75} />
            <SkillBadge name="MySQL" level={80} />
            <SkillBadge name="Machine Learning" level={85} />
            <SkillBadge name="Computer Vision" level={80} />
            <SkillBadge name="LangChain" level={75} />
            <SkillBadge name="Docker" level={70} />
            <SkillBadge name="Linux" level={85} />
            <SkillBadge name="Git" level={90} />
            <SkillBadge name="Raspberry Pi" level={80} />
            <SkillBadge name="MQTT" level={75} />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading title="Certifications" subtitle="Professional credentials and learning achievements" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {certifications.map((cert, index) => (
              <CertificateCard
                key={index}
                title={cert.title}
                organization={cert.organization}
                year={cert.year}
                skills={cert.skills}
                link={cert.link}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Continuously learning and expanding my skill set through professional certifications
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Award className="w-5 h-5" />
              <span className="font-medium">{certifications.length} Certifications Earned</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Some of my recent work spanning web development, AI/ML, and robotics" 
          />

          {/* Filter Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-gray-400">
              <Filter size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="https://github.com/suryaansh001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-8 sm:mt-12 lg:mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-8 sm:mt-12 lg:mt-16">
            <GlassmorphicCard>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <a 
                      href="mailto:suryaansh958@gmail.com" 
                      className="font-medium text-sm sm:text-base hover:text-purple-400 transition-colors"
                    >
                      suryaansh958@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <a 
                      href="https://www.linkedin.com/in/suryaansh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-sm sm:text-base hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/suryaansh
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <a 
                      href="https://github.com/suryaansh001" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-sm sm:text-base hover:text-purple-400 transition-colors"
                    >
                      github.com/suryaansh001
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800">
                <h4 className="text-base sm:text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm sm:text-base">Available for internships, freelance work, and full-time opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-bold text-lg sm:text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Suryaansh</span>
              <span className="text-white">Sharma</span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Suryaansh Sharma. All rights reserved.
            </p>
          </div>
          
          <div className="hidden sm:block">
            <CircularText
              text="Suryaansh Sharma *"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </div>
          
          <div className="flex gap-3 sm:gap-4">
            <Link href="https://github.com/suryaansh001" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/suryaansh/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:suryaansh958@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white w-10 h-10 sm:w-12 sm:h-12"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>  
      </footer>
    </div>
  )
}