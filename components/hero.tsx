import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

import { FC } from 'react'

const Hero: FC = () => {
  return (
    <div className="hero-section container">
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center p-2 mb-8 rounded-full bg-gradient-to-r from-muted/50 via-muted to-muted/50">
          <Shield className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Protecting Digital Rights</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
          Empowering Communities Through{" "}
          <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
            Cybersecurity
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join us in building a safer digital world through education, advocacy, and community engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
            Get Started
          </Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}