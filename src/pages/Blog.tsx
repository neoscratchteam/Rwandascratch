import React from 'react';
import { Calendar, User, Clock, BookOpen } from 'lucide-react';
import { EmptyState } from '@/components/EmptyState';

const blogPosts = [
  // Business / Branding Category
  {
    title: 'Let’s Your Business Have a Brand with Us',
    excerpt: 'Learn how NeoScratch helps businesses build strong, recognizable brands that connect with customers and drive growth. This post covers the key steps to create a memorable brand identity, from logo design and color psychology to consistent messaging across digital platforms. We’ll also share real examples from our work with local businesses in Kigali.',
    author: 'Theogene Iradukunda',
    date: '2025-12-29',
    readTime: '5 min read',
    image: '/theodev.png',
    category: 'Business',
    link: '#',
  },
    // PixelMart Launch Post
  {
    title: 'PixelMart Website Launch',
    excerpt: 'Announcing the official launch of PixelMart, a smart inventory and stock management system for Mr. Faustina’s electronics and LCD business. Discover the features and benefits that make PixelMart a must-have for retail management.',
    author: 'Theogene Iradukunda',
    date: '2025-12-26',
    readTime: '5 min read',
    image: '/blog1.png',
    category: 'Product Launch',
    link: '#',
  },
  // Digital Marketing Post
  {
    title: 'Digital Marketing Strategies for Growing Your Business',
    excerpt: 'Explore effective digital marketing strategies, including social media campaigns, SEO optimization, and email marketing, to expand your business reach and increase engagement with your audience.',
    author: 'Theogene Iradukunda',
    date: '2025-12-30',
    readTime: '6 min read',
    image: '/blog2.png',
    category: 'Marketing',
    link: '#',
  },
  // Mental Health / Lifestyle Post
  {
    title: 'It’s Okay to Take a Break',
    excerpt: 'Learn the importance of taking breaks to recharge your mind and boost productivity. This post highlights techniques for managing stress, avoiding burnout, and maintaining a healthy work-life balance.',
    author: 'Theogene Iradukunda',
    date: '2025-12-31',
    readTime: '4 min read',
    image: '/blog3.png',
    category: 'Lifestyle',
    link: '#',
  },

];


export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in">
            NeoScratch Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Insights, tutorials, and tips on software development, graphic design, and tech education from NeoScratch.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No Blog Posts Yet"
              description="NeoScratch is crafting new content on tech and innovation. Check back soon!"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.title}
                  className="bg-gradient-card rounded-2xl shadow-lg overflow-hidden hover-lift animate-fade-in flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full inline-block mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6">Contribute to Our Blog</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Share your tech insights with NeoScratch! Contact Theogene at theodevrwanda@gmail.com or +250 792 734 752.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-white/90">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}