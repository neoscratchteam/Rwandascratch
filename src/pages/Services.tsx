import React from 'react';
import { Globe, Code, Palette, Lightbulb, Check, Star, ShoppingCart, BookOpen, Heart, Camera, Briefcase ,Users} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import servicesBg from '@/assets/services-bg.jpg';

const services = [
  {
    icon: Globe,
    title: 'Website & App Development',
    description: 'Custom web applications and mobile apps built with modern technologies and best practices.',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready', 'Cross-Platform'],
  },
  {
    icon: Code,
    title: 'Programming Courses',
    description: 'Comprehensive programming education from beginner to advanced levels.',
    features: ['HTML & CSS', 'JavaScript', 'PHP & Laravel', 'React & Node.js'],
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Creative branding solutions and modern UI/UX design for digital products.',
    features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Graphic Design'],
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Tech Coaching',
    description: 'Strategic guidance to help businesses leverage technology for growth.',
    features: ['Tech Strategy', 'Digital Transformation', 'Innovation Workshops', 'Mentoring'],
  },
];

const websiteTypes = [
  {
    icon: Briefcase,
    name: 'Business Website',
    price: '150,000',
    description: 'Professional corporate website with modern design',
    features: [
      'Responsive design',
      'Contact forms',
      'About & Services pages',
      'SEO optimization',
      'Social media integration',
      '3 months support'
    ],
    popular: false,
  },
  {
    icon: ShoppingCart,
    name: 'E-commerce Website',
    price: '400,000',
    description: 'Full-featured online store with payment integration',
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment gateway',
      'Order management',
      'Inventory tracking',
      'Admin dashboard',
      '6 months support'
    ],
    popular: true,
  },
  {
    icon: BookOpen,
    name: 'Educational Platform',
    price: '350,000',
    description: 'Learning management system with course delivery',
    features: [
      'Course management',
      'Student enrollment',
      'Video streaming',
      'Assignment system',
      'Progress tracking',
      'Certificates',
      '6 months support'
    ],
    popular: false,
  },
  {
    icon: Heart,
    name: 'Non-Profit Website',
    price: '120,000',
    description: 'Impactful website for NGOs and charitable organizations',
    features: [
      'Donation integration',
      'Event management',
      'Volunteer signup',
      'Blog system',
      'Photo galleries',
      '3 months support'
    ],
    popular: false,
  },
  {
    icon: Camera,
    name: 'Portfolio Website',
    price: '100,000',
    description: 'Stunning showcase for creatives and professionals',
    features: [
      'Image galleries',
      'Project showcase',
      'Contact forms',
      'Social links',
      'Mobile optimized',
      '2 months support'
    ],
    popular: false,
  },
  {
    icon: Users,
    name: 'Community Platform',
    price: '500,000',
    description: 'Social platform with user interaction features',
    features: [
      'User registration',
      'Social features',
      'Forums/discussions',
      'Event system',
      'Messaging',
      'Moderation tools',
      '12 months support'
    ],
    popular: false,
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '100,000',
    currency: 'RWF',
    description: 'Perfect for small businesses getting started online',
    features: [
      '1-page responsive website',
      'Basic contact form',
      'Mobile-friendly design',
      'Basic SEO setup',
      '1 month support',
    ],
    popular: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Growth',
    price: '250,000',
    currency: 'RWF',
    description: 'Ideal for growing businesses with more complex needs',
    features: [
      '5-page responsive website',
      'Admin dashboard',
      'Custom branding',
      'Contact & booking forms',
      'Social media integration',
      '3 months support',
    ],
    popular: true,
    buttonText: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '500,000+',
    currency: 'RWF',
    description: 'Enterprise solutions with advanced features',
    features: [
      'Custom web/mobile app',
      'Content management system',
      'Advanced SEO optimization',
      'E-commerce integration',
      'Analytics dashboard',
      '6 months support',
    ],
    popular: false,
    buttonText: 'Contact Us',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Comprehensive technology solutions to help your business thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Website Types & Pricing
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Choose the perfect website type for your business needs with transparent pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <div
                key={type.name}
                className={`bg-gradient-card p-6 rounded-2xl shadow-lg hover-lift relative ${
                  type.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                data-aos-duration="800"
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{type.price}</span>
                    <span className="text-muted-foreground ml-2">RWF</span>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={type.popular ? 'hero' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link to="/request-website">Choose This Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Pick Your Business Growth Plan
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Choose the perfect package to accelerate your business growth with professional web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-gradient-card p-8 rounded-2xl shadow-lg hover-lift ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.currency}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'hero' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <Link to="/request-website">{plan.buttonText}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30" data-aos="fade-up" data-aos-duration="1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Process
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              A streamlined approach to deliver exceptional results on time and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your needs and goals' },
              { step: '02', title: 'Planning', description: 'We create a detailed project roadmap' },
              { step: '03', title: 'Development', description: 'We build your solution with precision' },
              { step: '04', title: 'Launch', description: 'We deploy and provide ongoing support' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-gradient-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
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
            Ready to Get Started?
          </h2>
          <p 
            className="text-xl text-muted-foreground mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/request-website">Request a Quote</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}