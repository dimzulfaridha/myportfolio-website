<div id="showcase" className="scroll-mt-32">
              <BentoCard delay={0.4} className="h-full" innerClassName="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Showcase</h2>
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('projects')} className={`transition-transform active:scale-95 ${activeTab === 'projects' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <Badge variant={activeTab === 'projects' ? 'accent' : 'default'}>Projects</Badge>
          </button>
          <button onClick={() => setActiveTab('certificates')} className={`transition-transform active:scale-95 ${activeTab === 'certificates' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
            <Badge variant={activeTab === 'certificates' ? 'accent' : 'default'}>Certs</Badge>
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
          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
            <div className="h-32 overflow-hidden relative">
              <img src="https://picsum.photos/seed/web/600/400" alt="SIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-sm mb-2 truncate">Sistem Informasi Manajemen</h3>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">React</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
            <div className="h-32 overflow-hidden relative">
              <img src="https://picsum.photos/seed/vision/600/400" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-sm mb-2 truncate">AutiVision App</h3>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Flutter</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
            <div className="h-32 overflow-hidden relative">
              <img src="https://picsum.photos/seed/store/600/400" alt="Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-sm mb-2 truncate">E-Commerce Dashboard</h3>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Next.js</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
            <div className="h-32 overflow-hidden relative">
              <img src="https://picsum.photos/seed/chat/600/400" alt="Chat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-sm mb-2 truncate">Realtime Chat App</h3>
              <div className="flex gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Vue</span>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
        >
          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
            <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Google UX Design Professional</h3>
              <div className="flex gap-1.5 flex-wrap mt-auto">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
            <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <Globe size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Meta Front-End Developer</h3>
              <div className="flex gap-1.5 flex-wrap mt-auto">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
            <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <GraduationCap size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">AWS Certified Cloud Practitioner</h3>
              <div className="flex gap-1.5 flex-wrap mt-auto">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">AWS</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
            <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
              <CodeBlock size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">React (Basic) Certificate</h3>
              <div className="flex gap-1.5 flex-wrap mt-auto">
                <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">HackerRank</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </BentoCard>
            </div>

          import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
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
  EnvelopeSimple
} from '@phosphor-icons/react';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-accent/30 font-sans pb-10">
      
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
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "px-4 top-6 md:top-6" : "px-0 md:px-4 top-0 md:top-8"
        }`}
      >
        <motion.div 
          layout
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className={`flex flex-col w-full transition-colors duration-700 ease-out ${
            scrolled
              ? "max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50 rounded-full" 
              : "max-w-7xl bg-transparent border-transparent rounded-none md:rounded-full"
          }`}
        >
          <div className={`flex justify-between items-center w-full gap-2 ${scrolled ? "px-2 py-2 md:px-6 md:py-3" : "px-2 py-2 md:px-2 md:py-2"}`}>
            <a href="#" className="text-sm md:text-lg font-bold tracking-tighter text-white flex items-center gap-1 md:gap-2 shrink-0 hover:text-accent transition-colors">
              <Sparkle size={14} weight="fill" className="text-accent md:w-[18px] md:h-[18px]" />
              IRSYAN.
            </a>

            {/* Mobile Links - Visible only on Mobile */}
            <div className={`md:hidden flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-semibold text-slate-300 transition-all duration-500`}>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div><div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">
            <BentoCard delay={0.3}>
      <div className="flex items-center gap-3 mb-6">
        <Briefcase size={24} className="text-white" />
        <h2 className="text-xl font-bold text-white">Experience</h2>
      </div>
      
      <div className="space-y-6">
        <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-white">Web Dev Instructor</h3>
            <Badge>2023 - 2024</Badge>
          </div>
          <p className="text-sm font-medium text-accent mb-2">BuildWithAngga</p>
          <p className="text-xs text-slate-400">Mentored 50+ students in modern React and Tailwind CSS development.</p>
        </div>
        
        <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
          <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold text-white">Frontend Intern</h3>
            <Badge>2023</Badge>
          </div>
          <p className="text-sm font-medium text-accent mb-2">Tech Startup XYZ</p>
          <p className="text-xs text-slate-400">Developed user interfaces for an e-commerce dashboard.</p>
        </div>
      </div>
    </BentoCard>
          </div><div id="showcase" className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">
            
            <BentoCard delay={0.4} className="h-full" innerClassName="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Showcase</h2>
                <div className="flex gap-2">
                  <button onClick={() => setActiveTab('projects')} className={`transition-transform active:scale-95 ${activeTab === 'projects' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                    <Badge variant={activeTab === 'projects' ? 'accent' : 'default'}>Projects</Badge>
                  </button>
                  <button onClick={() => setActiveTab('certificates')} className={`transition-transform active:scale-95 ${activeTab === 'certificates' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}>
                    <Badge variant={activeTab === 'certificates' ? 'accent' : 'default'}>Certs</Badge>
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
                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
                    <div className="h-32 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/web/600/400" alt="SIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-sm mb-2 truncate">Sistem Informasi Manajemen</h3>
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">React</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
                    <div className="h-32 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/vision/600/400" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-sm mb-2 truncate">AutiVision App</h3>
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Flutter</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
                    <div className="h-32 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/store/600/400" alt="Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-sm mb-2 truncate">E-Commerce Dashboard</h3>
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Next.js</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
                    <div className="h-32 overflow-hidden relative">
                      <img src="https://picsum.photos/seed/chat/600/400" alt="Chat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-sm mb-2 truncate">Realtime Chat App</h3>
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Vue</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
                >
                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
                    <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
                      <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Google UX Design Professional</h3>
                      <div className="flex gap-1.5 flex-wrap mt-auto">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
                    <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
                      <Globe size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Meta Front-End Developer</h3>
                      <div className="flex gap-1.5 flex-wrap mt-auto">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
                    <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
                      <GraduationCap size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">AWS Certified Cloud Practitioner</h3>
                      <div className="flex gap-1.5 flex-wrap mt-auto">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">AWS</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
                    <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
                      <CodeBlock size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">React (Basic) Certificate</h3>
                      <div className="flex gap-1.5 flex-wrap mt-auto">
                        <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">HackerRank</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </BentoCard>

          </div>

          {/* Contact (12) */}
          <div id="contact" className="lg:col-span-12 scroll-mt-32">
            <BentoCard delay={0.6}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-black text-white mb-4">Let's build something <span className="text-accent">together.</span></h2>
                  <p className="text-slate-400 text-sm mb-6">Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.</p>
                  <a href="mailto:hello@irsyan.com" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
                    <EnvelopeSimple size={20} /> hello@irsyan.com
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

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 pb-10">
          <p>&copy; 2026 Irsyan Ramadhan. Built with React & Tailwind.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><GithubLogo size={16} /></a>
            <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><LinkedinLogo size={16} /></a>
            <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><InstagramLogo size={16} /></a>
          </div>
        </footer>

      </div>
      
      {/* Floating Chat Bubble */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 text-slate-950 hover:scale-105 transition-transform z-50">
        <ChatCircle size={24} weight="fill" />
      </button>

    </div>
  );
}

export default App;
