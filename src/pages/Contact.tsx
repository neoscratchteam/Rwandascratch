import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    // Format the message for WhatsApp
    const whatsappMessage = `
Message from NeoScratch Contact Form

 Name: ${formData.name}  
 Email: ${formData.email}  
 Subject: ${formData.subject}

Message: 
${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number (change to your actual number with country code, no + or spaces)
    const phoneNumber = '250792734752'; 

    // WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp (mobile will open app, desktop will open web)
    window.open(whatsappUrl, '_blank');

    // Show success toast
    toast({
      title: "Opening WhatsApp...",
      description: "Your message is ready to send via WhatsApp. We'll reply soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSending(false);
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-36 relative overflow-hidden bg-background">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">+250 792 734 752</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      theodevrwanda@gmail.com<br />
                      <span className="text-sm">(or)</span> neoscratch@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Availability</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      <span className="text-sm">We work fully online from Rwanda</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-muted-foreground italic">
                NeoScratch is a fully remote/online service. We deliver professional web and software solutions from anywhere in Rwanda.
              </p>
            </div>

            {/* Contact Form → WhatsApp */}
            <div className="bg-gradient-card p-8 rounded-2xl shadow-lg animate-scale-in">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Send Us a Message on WhatsApp
              </h2>
              <form onSubmit={handleSendToWhatsApp} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={sending}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {sending ? 'Preparing...' : 'Send via WhatsApp'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}