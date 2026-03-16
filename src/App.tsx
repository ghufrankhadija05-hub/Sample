import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, Droplets, Sparkles, Hammer, Thermometer, AlertCircle, 
  Clock, Award, DollarSign, Zap, MapPin, Phone, Star, 
  Share2, ThumbsUp, Globe, CheckCircle2, 
  Calendar, MessageSquare, User, Info, ChevronRight, 
  Camera, Copy, CalendarPlus, Headphones, ArrowUp
} from 'lucide-react';
import { SERVICES, FEATURES, TESTIMONIALS, Service } from './constants';

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex items-center bg-white/90 backdrop-blur-md px-4 py-3 border-b border-blue-500/10 justify-between">
    <a href="#" className="flex items-center gap-2 cursor-pointer">
      <Wrench className="text-blue-600 w-8 h-8" />
      <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">PlumbPro</h2>
    </a>
    <div className="hidden md:flex items-center gap-8">
      <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Services</a>
      <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About Us</a>
      <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Contact Us</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-white px-4 pt-12 pb-24 border-t border-slate-100">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="text-blue-600 w-6 h-6" />
            <h2 className="text-slate-900 text-lg font-bold">PlumbPro</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            The premier choice for expert plumbing services. Reliable, fast, and professional every time.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a className="hover:text-blue-600 transition-colors" href="#services">Services</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="#about">About Us</a></li>
            <li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all" href="#">
              <Share2 className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all" href="#">
              <ThumbsUp className="w-5 h-5" />
            </a>
            <a className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all" href="#">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs text-center">© 2024 PlumbPro Services. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-slate-400">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const MobileBottomNav = () => (
  <div className="md:hidden fixed bottom-0 left-0 w-full z-[60] bg-white/95 backdrop-blur-sm border-t border-slate-100 pb-safe">
    <div className="flex px-4 pb-6 pt-3">
      <a 
        href="#"
        className="flex flex-1 flex-col items-center justify-center gap-1 text-blue-600"
      >
        <Clock className="w-6 h-6" />
        <span className="text-[10px] font-bold">Home</span>
      </a>
      <a href="#services" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
        <Wrench className="w-6 h-6" />
        <span className="text-[10px] font-bold">Services</span>
      </a>
      <a href="#contact" className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-400 hover:text-blue-600 transition-colors">
        <Phone className="w-6 h-6" />
        <span className="text-[10px] font-bold">Contact</span>
      </a>
    </div>
  </div>
);

// --- Views ---

