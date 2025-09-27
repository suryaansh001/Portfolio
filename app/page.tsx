"use client"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Filter, ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
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
    <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-full lg:max-w-[600px] mx-auto lg:mx-0 min-h-[3rem] sm:min-h-[3.5rem] flex items-center break-words">
      <span className="leading-relaxed">
        <span className="text-white">{staticText}</span>
        {currentText}
        <span className={`inline-block w-0.5 h-5 sm:h-6 bg-purple-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
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
      image: "/projects/placementportal.webp",
      demoUrl: "https://placement-portal-g3c8.vercel.app/auth/login",
      repoUrl: "https://github.com",
      category: "web-dev"
    },
    {
      title: "RAG Chatbot with Knowledge Graphs",
      description: "Advanced AI chatbot combining RAG (Retrieval Augmented Generation) with LLM and Knowledge Graphs for intelligent query processing and contextual understanding.",
      tags: ["RAG", "LLM", "Knowledge Graphs", "Python", "AI"],
      image: "/projects/knowledgegraph.png",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Radiants_mosdac.git",
      category: "ai-ml"
    },
    {
      title: "Chrome Keyword Highlighter Extension",
      description: "Chrome extension that searches and highlights keywords on webpages, provides contextual tag information, and includes optional AI summarization via ApyHub API with result storage and display.",
      tags: ["JavaScript", "Chrome Extension", "AI Summarization", "ApyHub API"],
      image: "/projects/chromeextrnsion.png",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Highlighter_summarizer/tree/master",
      category: "web-dev"
    },
    {
      title: "QR Code Ticketing System",
      description: "Secure event management solution with Streamlit frontend, JWT authentication, and MySQL backend. Features QR code generation, 24-hour token validity, and admin validation system.",
      tags: ["Streamlit", "JWT", "MySQL", "QR Code", "Python"],
      image: "/projects/qrcodeAttendacne.webp",
      demoUrl: "https://qr-code-ticketing-system.streamlit.app",
      repoUrl: "https://github.com/suryaansh001/qr_code_ticketing",
      category: "web-dev"
    },
    {
      title: "AI Financial Planner",
      description: "FastAPI-based financial planning application with AI-driven predictions, portfolio analysis, bank statement processing, and PDF report generation using DistilRoBERTa for sentiment analysis.",
      tags: ["FastAPI", "AI", "DistilRoBERTa", "Financial Analysis", "PDF Generation"],
      image: "/projects/aiFinancial.png",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Finance",
      category: "ai-ml"
    },
    {
      title: "GUNI 17-DOF Robot",
      description: "Comprehensive AI-powered robotic system with voice interaction, facial expressions, Next.js web interface, and IoT capabilities. Features real-time animated expressions, AI conversations, and MQTT integration.",
      tags: ["Robotics", "AI", "Next.js", "PyGame", "MQTT", "Voice Recognition"],
      image: "/projects/placementportal.webp",
      demoUrl: "",
      repoUrl: "https://github.com",
      category: "robotics"
    },
    {
      title: "VaxIntelliBio Nuclear Analysis",
      description: "AI-powered nuclear analysis report system using LLM and DNABERT for intelligent document processing and automated report generation with advanced biological data interpretation.",
      tags: ["DNABERT", "LLM", "Bioinformatics", "Document Analysis", "AI"],
      image: "/projects/nuclear.png",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Vax_intelli_bio.git",
      category: "ai-ml"
    },
    {
      title: "Smart Attendance System",
      description: "Automated attendance system using YOLOv8 for pose detection and CNN for face recognition. Features hand-raising gesture detection, real-time face verification, and anti-cheating mechanisms.",
      tags: ["YOLOv8", "CNN", "Computer Vision", "OpenCV", "Face Recognition"],
      image: "/projects/attendance.png",
      demoUrl: "",
      repoUrl: "https://github.com/suryaansh001/Attendance-system",
      category: "ai-ml"
    },
    {
  title: "Disaster Human Detection (Thermal Imaging)",
  description: "AI model that identifies trapped humans in disaster scenarios using thermal images for rescue operations.",
  tags: ["Thermal Imaging", "Computer Vision", "YOLO", "AI"],
  image: "/projects/thermalimaging.png",
  demoUrl: "",
  repoUrl: "#", // GitHub link pending
  category: "ai-ml"
},
{
  title: "EfficientDet + YOLO Hybrid Model",
  description: "Hybrid object detection system combining EfficientDet and YOLO techniques with anchor-free detection, Mosaic augmentation, and dynamic head for LVIS dataset.",
  tags: ["EfficientDet", "YOLO", "Object Detection", "Computer Vision", "LVIS Dataset"],
  image: "/projects/efficientDET.png",
  demoUrl: "",
  repoUrl: "#", // GitHub link pending
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] max-h-screen">
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left max-w-full">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">AI Developer & Software Engineer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="responsive-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight max-w-full">
              <span className="block mb-2">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block break-words hyphens-auto">
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
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 mt-8 sm:mt-12 lg:mt-16">
            {/* Programming Languages */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiPython className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Python</span>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-300">JavaScript</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.398.543.652.69.652.69l8.816 5.09c.508.293 1.339.293 1.848 0l8.816-5.09s.254-.147.652-.69c.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79V7.787h-.79v4.608h-.79v-4.61h.79V7.787h.79v4.608h.79V7.787h.79v4.608h.79V7.787h.79v4.608h.79V7.787h.79v4.608h.79V7.787h.79v4.608h.79z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-300">C/C++</span>
            </div>

            {/* Frontend */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">React</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Next.js</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">TypeScript</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiTailwindcss className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Tailwind</span>
            </div>

            {/* Backend */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.080-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L2.46,6.68C2.376,6.729,2.322,6.825,2.322,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.272-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.020-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-300">Node.js</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <img src="/django.png" alt="Django" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Django</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <img src="/flask.png" alt="Flask" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Flask</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <img src="/fastapi.png" alt="Fasztapi" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              
              <span className="text-xs sm:text-sm font-medium text-gray-300">FastAPI</span>
            </div>

            {/* Databases */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiMongodb className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">MongoDB</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiPostgresql className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">PostgreSQL</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiMysql className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">MySQL</span>
            </div>

            {/* AI/ML */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
             <img src="/tf.png" alt="Tensorflow" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">TensorFlow</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <img src="/pytorch.png" alt="Tensorflow" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              
              <span className="text-xs sm:text-sm font-medium text-gray-300">PyTorch</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <img src="/langchain.png" alt="LangChain" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">LangChain</span>
            </div>

            {/* DevOps & Tools */}
            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiDocker className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Docker</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <SiLinux className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Linux</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-300">Git</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.997 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.297 24 12c0-6.628-5.373-12-12.003-12"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium text-gray-300">GitHub</span>
            </div>
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