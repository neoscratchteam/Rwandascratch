import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Users, Lightbulb, ArrowRight, Star, Globe, Heart, Palette, Network, Database, Cloud, Megaphone, Monitor } from 'lucide-react';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';
import heroBackground from '@/assets/hero-bg.jpg';



const Index = () => {
  // Counter animations for stats
  const projectsCount = useCountUpAnimation({ end: 6, suffix: '+' });
  const studentsCount = useCountUpAnimation({ end: 32, suffix: '+' });
  const clientsCount = useCountUpAnimation({ end: 20, suffix: '+' });
  const experienceCount = useCountUpAnimation({ end: 3, suffix: '+' });

  return (
    <div className="min-h-screen">

      
    {/* Hero Section */}
    <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
          Take Your Business <span className="block text-gradient">Digital & Beyond</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up leading-relaxed">
          Welcome to NeoScratch — your partner in transforming ideas into smart, scalable, and cutting-edge tech solutions. From innovative software to professional design and digital marketing, we help businesses thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-full px-8 shadow-sm hover:shadow-md transition-all" asChild>
            <Link to="/request-website">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="xl" className="rounded-full px-8 border-border hover:bg-secondary transition-all" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>


      {/* Features Section */}
      <section className="py-20" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              What We Do
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive tech solutions to drive digital transformation in Rwanda and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Build modern, responsive websites and web apps.' },
              { icon: Smartphone, title: 'Mobile Apps', desc: 'Create cross-platform mobile solutions ' },
              { icon: Code, title: 'Programming Education', desc: 'Teach coding through hands-on bootcamps.' },
              { icon: Palette, title: 'Graphic Design', desc: 'Design stunning UI/UX and branding assets.' },
              { icon: Network, title: 'Networking Solutions', desc: 'Implement secure, scalable network systems.' },
              { icon: Database, title: 'Software Installations', desc: 'Deploy and configure software for businesses.' },
              { icon: Lightbulb, title: 'Tech Consulting', desc: 'Provide strategic guidance for tech projects.' },
              { icon: Cloud, title: 'Cloud Integration', desc: 'Integrate cloud solutions for efficiency.' },
              { icon: Megaphone, title: 'Digital Marketing', desc: 'Boost online presence with SEO and campaigns.' },
              { icon: Monitor, title: 'Computer Skills Training', desc: 'Teach essential digital literacy skills.' },
            ].map((service, index) => (
              <div
                key={service.title}
                className="text-center p-6 rounded-2xl bg-gradient-card hover-lift"
                data-aos="flip-left"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div 
              ref={projectsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-4xl font-bold text-primary mb-2">{projectsCount.count}</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div 
              ref={studentsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-4xl font-bold text-primary mb-2">{studentsCount.count}</div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div 
              ref={clientsCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="text-4xl font-bold text-primary mb-2">{clientsCount.count}</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div 
              ref={experienceCount.elementRef}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="text-4xl font-bold text-primary mb-2">{experienceCount.count}</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Wavy Section */}
      <section className="py-24 bg-background border-t border-border/50">
        <TestimonialSlider />
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 relative overflow-hidden bg-background"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Start Your Project?
          </h2>
          <p 
            className="text-xl text-muted-foreground mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact us at customerservice@neoscratch.com or +250 792 734 752 to bring your tech vision to life with NeoScratch’s expanded services.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/request-website">Get Started</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;