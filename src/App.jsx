import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BentoCard } from './components/BentoCard';
import { Badge } from './components/Badge';
import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  PaperPlaneRight,
  FigmaLogo,
  CodeBlock,
  Browser,
  DeviceMobile,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkle,
  ChatCircle,
  FileCode,
  MapPin,
  EnvelopeSimple,
  ArrowUp,
  X,
  Link,
  CaretDown,
  CaretUp
} from '@phosphor-icons/react';

function App() {
  const [activeTab, setActiveTab] = useState('certificates');
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Force scroll to top on page load/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  // Data Arrays
  const projectsData = [
    {
      id: 1,
      title: 'Sistem Informasi Manajemen',
      type: 'project',
      image: 'https://picsum.photos/seed/web/600/400',
      description: [
        'Developed a comprehensive management information system.',
        'Implemented secure user authentication and role-based access.',
        'Created dynamic dashboards for data visualization.'
      ],
      tags: ['React'],
      techStack: 'React, Node.js, Express, MongoDB',
      link: '#'
    },
    {
      id: 2,
      title: 'AutiVision App',
      type: 'project',
      image: 'https://picsum.photos/seed/vision/600/400',
      description: [
        'Built a mobile application for visual assistance.',
        'Integrated machine learning models for real-time object detection.',
        'Designed accessible and intuitive user interfaces.'
      ],
      tags: ['Flutter'],
      techStack: 'Flutter, Firebase, TensorFlow Lite',
      link: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Dashboard',
      type: 'project',
      image: 'https://picsum.photos/seed/store/600/400',
      description: [
        'Created a responsive admin dashboard for e-commerce stores.',
        'Implemented inventory management and order tracking features.',
        'Optimized performance for large datasets.'
      ],
      tags: ['Next.js'],
      techStack: 'Next.js, Tailwind CSS, PostgreSQL',
      link: '#'
    },
    {
      id: 4,
      title: 'Realtime Chat App',
      type: 'project',
      image: 'https://picsum.photos/seed/chat/600/400',
      description: [
        'Developed a real-time messaging application.',
        'Implemented WebSocket connections for instant message delivery.',
        'Added support for file sharing and read receipts.'
      ],
      tags: ['Vue'],
      techStack: 'Vue, Socket.io, Redis',
      link: '#'
    }
  ];

  const certificatesData = [
    {
      id: 1,
      title: 'Peserta Top 165 Social Project Program Innovillage 2024',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/innovilage.png',
      description: [
        'Successfully selected as one of the Top 165 teams in the Innovillage 2024 Social Project Program organized by PT Telkom Indonesia. The project focused on developing an Arduino-based solution that utilizes tofu production wastewater to support sustainable livestock farming. I contributed to system development, hardware assembly, testing, and project documentation while collaborating with the team to deliver a practical solution with positive social impact.'
      ],
      tags: ['Innovillage', 'Social Innovation', 'IoT Project'],
      institution: 'PT Telkom Indonesia dan Universitas Telkom',
      link: ''
    },
    {
      id: 2,
      title: 'Peraih Pendanaan Bidang PKM-KC Tahun 2024',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/pkm.png',
      description: [
        'Successfully awarded funding in the Student Creativity Program – Karsa Cipta (PKM-KC), organized by the Ministry of Education, Culture, Research, and Technology. The funded project developed an Internet of Things (IoT)-based irrigation monitoring and control system to improve water distribution efficiency in agricultural areas. This achievement recognizes innovative student projects that transform technology into practical solutions with real-world impact.'
      ],
      tags: ['PKM-KC', 'Research', 'IoT Project'],
      institution: 'Kemendikbudristek',
      link: ''
    },
    {
      id: 3,
      title: 'Certificate of Completion Bangkit Specializing in Machine Learning',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/bangkit.png',
      description: [
        'Successfully completed Bangkit Academy 2023 Batch 2 in the Machine Learning learning path, a technology career program led by Google, GoTo, and Traveloka. The program provided intensive training in Machine Learning using Python and TensorFlow, covering data processing, deep learning, and AI model development while strengthening problem-solving, collaboration, and industry-ready skills through hands-on projects.'
      ],
      tags: ['Bangkit Academy', 'Machine Learning'],
      institution: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
      link: ''
    },
    {
      id: 4,
      title: 'Analyze Data to Answer Questions',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/coursera-data.png',
      description: [
        'Successfully completed the Analyze Data to Answer Questions course as part of the Google Data Analytics Professional Certificate. The course focused on analyzing and interpreting data using spreadsheets and SQL, applying data visualization techniques, and communicating insights to support data-driven decision-making.'
      ],
      tags: ['Coursera', 'Google', 'Analyze Data'],
      institution: 'Coursera',
      link: 'https://coursera.org/verify/522W8BEHAFSH'
    },
    {
      id: 5,
      title: 'Belajar Dasar Git dengan GitHub',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/dicoding-git.png',
      description: [
        'Successfully completed the Belajar Dasar Git dengan GitHub course by Dicoding. The course introduced the fundamentals of version control using Git and GitHub, including repository management, branching, collaboration through remote repositories, and best practices for managing software development projects.'
      ],
      tags: ['Dicoding', 'Git', 'GitHub'],
      institution: 'Dicoding',
      link: 'https://www.dicoding.com/certificates/EYX46N8WOPDL'
    },
    {
      id: 6,
      title: 'Using Python to Interact with the Operating System',
      type: 'certification',
      icon: <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />,
      image: '/images/coursera-python.png',
      description: [
        'Successfully completed the Using Python to Interact with the Operating System course from Google. The course focused on using Python to automate system administration tasks, manage files and directories, execute operating system commands, and develop automation scripts to improve productivity and workflow efficiency.'
      ],
      tags: ['Coursera', 'Google', 'Python'],
      institution: 'Coursera',
      link: 'https://coursera.org/verify/V9JPJTJDDS9V'
    }
  ];

  // Global Cursor Animation using performant motion values (bypasses React state)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfigSlow = { damping: 20, stiffness: 150, mass: 0.8 };
  const cursorXSpringSlow = useSpring(cursorX, springConfigSlow);
  const cursorYSpringSlow = useSpring(cursorY, springConfigSlow);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  // Parallax Scroll Effect for Hero Section
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const educationContent = (
    <div id="education" className="scroll-mt-32">
      <BentoCard delay={0.2}>
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap size={24} className="text-white" />
          <h2 className="text-xl font-bold text-white">Education</h2>
        </div>

        <div className="space-y-6">
          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Sep 2021 - Jan 2026</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Bachelor of Computer Engineering</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-0">Syiah Kuala University</p>
          </div>
        </div>
      </BentoCard>
    </div>
  );

  const experienceContent = (
    <div id="experience" className="scroll-mt-32">
      <BentoCard delay={0.3}>
        <div className="flex items-center gap-3 mb-6">
          <Briefcase size={24} className="text-white" />
          <h2 className="text-xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Feb 2026 - Apr 2026</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Standard Unit Price (SSH) Surveyor</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">UPBJ Syiah Kuala University, Banda Aceh</p>
            <p className="text-xs text-slate-400">Conducted price surveys across 50+ stores, verified proposed procurement items, and compiled comprehensive reports to support government procurement planning and Standard Unit Price (SSH) preparation.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Des 2024 - Feb 2025</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Social Project Participant</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Innovillage (PT Telkom Indonesia)</p>
            <p className="text-xs text-slate-400">Contributed to an Arduino-based social innovation project through system development, hardware testing, and project documentation to support sustainable community solutions.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Feb 2024 - Jan 2025</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Information & Communication Division Member</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Himpunan Mahasiswa Teknik Komputer • Syiah Kuala University, Banda Aceh</p>
            <p className="text-xs text-slate-400">Managed digital content, publication designs, and organizational documentation while collaborating with multiple divisions to support communication and promotional activities.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Feb 2024 - Des 2024</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">IoT Hardware Developer & Media Creative</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">PKM-KC Team (Kemendikbudristek)</p>
            <p className="text-xs text-slate-400">Developed an ESP32-based IoT prototype for smart irrigation while contributing to project documentation, publication materials, and outreach activities.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Mar 2024 - Nov 2024</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Media Creative Team Member</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Computer Media Challenge (CMD) • Syiah Kuala University, Banda Aceh</p>
            <p className="text-xs text-slate-400">Designed promotional materials, managed social media content, and documented events to support effective communication and student engagement.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Feb 2024 - Mar 2024</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Media Content Administrator</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Pusjar SKMK, Banda Aceh</p>
            <p className="text-xs text-slate-400">Managed digital media content and organized institutional documents to ensure information was accurate, well-structured, and easily accessible.</p>
          </div>

          <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1 gap-1.5 md:gap-0">
              <div className="order-1 md:order-2 self-start">
                <Badge>Ags 2023 - Jan 2024</Badge>
              </div>
              <h3 className="font-bold text-white order-2 md:order-1 text-base md:text-lg">Machine Learning Cohort</h3>
            </div>
            <p className="text-sm font-medium text-accent mb-2">Bangkit Academy by Google, GoTo & Traveloka</p>
            <p className="text-xs text-slate-400">Completed a six-month intensive program covering Machine Learning with Python and TensorFlow, data processing, deep learning, and collaborative capstone projects aligned with industry practices.</p>
          </div>
        </div>
      </BentoCard>
    </div>
  );
  const showcaseContent = (
    <BentoCard delay={0.4} className="h-full" innerClassName="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Certifications & Awards</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowAllCertificates(!showAllCertificates)} 
            className={`flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 active:scale-95 border whitespace-nowrap shrink-0 ${
              showAllCertificates 
                ? 'bg-slate-800/40 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200' 
                : 'bg-accent/10 border-accent/20 text-accent hover:bg-accent/20'
            }`}
          >
            {showAllCertificates ? 'View Less' : 'View More'}
            {showAllCertificates ? (
              <CaretUp weight="bold" size={14} />
            ) : (
              <CaretDown weight="bold" size={14} />
            )}
          </button>
        </div>
      </div>

      {activeTab === 'projects' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedItem(project)}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors cursor-pointer"
            >
              <div className="h-32 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white text-sm mb-2 truncate">{project.title}</h3>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
        >
          {(showAllCertificates ? certificatesData : certificatesData.slice(0, 4)).map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedItem(cert)}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col cursor-pointer"
            >
              <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  cert.icon
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">{cert.title}</h3>
                <div className="flex gap-1.5 flex-wrap mt-auto">
                  {cert.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </BentoCard>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-accent/30 font-sans pb-4">

      {/* Global Subtle Light Flare Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(56, 189, 248, 0) 70%)',
          x: cursorXSpringSlow,
          y: cursorYSpringSlow,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? "top-6 md:top-6" : "top-6 md:top-8"
          }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className={`flex flex-col w-full transition-colors duration-700 ease-out ${scrolled
            ? "max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50 rounded-full"
            : "max-w-7xl bg-transparent border-transparent rounded-none md:rounded-full"
            }`}
        >
          <div className={`flex justify-between items-center w-full gap-2 ${scrolled ? "px-3 py-2 md:px-6 md:py-3" : "px-3 py-2 md:px-2 md:py-2"}`}>
            <a href="#" className="text-sm md:text-2xl font-bold tracking-tighter text-white flex items-center gap-1 md:gap-3 shrink-0 hover:text-accent transition-colors">
              <Sparkle size={14} weight="fill" className="text-accent md:w-[24px] md:h-[24px]" />
              <span className="hidden md:inline">Di Muhammad Zulfa Ridha</span>
              <span className="md:hidden">Zulfa</span>
            </a>

            {/* Mobile Links - Visible only on Mobile */}
            <div className={`md:hidden flex items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-semibold text-slate-300 transition-all duration-500`}>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#certificates" className="hover:text-white transition-colors">Certificates</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex items-center shrink-0">
              <a href="/CV a.n Di Muhammad Zulfa Ridha.pdf" download="CV a.n Di Muhammad Zulfa Ridha.pdf" className="bg-white hover:bg-slate-200 text-slate-950 px-4 py-1.5 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-sm font-bold transition-all active:scale-95 shadow-sm whitespace-nowrap">
                <span className="md:hidden">CV</span>
                <span className="hidden md:inline">Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Scroll Down Indicator */}
      <div
        className={`fixed bottom-8 left-0 right-0 z-40 flex justify-center pointer-events-none transition-opacity duration-700 ease-in-out ${scrolled ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
      >
        <div className="flex flex-col items-center gap-1 text-slate-300">
          <span className="text-sm font-bold text-accent bg-slate-950/40 px-3 py-0.5 rounded-full backdrop-blur-sm border border-slate-800/50 shadow-md">Scroll</span>

          {/* Desktop Mouse Icon */}
          <div className="hidden md:flex w-6 h-10 rounded-full border-2 border-slate-400 justify-center p-1 mt-1">
            <motion.div
              animate={{ y: [0, 16], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>

          {/* Mobile Arrow Icon */}
          <div className="md:hidden flex flex-col items-center justify-center mt-0.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <CaretDown size={28} weight="bold" className="text-accent drop-shadow-md" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 md:pt-20">

        {/* Hero Section */}
        <section className="min-h-[calc(100vh-140px)] pb-40 md:pb-12 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 relative mb-12">
          <motion.div
            className="flex-1 text-left"
            style={{ y: heroY }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } } }}>
                <Badge variant="primary" className="mb-3 md:mb-6 inline-flex"><Sparkle size={14} className="mr-1" /> Available for work</Badge>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Zulfa.</span><br />
                  I build digital <br />
                  <span className="text-accent">experiences.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
                  A passionate tech enthusiast specializing in Machine Learning, Web Development, UI/UX Design, and Creative Media.
                </p>
              </motion.div>
              <div className="flex gap-4 items-center flex-wrap">
                <motion.a 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } } }}
                  href="#about" className="bg-white hover:bg-slate-200 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-transform active:scale-95 inline-flex items-center justify-center gap-2">
                  Let's Go <PaperPlaneRight weight="bold" />
                </motion.a>
                <div className="flex gap-3">
                  <motion.a 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } } }}
                    href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-accent hover:border-accent/50 text-slate-300 p-3.5 rounded-full transition-all active:scale-95 flex items-center justify-center">
                    <LinkedinLogo size={24} weight="fill" />
                  </motion.a>
                  <motion.a 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } } }}
                    href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-accent hover:border-accent/50 text-slate-300 p-3.5 rounded-full transition-all active:scale-95 flex items-center justify-center">
                    <InstagramLogo size={24} weight="fill" />
                  </motion.a>
                  <motion.a 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } } }}
                    href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-accent hover:border-accent/50 text-slate-300 p-3.5 rounded-full transition-all active:scale-95 flex items-center justify-center">
                    <GithubLogo size={24} weight="fill" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ y: heroY, scale: heroScale }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="w-64 h-64 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-slate-800/50 relative z-10 shadow-2xl">
              <img src="/profile.jpg.jpeg" alt="Di Muhammad Zulfa Ridha" className="w-full h-full object-cover grayscale-0 md:grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl flex items-center gap-2 z-20 shadow-xl">
              <MapPin className="text-accent" weight="fill" />
              <span className="text-xs font-semibold text-slate-200">Banda Aceh, ID</span>
            </div>
          </motion.div>
        </section>

        {/* Core Stack Marquee (Full width, above Bento Grid) */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-10 mb-8 overflow-hidden w-full relative flex group items-center z-10"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-16 items-center text-slate-500 shrink-0 pr-16 w-max"
          >
            <FigmaLogo size={48} className="hover:text-white transition-colors" />
            <Database size={48} className="hover:text-white transition-colors" />
            <Browser size={48} className="hover:text-white transition-colors" />
            <DeviceMobile size={48} className="hover:text-white transition-colors" />
            <Globe size={48} className="hover:text-white transition-colors" />
            <CodeBlock size={48} className="hover:text-white transition-colors" />
            <div className="text-2xl font-bold font-sans">REACT</div>
            <div className="text-2xl font-bold font-sans">TAILWIND</div>
            <div className="text-2xl font-bold font-sans">VITE</div>
            {/* Duplicate for seamless looping */}
            <FigmaLogo size={48} className="hover:text-white transition-colors" />
            <Database size={48} className="hover:text-white transition-colors" />
            <Browser size={48} className="hover:text-white transition-colors" />
            <DeviceMobile size={48} className="hover:text-white transition-colors" />
            <Globe size={48} className="hover:text-white transition-colors" />
            <CodeBlock size={48} className="hover:text-white transition-colors" />
            <div className="text-2xl font-bold font-sans">REACT</div>
            <div className="text-2xl font-bold font-sans">TAILWIND</div>
            <div className="text-2xl font-bold font-sans">VITE</div>
          </motion.div>
        </motion.div>


        {/* Bento Grid - Responsive Layout */}
        <div className="relative z-10">
          {isMobile ? (
            <div className="flex flex-col gap-6">
              {/* Mobile Order: About -> Education -> Experience -> Showcase */}
              <div id="about" className="scroll-mt-32">
                <BentoCard delay={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <FileCode size={24} className="text-white" />
                    <h2 className="text-xl font-bold text-white">About Me</h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
                    Hi! I'm a fresh graduate in Computer Engineering from Syiah Kuala University who enjoys turning ideas into useful digital solutions. My interests include Internet of Things (IoT), Machine Learning, Software Development, and UI/UX Design. I also enjoy graphic design and digital content creation, which help me build products that are both functional and visually engaging. I'm always eager to learn new things, explore new technologies, take on new challenges, and continue growing while creating digital products that are simple, functional, enjoyable to use, and make a real impact.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
                  <div className="text-2xl font-black text-white mb-1">2+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
                  <div className="text-2xl font-black text-white mb-1">15+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Projects Completed</div>
                </div>
              </div> */}
                </BentoCard>
              </div>
              {educationContent}
              {experienceContent}
              <div id="showcase" className="scroll-mt-32">
                {showcaseContent}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column (About Me, Education, Showcase) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div id="about" className="scroll-mt-32">
                  <BentoCard delay={0.1}>
                    <div className="flex items-center gap-3 mb-6">
                      <FileCode size={24} className="text-white" />
                      <h2 className="text-xl font-bold text-white">About Me</h2>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 text-justify">
                      Hi! I'm a fresh graduate in Computer Engineering from Syiah Kuala University who enjoys turning ideas into useful digital solutions. My interests include Internet of Things (IoT), Machine Learning, Software Development, and UI/UX Design. I also enjoy graphic design and digital content creation, which help me build products that are both functional and visually engaging. I'm always eager to learn new things, explore new technologies, take on new challenges, and continue growing while creating digital products that are simple, functional, enjoyable to use, and make a real impact.
                    </p>
                    {/* <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
                  <div className="text-2xl font-black text-white mb-1">2+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
                  <div className="text-2xl font-black text-white mb-1">15+</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Projects Completed</div>
                </div>
              </div> */}
                  </BentoCard>
                </div>
                {educationContent}
                <div id="showcase" className="scroll-mt-32">
                  {showcaseContent}
                </div>
              </div>

              {/* Right Column (Experience) */}
              <div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">
                {experienceContent}
              </div>
            </div>
          )}
        </div>

        {/* Contact (12) */}
        <div id="contact" className="lg:col-span-12 scroll-mt-32 mt-6">
          <BentoCard delay={0.6} innerClassName="py-6 px-5 md:py-16 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2 md:mb-6 leading-tight">Let's Connect & <span className="text-accent">Collaborate</span></h2>
                <p className="text-slate-400 text-sm mb-4 md:mb-6">Have a project in mind, a collaboration to discuss, or just want to say hello? I'd love to connect and create something meaningful together.</p>
                <a href="mailto:dimzulfaridha@gmail.com" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                  <EnvelopeSimple size={20} /> dimzulfaridha@gmail.com
                </a>
              </div>

              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-600 focus:bg-slate-900 transition-colors w-full"
                />
                <textarea
                  placeholder="Your Message..."
                  rows={3}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-600 focus:bg-slate-900 transition-colors resize-none w-full"
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-white hover:bg-slate-200 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
                >
                  Send Message <PaperPlaneRight weight="bold" />
                </button>
              </form>
            </div>
          </BentoCard>
        </div>

      </div>

      {/* Full Width Footer Section */}
      <div className="w-full mt-12 relative">
        {/* Gradient Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-[#020617] via-slate-700 to-[#020617]"></div>
        {/* Subtle glow/gradient between body and footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-accent/5 blur-[40px] pointer-events-none"></div>
        
        <footer className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-2 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 relative z-10">
          <p>&copy; 2026 Di Muhammad Zulfa Ridha. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-slate-900/50 p-3 rounded-full border border-slate-800/50 hover:border-slate-700"><LinkedinLogo size={24} /></a>
            <a href="https://www.instagram.com/dimzulfar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-slate-900/50 p-3 rounded-full border border-slate-800/50 hover:border-slate-700"><InstagramLogo size={24} /></a>
            <a href="https://github.com/dimzulfaridha" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors bg-slate-900/50 p-3 rounded-full border border-slate-800/50 hover:border-slate-700"><GithubLogo size={24} /></a>
          </div>
        </footer>
      </div>

      {/* Floating Chat Bubble */}
      {/* <button className="fixed bottom-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 text-slate-950 hover:scale-105 transition-transform z-50">
        <ChatCircle size={24} weight="fill" />
      </button> */}

      {/* Detail Modal / Side Panel */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-slate-900 border-l border-slate-800 shadow-2xl z-[70] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-start sticky top-0 bg-slate-900/90 backdrop-blur-md z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">{selectedItem.title}</h2>
                  <Badge variant="accent" className="text-xs">{selectedItem.type}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 space-y-5">
                {/* Image */}
                <div className="w-full h-48 sm:h-64 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {selectedItem.image ? (
                    <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                  ) : (
                    selectedItem.icon
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-accent font-bold mb-2 text-lg">Description</h3>
                  <div className="space-y-3">
                    {selectedItem.description.map((desc, i) => (
                      <p key={i} className="text-slate-300 text-sm leading-relaxed text-justify">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Metadata */}
                <div>
                  <h3 className="text-accent font-bold mb-2 text-lg">
                    {selectedItem.type === 'project' ? 'Tech Stack' : 'Issuing Institution'}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">
                    {selectedItem.type === 'project' ? selectedItem.techStack : selectedItem.institution}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 mt-auto sticky bottom-0 bg-slate-900/90 backdrop-blur-md flex flex-col sm:flex-row gap-3">
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:flex-1 bg-accent hover:bg-accent/90 text-slate-950 font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
                  >
                    <Link size={18} weight="bold" />
                    {selectedItem.type === 'project' ? 'View Project' : 'View Credential'}
                  </a>
                )}
                <button
                  onClick={() => setSelectedItem(null)}
                  className={`w-full ${selectedItem.link ? 'sm:flex-1' : ''} bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium py-2.5 rounded-full flex items-center justify-center transition-colors active:scale-[0.98]`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
