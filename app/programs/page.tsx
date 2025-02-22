"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart, Target, Shield, Sparkles } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const programs: Program[] = [
  {
    title: "Middle School Program",
    description: "Empowering students with essential digital safety skills through interactive workshops.",
    icon: <GraduationCap className="w-6 h-6" />,
    features: [
      "Cyberbullying prevention strategies",
      "Safe social media practices",
      "Password security workshops",
      "Online privacy protection",
      "Digital footprint awareness"
    ]
  },
  {
    title: "Senior Digital Safety",
    description: "Helping seniors navigate the digital world with confidence and security.",
    icon: <Heart className="w-6 h-6" />,
    features: [
      "Email safety and scam prevention",
      "Online banking security",
      "Password management",
      "Social media privacy",
      "Tech support scam awareness"
    ]
  },
  {
    title: "Community Workshops",
    description: "Building a safer digital community through education and collaboration.",
    icon: <Users className="w-6 h-6" />,
    features: [
      "Monthly security workshops",
      "Hands-on training sessions",
      "Q&A with security experts",
      "Real-world case studies",
      "Network security basics"
    ]
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[url('/patterns/topography.svg')] bg-fixed">
      <div className="container section-padding relative">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10" />
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive cybersecurity education and training programs for all skill levels.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div 
              key={program.title} 
              className="rounded-2xl border bg-card/50 backdrop-blur-sm p-8 hover:shadow-xl transition-all hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6">
                <div className="inline-flex p-3 rounded-xl bg-primary/20 text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
              </div>
              <ul className="space-y-3">
                {program.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                  >
                    <Sparkles className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}