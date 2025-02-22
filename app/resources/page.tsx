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
    description: "Our free browser extension that helps protect you from phishing sites, malicious downloads, and unsafe web content.",
    link: "#extension",
    category: "tools",
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "Phishing Prevention Guide",
    description: "Learn how to identify and avoid phishing scams with our comprehensive guide.",
    link: "#phishing-guide",
    category: "guides",
    icon: <Book className="w-5 h-5" />
  },
  {
    title: "Digital Footprint Guide",
    description: "Understanding and managing your online presence and digital footprint.",
    link: "#digital-footprint",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Email Safety Tips",
    description: "Best practices for keeping your email communications secure and private.",
    category: "guides",
    icon: <FileText className="w-5 h-5" />,
    link: "#email-safety"
  },
  {
    title: "Password Security Guide",
    description: "Learn how to create and manage strong passwords to protect your accounts.",
    link: "#password-security",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Online Privacy Guide",
    description: "Comprehensive guide to protecting your privacy while browsing the internet.",
    link: "#privacy-guide",
    category: "guides",
    icon: <FileText className="w-5 h-5" />
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
                    Learn more
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