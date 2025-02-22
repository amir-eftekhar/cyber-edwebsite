"use client"

import { motion } from 'framer-motion'
import { Shield, Heart, Target, Users, Lightbulb, Sparkles } from "lucide-react"
import Image from "next/image"

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const mission = {
  statement: "Our mission is to foster digital literacy across generations, ensuring everyone, from students to senior citizens, can protect themselves and thrive in an increasingly connected world.",
  description: "We've worked to bridge knowledge gaps in cybersecurity awareness through various initiatives. Our programs include free educational workshops for middle school students teaching critical skills like cyberbullying prevention, password management, and email security. We've also partnered with senior centers and libraries to host interactive workshops that equip elderly participants with strategies to safeguard their personal information online."
}

const values: Value[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Protection",
    description: "Ensuring digital safety for all generations through education and awareness."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Empathy",
    description: "Understanding and addressing the unique needs of different age groups."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "Building a supportive network of digitally empowered individuals."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Staying ahead of digital threats with modern solutions and education."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pattern-circuit bg-fixed">
      <div className="container section-padding relative">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm -z-10" />
        
        {/* Mission Section */}
        <section className="py-20">
          <motion.div 
            className="max-w-4xl mx-auto space-y-8 hover-lift pattern-dots rounded-3xl p-8 bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-primary/20 pulse">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {mission.statement}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {mission.description}
            </p>
          </motion.div>
        </section>
        {/* Impact & Accomplishments Section */}
        <section className="relative py-12 md:py-16 mb-12">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Our Impact & Accomplishments</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Educated</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
                <div className="text-sm text-muted-foreground">School Workshops</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-muted-foreground">Senior Presentations</div>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Key Achievements</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Established biweekly cybersecurity workshops at Fallon Middle School, reaching over 500 students with hands-on training in digital safety.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Developed and launched monthly presentations at Dublin senior centers, helping elderly residents avoid digital scams and fraud.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Created an innovative browser extension that provides real-time protection against phishing attempts and suspicious websites.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <span>Partnered with Dublin Library to host special cybersecurity awareness events for the community.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
       

        

        {/* Values Section */}
        <section className="pb-16">
          <div className="rounded-3xl pattern-waves p-8 md:p-16 backdrop-blur-sm bg-card/50">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 spin-slow">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold gradient-text">Our Values</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our mission and shape our approach to digital education.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="text-center group hover-glow rounded-2xl p-6 bg-card/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/20 text-primary mb-4 bounce-subtle">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}