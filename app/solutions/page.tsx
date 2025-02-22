"use client"

import { FadeIn, FadeInStagger } from "@/components/animations"
import { Shield, Laptop, Users, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

const SLACK_URL = "https://cybersecurity-ers9756.slack.com/ssb/redirect"

const services = [
  {
    title: "Workshops",
    description: "Our workshops provide young children with essential knowledge and skills, protecting them from harmful viruses and scams they may encounter in the future.",
    icon: <Users className="h-8 w-8 text-primary" />,
    features: ["Interactive sessions", "Hands-on learning", "Real-world scenarios", "Expert guidance"],
    action: "Join Workshop"
  },
  {
    title: "VPN Service",
    description: "A fully functional VPN designed by CPFA, launching fall 2024. Providing secure, private internet access at minimal cost.",
    icon: <Lock className="h-8 w-8 text-primary" />,
    features: ["End-to-end encryption", "No-logs policy", "High-speed servers", "24/7 support"],
    action: "Join Beta"
  },
  {
    title: "Hack-a-thon",
    description: "Join our upcoming hackathons starting in 2025. Collaborate, innovate, and develop solutions for real-world cybersecurity challenges.",
    icon: <Laptop className="h-8 w-8 text-primary" />,
    features: ["Team competitions", "Mentorship", "Prizes", "Networking"],
    action: "Register Interest"
  }
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Our <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect and educate our community.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="container">
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <FadeIn key={service.title} className="relative group">
                <div className="h-full rounded-2xl border bg-card p-8 hover:shadow-lg transition-all">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Shield className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                      {service.action}
                    </Button>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* CTA Section */}
      <section className="container pb-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us by supporting our monthly workshops and sharing our mission with friends and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  Join Our Community
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Share Mission
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}