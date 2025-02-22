'use client'

import Image from 'next/image'
import { FC } from 'react'
import { UserCircle2, Award, Mail, Linkedin } from 'lucide-react'

interface OfficerCardProps {
  name: string
  position: string
  description: string
  imageUrl: string
}

interface Officer extends OfficerCardProps {}


const OfficerCard: FC<OfficerCardProps> = ({ name, position, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl border bg-card/80 text-card-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 pattern-dots pattern-blue-500 pattern-bg-white pattern-opacity-10 pattern-size-4">
      <div className="relative h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{name}</h3>
        <div className="flex items-center justify-center space-x-2">
          <Award className="w-5 h-5 text-blue-500" />
          <p className="text-sm font-medium text-blue-600">{position}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex justify-center space-x-4 pt-2">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function OfficersPage() {
  const officers = [
    {
      name: "Iniya Rajanikanth",
      position: "Co-Founder",
      description: "I helped start Cyber-Ed after realizing how many people, both students and seniors, fall victim to online scams simply because they lack the knowledge to protect themselves. Through our workshops, we empower middle schoolers to recognize cyber threats and help seniors avoid digital fraud.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Kavya Srivastava",
      position: "Co-Founder",
      description: "I started Cyber-Ed to help bridge the gap in cybersecurity awareness, especially for middle schoolers and senior citizens. Through interactive workshops and educational programs, Cyber-Ed empowers people with the tools they need to navigate the internet safely.",
      imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Amir Eftekhar",
      position: "Chief Technology Officer",
      description: "As CTO at Cyber-Ed, I lead our technical initiatives including the development of our browser extension and cybersecurity tools. With a background in software engineering and cybersecurity, I'm passionate about creating innovative solutions that make digital safety accessible to everyone. My focus is on developing user-friendly tools that provide real-time protection against online threats.",
      imageUrl: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Niklesh Survajala",
      position: "Outreach Officer",
      description: "As the Outreach Officer at Cyber-Ed, I'm dedicated to expanding our community impact and building meaningful partnerships. I work closely with schools, senior centers, and local organizations to bring our cybersecurity education programs to those who need them most. Through strategic outreach initiatives, we're making digital safety education more accessible to everyone in our community.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  ]

  return (
    <div className="container py-12 space-y-12 pattern-circuit pattern-blue-500 pattern-bg-white pattern-opacity-5 pattern-size-8">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Our Officers</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Meet the dedicated team behind Cyber-Ed working to make cybersecurity education accessible to everyone
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {officers.map((officer) => (
          <OfficerCard
            key={officer.name}
            name={officer.name}
            position={officer.position}
            description={officer.description}
            imageUrl={officer.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
