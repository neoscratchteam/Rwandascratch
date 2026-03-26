import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';

const upcomingEvents = [
  {
    title: 'InStore Release',
    date: '2026-01-15',
    location: 'Kigali, Rwanda',
    description: 'Official launch of InStore, a retail management system to efficiently track products, sales, and customer data.',
    image: '/instore.png',
    authors: ['Theogene Iradukunda'],
  },
  {
    title: 'SmartStock Release',
    date: '2026-02-10',
    location: 'Kigali, Rwanda',
    description: 'Launch of SmartStock, a flexible stock management system supporting multiple product categories and sales tracking.',
    image: '/smartstock.png',
    authors: ['Theogene Iradukunda'],
  },
  {
    title: 'StockWise Release',
    date: '2026-03-05',
    location: 'Kigali, Rwanda',
    description: 'Release of StockWise, a stock management system for mixed shops with a simple and user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=600&h=400&fit=crop',
    authors: ['Theogene Iradukunda'],
  },
];

const pastEvents = [
  {
    title: 'Dieumerci Website Release',
    date: '2025-09-03',
    description: 'Launch of the Dieumerci portfolio website, showcasing their projects and company information with a modern design.',
    image: '/dieumerci.png',
    authors: ['Theogene Iradukunda'],
  },
  {
    title: 'PixelMart Release',
    date: '2025-12-26',
    description: 'Launch of PixelMart, a smart inventory and stock management system for Mr. Faustina’s electronics and LCD business.',
    image: '/pixelmart.png',
    authors: ['Theogene Iradukunda'],
  },
  {
    title: 'Open Future Website Release',
    date: '2028-08-12', // Note: This is far future, but kept as provided
    description: 'Launch of the Open Future Savings System website, enabling secure member management and monthly savings tracking.',
    image: '/openfutur.png',
    authors: ['Theogene Iradukunda'],
  },
];

export default function Events() {
  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in">
            NeoScratch Events & Training
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Join NeoScratch’s workshops and training sessions to master software development, graphic design, and networking skills.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover NeoScratch’s latest workshops to boost your tech skills and connect with the community.
            </p>
          </div>

          {upcomingEvents.length === 0 ? (
            <EmptyState
              icon={Calendar}
              title="No Upcoming Events"
              description="We're planning new workshops at NeoScratch. Check back soon!"
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="bg-gradient-card rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        <span>By: {event.authors.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Past Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Relive NeoScratch’s impactful workshops and training sessions.
            </p>
          </div>

          {pastEvents.length === 0 ? (
            <EmptyState
              icon={Calendar}
              title="No Past Events"
              description="NeoScratch is gearing up for more events. Stay tuned!"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.title}
                  className="bg-gradient-card rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{event.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-1" />
                        {event.authors.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6">Want to Host an Event?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with Theogene at theodevrwanda@gmail.com or +250 792 734 752 to organize tech workshops with NeoScratch.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}