import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Play, Info, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export function ProjectStickyStack() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedProject]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Works</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experience our portfolio through a dynamic perspective stack. Click any card to explore.
        </p>
      </div>

      <div className="relative pb-24 space-y-[30vh]">
        {projects.map((project, idx) => {
          return (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={idx} 
              total={projects.length}
              onClick={() => setSelectedProject(project)}
            />
          );
        })}
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#1a1b1e] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-black text-white rounded-full transition-all border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-black">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1a1b1e] to-transparent pointer-events-none" />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">
                  {selectedProject.client}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-none">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="mb-10">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-200 text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  {selectedProject.liveDemo && selectedProject.liveDemo !== '#' ? (
                    <Button asChild size="xl" className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-2xl shadow-xl shadow-primary/20 border-none h-14 font-bold text-lg">
                      <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer">
                        Visit Live Build
                      </a>
                    </Button>
                  ) : (
                    <Button disabled size="xl" className="flex-1 bg-white/5 text-gray-500 rounded-2xl border-none h-14">
                       Currently Building
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, index, total, onClick }: { project: any, index: number, total: number, onClick: () => void }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Each card shrinks as its own section scrolls past the top
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8 + (index * 0.05)]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div ref={container} className="h-[100vh] flex items-center justify-center sticky top-0 px-4 sm:px-0">
      <motion.div 
        style={{ 
          scale,
          opacity,
          zIndex: index + 1,
          top: `calc(10% + ${index * 25}px)` 
        }}
        onClick={onClick}
        className="w-full max-w-6xl relative cursor-pointer"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <div className="bg-[#1a1b1e] rounded-[50px] overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row items-stretch h-[500px] lg:h-[600px] group ring-1 ring-white/10 hover:ring-primary/40 transition-all duration-500">
          <div className="w-full md:w-3/5 h-[300px] md:h-auto relative bg-black overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <Button variant="hero" size="lg" className="rounded-full shadow-2xl flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform duration-500">
                   <Info className="w-5 h-5" /> Detailed View
                </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-[#1a1b1e] relative">
             <div className="absolute top-8 right-8 text-white/5 font-black text-6xl select-none group-hover:text-primary/5 transition-colors">0{index + 1}</div>
             <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 z-10">{project.client}</span>
             <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors z-10">{project.title}</h3>
             <p className="text-gray-400 text-lg line-clamp-3 mb-10 z-10">{project.description}</p>
             <div className="flex gap-4 items-center z-10">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </div>
                 <span className="text-sm font-semibold text-white/50 group-hover:text-white transition-colors">Experience Project</span>
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