const ServiceDetail = ({ serviceId, onBack }: { serviceId: string, onBack: () => void }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <AlertCircle className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900">Service not found</h2>
        <p className="text-slate-500 mt-2">The service you're looking for doesn't exist.</p>
        <button 
          onClick={onBack}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
      >
        <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
        <span className="font-semibold">Back to Services</span>
      </button>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
        <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8">
          <service.icon className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
          {service.title}
        </h1>
        
        <div className="h-1.5 w-16 bg-blue-600 rounded-full mb-8"></div>
        
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p className="font-medium text-slate-900">
            Professional and reliable {service.title.toLowerCase()} solutions tailored to your needs.
          </p>
          <p>
            {service.description} Our team of certified professionals uses the latest tools and techniques to ensure the job is done right the first time. We understand how disruptive plumbing issues can be, which is why we prioritize speed and efficiency without compromising on quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-700">Certified Technicians</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-700">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-700">Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-bold text-slate-700">Guaranteed Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            onClick={onBack}
            className="flex-1 flex items-center justify-center h-14 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
          >
            Request a Quote
          </a>
          <button className="flex-1 flex items-center justify-center h-14 bg-slate-900 text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-95">
            Call Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const LandingPage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="flex flex-col"
  >
    {/* Hero */}
    <header className="p-0 md:p-4">
      <div className="relative min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat md:rounded-xl items-start justify-end px-6 pb-12 md:px-12 overflow-hidden" 
           style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_bgpXwKc9PJEboH8l2so4rbbT8EmDW9_Wew0Im2H0OxZ2BSi4x2YrqvCVH14u48uDyk4Kb8AHBO3K0l5kKapfSmFqrYYhzThVwXh8OPzzQ1bmh2rrI1Ws7Pe_3R46tNIL6FVOr7j6v4T1aJKfpNYcjxe-vKEibf_QQlmkgbKLyd-Kk8MvOFeGVwKf9B6YZsfcOTb6Pfsoj9LQmiE5LiayViwRebh2Rq2JjeR8kfwVVZD71Yf3IjzS5n3cGhV7hM5d11i-9qRJ4MwE")' }}>
        <div className="flex flex-col gap-3 text-left relative z-10">
          <span className="inline-block bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded w-fit">24/7 Emergency Support</span>
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl max-w-2xl">
            Fast & Reliable Plumbing Services
          </h1>
          <h2 className="text-white/90 text-base font-medium leading-relaxed max-w-md">
            Expert solutions for all your plumbing needs, from leaky faucets to full pipe installations. Available 24/7.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 relative z-10 w-full">
          <button className="flex-1 min-w-[140px] max-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 bg-blue-600 text-white text-base font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-95">
            Contact Us
          </button>
          <button className="flex-1 min-w-[140px] max-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 bg-white text-slate-900 text-base font-bold shadow-sm hover:bg-slate-50 transition-all active:scale-95">
            Call Us
          </button>
        </div>
      </div>
    </header>

    {/* Services */}
    <section id="services" className="py-12 px-4 max-w-6xl mx-auto w-full scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight">Our Services</h2>
        <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            onClick={() => window.location.hash = `#/service/${service.id}`}
            className="flex flex-col gap-3 rounded-xl border border-blue-600/10 bg-white p-5 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <service.icon className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 text-lg font-bold">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-normal line-clamp-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* About */}
    <section id="about" className="py-16 bg-white px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight">About PlumbPro</h2>
        <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
        <p className="text-slate-600 leading-relaxed text-lg">
          With over 15 years of excellence, PlumbPro has been the trusted name in residential and commercial plumbing. Our team of certified professionals is committed to quality craftsmanship and exceptional customer service.
        </p>
        <p className="text-slate-600 leading-relaxed text-lg">
          We believe in transparent pricing, honest assessments, and treating every home as if it were our own. Our mission is to provide peace of mind through reliable, expert plumbing solutions available whenever you need them.
        </p>
        <div className="pt-4">
          <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95">
            Learn More Our Story
          </button>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-12 px-4 bg-slate-50">
      <div className="text-center mb-10">
        <h2 className="text-slate-900 text-2xl font-bold">Why Choose Us</h2>
        <p className="text-slate-500 mt-2">The benefits of working with the best</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 mb-2">
              <feature.icon className="w-7 h-7" />
            </div>
            <h4 className="font-bold text-slate-900">{feature.title}</h4>
            <p className="text-xs text-slate-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-12 px-4 bg-white max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-slate-900 text-2xl font-bold leading-tight tracking-tight">What Our Clients Say</h2>
          <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => {
              const el = document.getElementById('testimonial-slider');
              if (el) el.scrollBy({ left: -350, behavior: 'smooth' });
            }}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('testimonial-slider');
              if (el) el.scrollBy({ left: 350, behavior: 'smooth' });
            }}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-90"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div 
        id="testimonial-slider"
        className="flex overflow-x-auto gap-4 pb-4 snap-x no-scrollbar scroll-smooth"
      >
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="min-w-[280px] md:min-w-[350px] bg-slate-50 p-6 rounded-xl border border-blue-600/5 snap-center hover:border-blue-600/20 transition-colors">
            <div className="flex gap-1 text-orange-400 mb-3">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 text-sm italic mb-4 min-h-[60px]">{t.content}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                <User className="text-slate-400 w-6 h-6" />
              </div>
              <div>
                <h5 className="text-slate-900 font-bold text-sm">{t.name}</h5>
                <p className="text-slate-500 text-[10px]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="py-12 px-4 bg-slate-50 scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-slate-900 text-3xl font-bold">Get In Touch</h2>
          <p className="text-slate-500 mt-2">Send us a message and we'll get back to you promptly</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4">
            <input 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
              placeholder="Full Name" 
              type="text"
            />
            <input 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
              placeholder="Email Address" 
              type="email"
            />
            <textarea 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
              placeholder="How can we help?" 
              rows={4}
            ></textarea>
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-200">
          <div className="flex items-start gap-4">
            <div className="text-blue-600"><MapPin className="w-6 h-6" /></div>
            <div>
              <h5 className="font-bold text-slate-900">Our Office</h5>
              <p className="text-sm text-slate-500">123 Plumber Ave, Suite 400<br/>Flow City, FC 90210</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-blue-600"><Phone className="w-6 h-6" /></div>
            <div>
              <h5 className="font-bold text-slate-900">Call Us</h5>
              <p className="text-sm text-slate-500">(555) 000-PLUMB<br/>Available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

const ScrollToTop = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.button
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 md:bottom-8 right-6 z-50 w-12 h-12 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all active:scale-90 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    )}
  </AnimatePresence>
);

// --- Main App ---

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      setHash(newHash);
      
      // Scroll to top if navigating to a detail page or home root
      // Otherwise let the browser handle anchor scrolling
      if (newHash.startsWith('#/service/') || newHash === '' || newHash === '#') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isServiceDetail = hash.startsWith('#/service/');
  const currentServiceId = isServiceDetail ? hash.split('/').pop() || '' : '';

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          {isServiceDetail ? (
            <motion.div 
              key={`service-${currentServiceId}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ServiceDetail 
                serviceId={currentServiceId} 
                onBack={() => { window.location.hash = ''; }} 
              />
            </motion.div>
          ) : (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LandingPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <MobileBottomNav />
      <ScrollToTop visible={showScrollTop && !isServiceDetail} />
    </div>
  );
}
