"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Shield, Video, FileText, Users, Code } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface Resource {
  title: string;
  description: string;
  link: string;
  category: string;
  icon: React.ReactNode;
  isVideo?: boolean;
}

const categories: Category[] = [
  { id: 'all', name: 'All Resources', icon: <Shield className="w-4 h-4" /> },
  { id: 'guides', name: 'Guides', icon: <Book className="w-4 h-4" /> },
  { id: 'tools', name: 'Tools', icon: <Code className="w-4 h-4" /> },
  { id: 'videos', name: 'Videos', icon: <Video className="w-4 h-4" /> },
  { id: 'community', name: 'Community', icon: <Users className="w-4 h-4" /> },
];

const resources: Resource[] = [
  {
    title: "Browser Safety Extension",
    description: "Our free browser extension helps protect you from phishing sites, malicious downloads, and unsafe web content. It provides real-time alerts and blocks dangerous sites automatically.",
    link: "#extension",
    category: "tools",
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "Phishing Prevention Guide",
    description: "Our comprehensive guide teaches you how to identify suspicious emails, verify sender authenticity, recognize common phishing tactics, and protect your personal information from scammers.",
    link: "#phishing-guide",
    category: "guides",
    icon: <Book className="w-5 h-5" />
  },
  {
    title: "Digital Footprint Guide",
    description: "Learn how your online activities create a permanent record and how to manage your digital presence. Includes strategies for controlling what information is visible to others and protecting your reputation.",
    link: "#digital-footprint",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Email Safety Tips",
    description: "Discover essential practices for secure email communications, including how to recognize suspicious messages, safely handle attachments, use encryption, and prevent account compromise.",
    category: "guides",
    icon: <FileText className="w-5 h-5" />,
    link: "#email-safety"
  },
  {
    title: "Password Security Guide",
    description: "Master the art of creating strong, unique passwords and learn about password managers, two-factor authentication, and other techniques to keep your accounts secure from unauthorized access.",
    link: "#password-security",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Online Privacy Guide",
    description: "Take control of your online privacy with our detailed guide covering browser settings, VPNs, cookie management, social media privacy, and how to minimize data collection by websites and apps.",
    link: "#privacy-guide",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Cyber-Ed Presentation Video",
    description: "Watch our informative presentation explaining common cybersecurity threats and practical protection strategies for students and seniors. Perfect introduction to our educational approach.",
    link: "/presentation_video.mov",
    category: "videos",
    icon: <Video className="w-5 h-5" />,
    isVideo: true
  },
  {
    title: "Workshop Presentations",
    description: "Access slides and materials from our recent workshops on phishing prevention, password security, and safe social media practices. Great resources for educators and community leaders.",
    link: "#workshop-materials",
    category: "videos",
    icon: <Video className="w-5 h-5" />
  }
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-screen bg-[url('/patterns/topography.svg')] bg-fixed">
      <div className="container section-padding relative">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resources
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Free cybersecurity resources and tools to help protect you online.
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeTab === category.id ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'bg-card hover:bg-primary/10'}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources
            .filter(resource => activeTab === 'all' || resource.category === activeTab)
            .map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary-foreground group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <a 
                    href={resource.link} 
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.isVideo ? 'Watch Video' : 'Learn more'}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}