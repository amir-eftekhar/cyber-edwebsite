import { Shield, Users, BookOpen, Lock } from "lucide-react"

import { FC } from 'react'

interface Feature {
  title: string
  description: string
  icon: JSX.Element
}

export const Features: FC = () => {
  return (
    <div className="container section-padding">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const features: Feature[] = [
  {
    title: "Security First",
    description: "Advanced protection strategies for the modern digital landscape",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "Community Driven",
    description: "Building a network of cybersecurity advocates and experts",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Education Focus",
    description: "Comprehensive learning resources for all skill levels",
    icon: <BookOpen className="h-6 w-6 text-primary" />
  },
  {
    title: "Privacy Matters",
    description: "Protecting personal data and digital rights",
    icon: <Lock className="h-6 w-6 text-primary" />
  }
]