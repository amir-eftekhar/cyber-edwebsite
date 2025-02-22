import { Button } from "@/components/ui/button"

import { FC } from 'react'

export const CTA: FC = () => {
  return (
    <div className="container section-padding">
      <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 sm:p-12 text-center relative overflow-hidden border border-blue-500/20">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to strengthen your cybersecurity?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Join our community and get access to expert resources, training, and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="group hover:border-blue-500/50 bg-white/10 backdrop-blur-lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}