import React, { useState } from 'react';
import { Code, Users, Heart, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const positions = [
  {
    title: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Kigali, Rwanda',
    description: 'Join our team to build innovative web applications using modern technologies.',
    requirements: ['3+ years experience', 'React & Node.js', 'Database knowledge', 'Team collaboration'],
  },
  {
    title: 'Mobile App Developer',
    type: 'Full-time',
    location: 'Kigali, Rwanda',
    description: 'Develop cross-platform mobile applications using Flutter and React Native.',
    requirements: ['2+ years experience', 'Flutter or React Native', 'App Store deployment', 'UI/UX awareness'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    location: 'Kigali, Rwanda',
    description: 'Create beautiful and intuitive user experiences for our digital products.',
    requirements: ['Portfolio of work', 'Figma proficiency', 'User research skills', 'Design systems'],
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Kigali, Rwanda',
    description: 'Manage our infrastructure and deployment pipelines.',
    requirements: ['AWS/Azure knowledge', 'Docker & Kubernetes', 'CI/CD experience', 'Security awareness'],
  },
];

const applicationTypes = [
  'Developer Position',
  'Internship Program',
  'Volunteer Opportunity',
  'Partnership Proposal',
  'Other',
];

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    motivation: '',
    availability: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest! We'll review your application and get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      portfolio: '',
      motivation: '',
      availability: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Be part of Rwanda's leading tech innovation company and help us build the future of technology in Africa.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Join NeoScratch?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a passionate team that's making a real impact in the African tech ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-card hover-lift animate-fade-in">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cutting-edge Technology</h3>
              <p className="text-muted-foreground">
                Work with the latest technologies and tools while building innovative solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-card hover-lift animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Amazing Team</h3>
              <p className="text-muted-foreground">
                Collaborate with talented individuals who share your passion for technology.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-card hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Meaningful Impact</h3>
              <p className="text-muted-foreground">
                Your work will directly contribute to empowering African communities through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={position.title}
                className="bg-gradient-card p-6 rounded-2xl shadow-lg hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {position.type}
                      </span>
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                        {position.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full">Apply Now</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Apply to Join Us</h2>
            <p className="text-xl text-muted-foreground">
              Tell us about yourself and why you'd like to join our team.
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+250 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Position/Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select your interest</option>
                    {applicationTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2">
                  Experience & Skills *
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us about your relevant experience, skills, and technologies you're familiar with..."
                  required
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-medium mb-2">
                  Portfolio/Resume Link
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://your-portfolio.com or Google Drive link"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium mb-2">
                  Why do you want to join NeoScratch? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Share your motivation and what you hope to achieve with us..."
                  required
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium mb-2">
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="When can you start? (e.g., Immediately, 2 weeks notice, etc.)"
                />
              </div>

              <div className="text-center">
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}