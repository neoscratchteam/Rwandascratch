import React from 'react';
import { ExternalLink, Smartphone, Globe, Code, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectsBg from '@/assets/projects-bg.jpg';

const projects = [
  {
    title: 'PixelMart',
    description: 'A smart inventory and stock management system for Mr. Faustina, focused on electronics and LCD products, with real-time inventory tracking and branch management.',
    techStack: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    image: '/pixelmart.png',
    liveDemo: 'https://pixelmartrw.pages.dev',
    category: 'web',
    client: 'Mr. Faustina',
    price: '500,000 RWF',
  },
  {
    title: 'SmartStock',
    description: 'A flexible stock management system developed for Jiridasee’s mixed shop, supporting multiple product categories, sales tracking, and inventory monitoring.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/smartstock.png',
    liveDemo: '#',
    category: 'web',
    client: 'Jiridasee',
    price: '250,000 RWF',
  },
  {
    title: 'Open Future Savings System',
    description: 'A digital record management platform for the Open Future savings group at Apeki Tumba TSS, enabling monthly savings tracking and secure member management.',
    techStack: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    image: '/openfutur.png',
    liveDemo: 'https://openfuture.pages.dev',
    category: 'web',
    client: 'Open Future',
    price: '1,000 RWF (one-time joining fee)',
  },
  {
    title: 'InStore',
    description: 'A retail management system tailored for shops to track products, sales, and customer data efficiently in a digital environment.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/instore.png',
    liveDemo: '#',
    category: 'web',
    client: 'InStore',
    price: 'Custom pricing',
  },
  {
    title: 'StockWise',
    description: 'A stock management system designed for mixed shops to manage inventory, sales, and product categories with a simple and user-friendly interface.',
    techStack: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&h=400&fit=crop',
    liveDemo: '#',
    category: 'web',
    client: 'Mixed Shops',
    price: 'Custom pricing',
  },
  {
    title: 'Dieumerci Portfolio',
    description: 'A portfolio website developed for Dieumerci, showcasing their projects, skills, and company information in a modern, user-friendly design.',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    image: '/dieumerci.png',
    liveDemo: 'https://dieumerci.pages.dev',
    category: 'web',
    client: 'Self / Portfolio',
    price: '50,0000 Rwf',
  },
];

const categories = [
  { id: 'all', name: 'All Projects', icon: Code },
  { id: 'web', name: 'Web Apps', icon: Globe },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Explore NeoScratch's innovative solutions in software development, graphic design, and networking, empowering Rwanda and Africa.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-card rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.category === 'web' ? 'Web App' : 'Mobile App'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="text-sm font-medium mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveDemo && project.liveDemo !== '#' && (
                        <Button variant="default" size="sm" className="flex-1" asChild>
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title} (opens in new tab)`}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Live Demo
                            <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                          </a>
                        </Button>
                      )}
                      {project.liveDemo && project.liveDemo === '#' && (
                        <Button variant="secondary" size="sm" className="flex-1" disabled>
                          <Play className="h-4 w-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Code className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Projects Yet</h3>
              <p className="text-muted-foreground">Stay tuned for more innovative solutions!</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Technologies Used</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Have a Project Idea?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact Theogene at theodevrwanda@gmail.com or +250 792 734 752 to bring your vision to life with NeoScratch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="/request-website">Start Your Project</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}