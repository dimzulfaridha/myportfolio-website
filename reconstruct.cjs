const fs = require('fs');

const rawContent = `
150:   EnvelopeSimple
151: } from '@phosphor-icons/react';
152: 
153: function App() {
154:   const [activeTab, setActiveTab] = useState('projects');
155:   const [scrolled, setScrolled] = useState(false);
156:   const [isMobile, setIsMobile] = useState(false);
157: 
158:   // Global Cursor Animation using performant motion values (bypasses React state)
159:   const cursorX = useMotionValue(-100);
160:   const cursorY = useMotionValue(-100);
161:   
162:   const springConfigSlow = { damping: 20, stiffness: 150, mass: 0.8 };
163:   const cursorXSpringSlow = useSpring(cursorX, springConfigSlow);
164:   const cursorYSpringSlow = useSpring(cursorY, springConfigSlow);
165: 
166:   useEffect(() => {
167:     const handleScroll = () => setScrolled(window.scrollY > 50);
168:     const handleResize = () => setIsMobile(window.innerWidth < 1024);
169:     
170:     handleResize();
171:     window.addEventListener('scroll', handleScroll);
172:     window.addEventListener('resize', handleResize);
173:     
174:     return () => {
175:       window.removeEventListener('scroll', handleScroll);
176:       window.removeEventListener('resize', handleResize);
177:     };
178:   }, []);
179: 
180:   useEffect(() => {
181:     const moveCursor = (e) => {
182:       cursorX.set(e.clientX);
183:       cursorY.set(e.clientY);
184:     };
185:     window.addEventListener('mousemove', moveCursor);
186:     return () => window.removeEventListener('mousemove', moveCursor);
187:   }, [cursorX, cursorY]);
188: 
189:   // Parallax Scroll Effect for Hero Section
190:   const { scrollY } = useScroll();
191:   const heroY = useTransform(scrollY, [0, 500], [0, 150]);
192:   const heroScale = useTransform(scrollY, [0, 500], [1, 0.9]);
193: 
194:   const experienceContent = (
195:     
196:   );
197: 
198:   const showcaseContent = (
199:     <BentoCard delay={0.4} className="h-full" innerClassName="flex flex-col h-full">
200:       <div className="flex justify-between items-center mb-6">
201:         <h2 className="text-xl font-bold text-white">Showcase</h2>
202:         <div className="flex gap-2">
203:           <button onClick={() => setActiveTab('projects')} className={\`transition-transform active:scale-95 \${activeTab === 'projects' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}\`}>
204:             <Badge variant={activeTab === 'projects' ? 'accent' : 'default'}>Projects</Badge>
205:           </button>
206:           <button onClick={() => setActiveTab('certificates')} className={\`transition-transform active:scale-95 \${activeTab === 'certificates' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}\`}>
207:             <Badge variant={activeTab === 'certificates' ? 'accent' : 'default'}>Certs</Badge>
208:           </button>
209:         </div>
210:       </div>
211:       
212:       {activeTab === 'projects' ? (
213:         <motion.div 
214:           initial={{ opacity: 0, y: 10 }}
215:           animate={{ opacity: 1, y: 0 }}
216:           transition={{ duration: 0.4 }}
217:           className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
218:         >
219:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
220:             <div className="h-32 overflow-hidden relative">
221:               <img src="https://picsum.photos/seed/web/600/400" alt="SIM" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
222:             </div>
223:             <div className="p-4">
224:               <h3 className="font-bold text-white text-sm mb-2 truncate">Sistem Informasi Manajemen</h3>
225:               <div className="flex gap-1.5 flex-wrap">
226:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">React</span>
227:               </div>
228:             </div>
229:           </div>
230: 
231:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
232:             <div className="h-32 overflow-hidden relative">
233:               <img src="https://picsum.photos/seed/vision/600/400" alt="Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
234:             </div>
235:             <div className="p-4">
236:               <h3 className="font-bold text-white text-sm mb-2 truncate">AutiVision App</h3>
237:               <div className="flex gap-1.5 flex-wrap">
238:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Flutter</span>
239:               </div>
240:             </div>
241:           </div>
242: 
243:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
244:             <div className="h-32 overflow-hidden relative">
245:               <img src="https://picsum.photos/seed/store/600/400" alt="Store" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
246:             </div>
247:             <div className="p-4">
248:               <h3 className="font-bold text-white text-sm mb-2 truncate">E-Commerce Dashboard</h3>
249:               <div className="flex gap-1.5 flex-wrap">
250:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Next.js</span>
251:               </div>
252:             </div>
253:           </div>
254: 
255:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors">
256:             <div className="h-32 overflow-hidden relative">
257:               <img src="https://picsum.photos/seed/chat/600/400" alt="Chat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
258:             </div>
259:             <div className="p-4">
260:               <h3 className="font-bold text-white text-sm mb-2 truncate">Realtime Chat App</h3>
261:               <div className="flex gap-1.5 flex-wrap">
262:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Vue</span>
263:               </div>
264:             </div>
265:           </div>
266:         </motion.div>
267:       ) : (
268:         <motion.div 
269:           initial={{ opacity: 0, y: 10 }}
270:           animate={{ opacity: 1, y: 0 }}
271:           transition={{ duration: 0.4 }}
272:           className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1"
273:         >
274:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
275:             <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
276:               <Sparkle size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
277:             </div>
278:             <div className="p-4 flex-1 flex flex-col justify-between">
279:               <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Google UX Design Professional</h3>
280:               <div className="flex gap-1.5 flex-wrap mt-auto">
281:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
282:               </div>
283:             </div>
284:           </div>
285:           
286:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
287:             <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
288:               <Globe size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
289:             </div>
290:             <div className="p-4 flex-1 flex flex-col justify-between">
291:               <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">Meta Front-End Developer</h3>
292:               <div className="flex gap-1.5 flex-wrap mt-auto">
293:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">Coursera</span>
294:               </div>
295:             </div>
296:           </div>
297: 
298:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
299:             <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
300:               <GraduationCap size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
301:             </div>
302:             <div className="p-4 flex-1 flex flex-col justify-between">
303:               <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">AWS Certified Cloud Practitioner</h3>
304:               <div className="flex gap-1.5 flex-wrap mt-auto">
305:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">AWS</span>
306:               </div>
307:             </div>
308:           </div>
309: 
310:           <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-slate-700 transition-colors flex flex-col">
311:             <div className="h-32 overflow-hidden relative bg-slate-800/50 flex items-center justify-center">
312:               <CodeBlock size={32} className="text-slate-600 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
313:             </div>
314:             <div className="p-4 flex-1 flex flex-col justify-between">
315:               <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">React (Basic) Certificate</h3>
316:               <div className="flex gap-1.5 flex-wrap mt-auto">
317:                 <span className="text-[10px] uppercase tracking-wider bg-slate-800 text-slate-300 px-2 py-1 rounded-sm">HackerRank</span>
318:               </div>
319:             </div>
320:           </div>
321:         </motion.div>
322:       )}
323:     </BentoCard>
324:   );
325: 
326:   return (
327:     <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-accent/30 font-sans pb-10">
328:       
329:       {/* Global Subtle Light Flare Cursor */}
330:       <motion.div
331:         className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-screen"
332:         style={{
333:           background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(56, 189, 248, 0) 70%)',
334:           x: cursorXSpringSlow,
335:           y: cursorYSpringSlow,
336:           translateX: "-50%",
337:           translateY: "-50%"
338:         }}
339:       />
340: 
341:       {/* Background ambient glow */}
342:       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
343:         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]"></div>
344:         <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>
345:       </div>
346: 
347:       {/* Floating Navigation */}
348:       <motion.nav 
349:         className={\`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 \${
350:           scrolled ? "top-6 md:top-6" : "top-6 md:top-8"
351:         }\`}
352:       >
353:         <motion.div 
354:           layout
355:           transition={{ type: "spring", stiffness: 200, damping: 25 }}
356:           className={\`flex flex-col w-full transition-colors duration-700 ease-out \${
357:             scrolled
358:               ? "max-w-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50 rounded-full" 
359:               : "max-w-7xl bg-transparent border-transparent rounded-none md:rounded-full"
360:           }\`}
361:         >
362:           <div className={\`flex justify-between items-center w-full gap-2 \${scrolled ? "px-2 py-2 md:px-6 md:py-3" : "px-2 py-2 md:px-2 md:py-2"}\`}>
363:             <a href="#" className="text-sm md:text-lg font-bold tracking-tighter text-white flex items-center gap-1 md:gap-2 shrink-0 hover:text-accent transition-colors">
364:               <Sparkle size={14} weight="fill" className="text-accent md:w-[18px] md:h-[18px]" />
365:               IRSYAN.
366:             </a>
367: 
368:             {/* Mobile Links - Visible only on Mobile */}
369:             <div className={\`md:hidden flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-semibold text-slate-300 transition-all duration-500\`}>
370:               <a href="#about" className="hover:text-white transition-colors">About</a>
371:               <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
372:               <a href="#contact" className="hover:text-white transition-colors">Contact</a>
373:             </div>
374: 
375:             <div className="flex items-center shrink-0">
376:               <button className="bg-white hover:bg-slate-200 text-slate-950 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold transition-all active:scale-95 shadow-sm whitespace-nowrap">
377:                 Download CV
378:               </button>
379:             </div>
380:           </div>
381:         </motion.div>
382:       </motion.nav>
383: 
384:       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-28">
385:         
386:         {/* Hero Section */}
387:         <section className="min-h-[calc(100vh-140px)] pb-40 md:pb-12 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12 relative mb-12">
388:           <motion.div 
389:             className="flex-1 text-left"
390:             style={{ y: heroY }}
391:           >
392:             <motion.div 
393:               initial={{ opacity: 0, y: 20 }}
394:               animate={{ opacity: 1, y: 0 }}
395:               transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
396:             >
397:               <Badge variant="primary" className="mb-3 md:mb-6 inline-flex"><Sparkle size={14} className="mr-1" /> Available for work</Badge>
398:               <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
399:                 Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Irsyan.</span><br/>
400:                 I build digital <br/>
401:                 <span className="text-accent">experiences.</span>
402:               </h1>
403:               <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
404:                 A passionate Frontend Developer specializing in creating interactive, user-centric, and high-performance web applications.
405:               </p>
406:               <div className="flex gap-4">
407:                 <a href="#showcase" className="bg-white hover:bg-slate-200 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-transform active:scale-95 inline-flex items-center justify-center gap-2">
408:                   Let's Go <PaperPlaneRight weight="bold" />
409:                 </a>
410:                 <button className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-medium px-8 py-3.5 rounded-full transition-all active:scale-95">
411:                   Download CV
412:                 </button>
413:               </div>
414:             </motion.div>
415:           </motion.div>
416: 
417:           <motion.div 
418:             initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
419:             animate={{ opacity: 1, scale: 1, rotate: 0 }}
420:             transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
421:             style={{ y: heroY, scale: heroScale }}
422:             className="flex-shrink-0 relative group"
423:           >
424:             <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
425:             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800/50 relative z-10 shadow-2xl">
426:               <img src="https://picsum.photos/id/1005/800/800" alt="Irsyan Ramadhan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
427:             </div>
428:             <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-800 px-4 py-2 rounded-2xl flex items-center gap-2 z-20 shadow-xl">
429:               <MapPin className="text-accent" weight="fill" />
430:               <span className="text-xs font-semibold text-slate-200">Jakarta, ID</span>
431:             </div>
432:           </motion.div>
433:         </section>
434: 
435:         {/* Core Stack Marquee (Full width, above Bento Grid) */}
436:         <motion.div 
437:           initial={{ opacity: 0, filter: 'blur(10px)' }}
438:           whileInView={{ opacity: 1, filter: 'blur(0px)' }}
439:           viewport={{ once: true, margin: "-100px" }}
440:           transition={{ duration: 0.8 }}
441:           className="py-10 mb-8 overflow-hidden w-full relative flex group items-center z-10"
442:         >
443:           <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
444:           <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
445:           
446:           <motion.div 
447:             animate={{ x: ["0%", "-50%"] }}
448:             transition={{ ease: "linear", duration: 25, repeat: Infinity }}
449:             className="flex gap-16 items-center text-slate-500 shrink-0 pr-16 w-max"
450:           >
451:             <FigmaLogo size={48} className="hover:text-white transition-colors" />
452:             <Database size={48} className="hover:text-white transition-colors" />
453:             <Browser size={48} className="hover:text-white transition-colors" />
454:             <DeviceMobile size={48} className="hover:text-white transition-colors" />
455:             <Globe size={48} className="hover:text-white transition-colors" />
456:             <CodeBlock size={48} className="hover:text-white transition-colors" />
457:             <div className="text-2xl font-bold font-sans">REACT</div>
458:             <div className="text-2xl font-bold font-sans">TAILWIND</div>
459:             <div className="text-2xl font-bold font-sans">VITE</div>
460:             {/* Duplicate for seamless looping */}
461:             <FigmaLogo size={48} className="hover:text-white transition-colors" />
462:             <Database size={48} className="hover:text-white transition-colors" />
463:             <Browser size={48} className="hover:text-white transition-colors" />
464:             <DeviceMobile size={48} className="hover:text-white transition-colors" />
465:             <Globe size={48} className="hover:text-white transition-colors" />
466:             <CodeBlock size={48} className="hover:text-white transition-colors" />
467:             <div className="text-2xl font-bold font-sans">REACT</div>
468:             <div className="text-2xl font-bold font-sans">TAILWIND</div>
469:             <div className="text-2xl font-bold font-sans">VITE</div>
470:           </motion.div>
471:         </motion.div>
472: 
473:         {/* Bento Grid - 2 Column Layout */}
474:         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
475:           
476:           {/* Left Column (About Me, Education, Showcase) */}
477:           <div className="lg:col-span-6 flex flex-col gap-6">
478:             
479:             <div id="about" className="scroll-mt-32">
480:               <BentoCard delay={0.1}>
481:                 <div className="flex items-center gap-3 mb-6">
482:                   <FileCode size={24} className="text-accent" />
483:                   <h2 className="text-xl font-bold text-white">About Me</h2>
484:               </div>
485:               <p className="text-slate-400 text-sm leading-relaxed mb-6">
486:                 I am an Informatics student at UIN Sunan Gunung Djati Bandung with a strong focus on Frontend Development. I enjoy transforming complex problems into elegant, intuitive, and performant digital solutions. When I'm not coding, I'm exploring the latest design trends and web technologies.
487:               </p>
488:               <div className="grid grid-cols-2 gap-4">
489:                 <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
490:                   <div className="text-2xl font-black text-white mb-1">2+</div>
491:                   <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</div>
492:                 </div>
493:                 <div className="bg-slate-900/50 border border-slate-800/50 p-4 rounded-xl">
494:                   <div className="text-2xl font-black text-white mb-1">15+</div>
495:                   <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Projects Completed</div>
496:                 </div>
497:               </div>
498:             </BentoCard>
499:             </div>
500: 
501:             <BentoCard delay={0.2}>
502:               <div className="flex items-center gap-3 mb-6">
503:                 <GraduationCap size={24} className="text-white" />
504:                 <h2 className="text-xl font-bold text-white">Education</h2>
505:               </div>
506:               
507:               <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800/50 relative overflow-hidden group">
508:                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
509:                 <h3 className="font-bold text-white text-lg mb-1 relative z-10">UIN Sunan Gunung Djati</h3>
510:                 <p className="text-sm text-accent mb-4 relative z-10">Informatics Engineering</p>
511:                 <p className="text-xs text-slate-400 relative z-10">Currently in my final year, focusing on software engineering and human-computer interaction.</p>
512:               </div>
513:             </BentoCard>
514: 
515:             <div id="showcase" className="scroll-mt-32">
516:               {showcaseContent}
517:             </div>
518: 
519:           </div>
520: 
521:           {/* Right Column (Experience) */}
522:           <div className="lg:col-span-6 flex flex-col gap-6 scroll-mt-32">
523:             <BentoCard delay={0.3}>
524:               <div className="flex items-center gap-3 mb-6">
525:                 <Briefcase size={24} className="text-white" />
526:                 <h2 className="text-xl font-bold text-white">Experience</h2>
527:               </div>
528:               
529:               <div className="space-y-6">
530:                 <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
531:                   <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
532:                   <div className="flex justify-between items-start mb-1">
533:                     <h3 className="font-bold text-white">Web Dev Instructor</h3>
534:                     <Badge>2023 - 2024</Badge>
535:                   </div>
536:                   <p className="text-sm font-medium text-accent mb-2">BuildWithAngga</p>
537:                   <p className="text-xs text-slate-400">Mentored 50+ students in modern React and Tailwind CSS development.</p>
538:                 </div>
539:                 
540:                 <div className="relative pl-6 before:content-[''] before:absolute before:left-1.5 before:top-2 before:bottom-[-24px] before:w-px before:bg-slate-800 last:before:hidden">
541:                   <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-950"></div>
542:                   <div className="flex justify-between items-start mb-1">
543:                     <h3 className="font-bold text-white">Frontend Intern</h3>
544:                     <Badge>2023</Badge>
545:                   </div>
546:                   <p className="text-sm font-medium text-accent mb-2">Tech Startup XYZ</p>
547:                   <p className="text-xs text-slate-400">Developed user interfaces for an e-commerce dashboard.</p>
548:                 </div>
549:               </div>
550:             </BentoCard>
551:           </div>
552: 
553:           {/* Contact (12) */}
554:           <div id="contact" className="lg:col-span-12 scroll-mt-32">
555:             <BentoCard delay={0.6}>
556:               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
557:                 <div>
558:                   <h2 className="text-3xl font-black text-white mb-4">Let's build something <span className="text-accent">together.</span></h2>
559:                   <p className="text-slate-400 text-sm mb-6">Feel free to reach out if you're looking for a developer, have a question, or simply want to connect.</p>
560:                   <a href="mailto:hello@irsyan.com" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent transition-colors">
561:                     <EnvelopeSimple size={20} /> hello@irsyan.com
562:                   </a>
563:                 </div>
564:                 
565:                 <form className="flex flex-col gap-3">
566:                   <input 
567:                     type="email" 
568:                     placeholder="name@email.com" 
569:                     className="bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-600 focus:bg-slate-900 transition-colors w-full"
570:                   />
571:                   <textarea 
572:                     placeholder="Your Message..." 
573:                     rows={3}
574:                     className="bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-600 focus:bg-slate-900 transition-colors resize-none w-full"
575:                   ></textarea>
576:                   <button 
577:                     type="button" 
578:                     className="w-full bg-white hover:bg-slate-200 text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors active:scale-[0.98]"
579:                   >
580:                     Send Message <PaperPlaneRight weight="bold" />
581:                   </button>
582:                 </form>
583:               </div>
584:             </BentoCard>
585:           </div>
586: 
587:         </div>
588: 
589:         {/* Footer */}
590:         <footer className="mt-20 pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 pb-10">
591:           <p>&copy; 2026 Irsyan Ramadhan. Built with React & Tailwind.</p>
592:           <div className="flex gap-4">
593:             <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><GithubLogo size={16} /></a>
594:             <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><LinkedinLogo size={16} /></a>
595:             <a href="#" className="hover:text-white transition-colors bg-slate-900/50 p-2 rounded-full border border-slate-800/50 hover:border-slate-700"><InstagramLogo size={16} /></a>
596:           </div>
597:         </footer>
598: 
599:       </div>
600:       
601:       {/* Floating Chat Bubble */}
602:       <button className="fixed bottom-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 text-slate-950 hover:scale-105 transition-transform z-50">
603:         <ChatCircle size={24} weight="fill" />
604:       </button>
605: 
606:     </div>
607:   );
608: }
609: 
610: export default App;
`

const lines = rawContent.split('\n');
let codeLines = [];
for (let l of lines) {
    const match = l.match(/^\d+: (.*)$/);
    if (match) {
        codeLines.push(match[1]);
    }
}
const reconstructedCode = codeLines.join('\n');

const currentApp = fs.readFileSync('src/App.jsx', 'utf8');
const beforeCode = currentApp.substring(0, currentApp.indexOf("  EnvelopeSimple\n} from '@phosphor-icons/react';"));
const fullApp = beforeCode + reconstructedCode + '\n';

fs.writeFileSync('src/App.jsx', fullApp);
console.log('Restored App.jsx with proper layout!');
