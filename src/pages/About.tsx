import React from 'react';
import { Target, Eye, Heart, Users, Award, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import aboutBg from '@/assets/about-bg.jpg';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We create cutting-edge software and design solutions to address real-world challenges in Rwanda and beyond.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Fostering collaboration and empowering Rwanda’s tech ecosystem through education and partnerships.',
  },
  {
    icon: Heart,
    title: 'Impact',
    description: 'Our work drives positive change by delivering accessible and impactful tech solutions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver high-quality software, designs, and networking services with precision and care.',
  },
];

const aboutData = {
  story: `
    <strong>NeoScratch</strong> is a Rwanda-based <strong>software development and open-source technology company</strong> focused on building <strong>modern, scalable, and high-performance digital solutions</strong> for businesses, startups, and institutions across Rwanda and Africa.
    <br/><br/>
    We design and develop a wide range of <strong>custom web and mobile applications</strong>, advanced business automation tools, business analytics platforms, and open-source systems that help organizations <strong>innovate, scale efficiently, and gain real-time insights</strong>.
    <br/><br/>
    NeoScratch combines <strong>modern technologies</strong> with a deep passion for digital transformation, delivering state-of-the-art systems that solve modern challenges in the digital era.
  `,
  mission: `
    To empower businesses and individuals in Rwanda and across Africa with <strong>reliable, intelligent, and world-class software solutions</strong> that drive productivity and digital growth in the modern economy.
  `,
  vision: `
    To become a <strong>leading global African software house</strong>, building world-class technology products from Rwanda that set new standards for innovation.
  `,
};




export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">About NeoScratch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            We're a tech company transforming Rwanda and Africa through software development, graphic design, and networking solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div
                className="text-lg text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: aboutData.story }}
              />
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="animate-scale-in">
              <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden glass shadow-xl flex items-center justify-center bg-white p-8">
                <img
                  src="/neoscratch.png"
                  alt="NeoScratch Logo"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <div
                className="text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutData.mission }}
              />
            </div>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg hover-lift animate-fade-in">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <div
                className="text-lg text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: aboutData.vision }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at NeoScratch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-gradient-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-gradient-card p-8 lg:p-12 rounded-2xl shadow-lg border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                <img
                  src="/theodev.png"
                  alt="Théogène Iradukunda"
                  className="w-full h-full rounded-2xl object-cover shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Théogène Iradukunda</h3>
                <p className="text-primary font-semibold text-lg mb-6">Founder & CEO</p>
                <div className="text-lg text-muted-foreground space-y-4">
                  <p>
                    <strong>Théogène Iradukunda</strong> is the <strong>Founder and CEO of NeoScratch</strong>,
                    a software engineer and technology entrepreneur passionate about
                    <strong>open-source innovation and digital transformation in Africa</strong>.
                  </p>
                  <p>
                    He leads NeoScratch’s vision, product development, and technical strategy, with
                    hands-on experience in building <strong>inventory management systems, business analytics platforms,
                      and scalable digital tools</strong>. Under his leadership, NeoScratch has helped multiple
                    businesses improve <strong>stock control, operational efficiency, and financial visibility</strong>
                    through smart software solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/request-website">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/join-us">Join Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}