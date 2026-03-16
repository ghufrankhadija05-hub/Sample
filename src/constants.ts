import { Wrench, Droplets, Sparkles, Hammer, Thermometer, AlertCircle, Clock, Award, DollarSign, Zap, MapPin, Phone, Star, Share2, ThumbsUp, Globe, Menu, X, CheckCircle2, Calendar, MessageSquare, User } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: any;
};

export const SERVICES: Service[] = [
  {
    id: 'leak-repair',
    title: 'Leak Repair',
    description: 'Fast identification and repair of water leaks in pipes and fixtures.',
    icon: Droplets,
  },
  {
    id: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Professional clearing of stubborn clogs in sinks, showers, and toilets.',
    icon: Sparkles,
  },
  {
    id: 'pipe-installation',
    title: 'Pipe Installation',
    description: 'Modern piping solutions for renovations or new home construction.',
    icon: Hammer,
  },
  {
    id: 'water-heater',
    title: 'Water Heater Repair',
    description: 'Installation and maintenance for all types of water heating systems.',
    icon: Thermometer,
  },
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: "On-call 24/7 for urgent plumbing issues that can't wait.",
    icon: AlertCircle,
  },
];

export const FEATURES = [
  {
    title: '24/7 Service',
    description: "Day or night, we're here to help.",
    icon: Clock,
  },
  {
    title: 'Expert Plumbers',
    description: 'Licensed and highly trained team.',
    icon: Award,
  },
  {
    title: 'Fair Pricing',
    description: 'Transparent quotes with no surprises.',
    icon: DollarSign,
  },
  {
    title: 'Fast Response',
    description: 'Local teams for rapid arrival times.',
    icon: Zap,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: '"PlumbPro arrived within 30 minutes for my emergency leak. They were professional and the repair was perfect. Highly recommend!"',
    rating: 5,
  },
  {
    name: 'Michael Ross',
    role: 'Property Manager',
    content: '"Very professional service for our kitchen renovation. They kept the area clean and finished ahead of schedule."',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Local Business Owner',
    content: '"We had a major drain issue at our cafe. PlumbPro fixed it quickly without disrupting our customers. Excellent service!"',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'Homeowner',
    content: '"The team was incredibly helpful and explained everything clearly. No hidden costs, just honest and high-quality work."',
    rating: 5,
  },
  {
    name: 'Jessica Lee',
    role: 'Real Estate Agent',
    content: '"I always recommend PlumbPro to my clients. They are reliable, punctual, and their work is consistently top-notch."',
    rating: 5,
  },
  {
    name: 'Robert Wilson',
    role: 'Retired Engineer',
    content: '"As someone with a technical background, I appreciate their attention to detail. The pipe installation was clean and robust."',
    rating: 4,
  },
];
