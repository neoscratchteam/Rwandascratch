import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectStickyStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const activeProject = projects[activeIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      {/* Centered Header matches image */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Our Works</h2>
        <p className="text-gray-400 text-lg lg:text-xl font-medium">Discover Our Most Recent Project Highlights</p>
      </div>

      {/* Main Centered Perspective Container */}
      <div className="relative bg-[#212225] rounded-[60px] p-8 md:p-16 lg:p-24 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5 min-h-[600px] md:min-h-[800px] flex flex-col justify-between">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_50%)] opacity-5 pointer-events-none" />

        <div className="relative z-10 w-full h-[350px] md:h-[500px] mb-16 flex items-center justify-center">
            {/* STACKED PERSPECTIVE INNER */}
            <AnimatePresence mode="popLayout" initial={false}>
                {projects.map((project, idx) => {
                    let offset = idx - activeIndex;
                    
                    // Handle wrap-around for a circular display
                    if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
                    if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

                    const isActive = offset === 0;
                    const isSide = Math.abs(offset) === 1;
                    
                    if (!isActive && !isSide) return null;

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ 
                                opacity: 0, 
                                x: offset > 0 ? 500 : -500,
                                scale: 0.6
                            }}
                            animate={{ 
                                opacity: isActive ? 1 : isSide ? 0.35 : 0, 
                                x: offset * (window.innerWidth < 768 ? 160 : 380), 
                                scale: isActive ? 1 : 0.75,
                                filter: `blur(${isActive ? 0 : 8}px)`,
                                zIndex: isActive ? 50 : 30,
                            }}
                            exit={{ 
                                opacity: 0, 
                                x: offset > 0 ? -500 : 500,
                                scale: 0.6
                            }}
                            transition={{ 
                                type: 'spring', 
                                damping: 32, 
                                stiffness: 220,
                                mass: 0.8
                            }}
                            className="absolute w-full max-w-[90%] md:max-w-[75%] aspect-video cursor-pointer"
                            onClick={() => setActiveIndex(idx)}
                        >
                            <div className="w-full h-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                                />
                                {!isActive && <div className="absolute inset-0 bg-black/20" />}
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>

        {/* BOTTOM CONTENT AREA */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 relative z-20">
            {/* Active Info */}
            <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl px-2"
            >
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-sm">{activeProject.title}</h3>
                
                <div className="flex flex-wrap gap-3 mb-12">
                    {activeProject.techStack.map(tag => (
                        <span key={tag} className="px-5 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                            {tag}
                        </span>
                    ))}
                </div>

                <Button asChild size="xl" className="bg-[#fe4b33] hover:bg-[#ff5d47] text-white rounded-3xl px-16 py-9 h-auto border-none shadow-2xl shadow-[#fe4b33]/40 text-xl font-black uppercase tracking-tighter group transition-all duration-300 hover:scale-[1.02] active:scale-95">
                    <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                        View Project <ArrowRight className="w-7 h-7 group-hover:translate-x-1.5 transition-transform" />
                    </a>
                </Button>
            </motion.div>

            {/* Navigation (Bottom Right per Image) */}
            <div className="flex gap-6 pb-2 mr-2">
                <button 
                  onClick={prev}
                  className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-md active:scale-90"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button 
                  onClick={next}
                  className="w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] ring-2 ring-primary/40 hover:scale-105 active:scale-90 transition-all duration-300"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-10 h-10 text-[#fe4b33]" />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}
