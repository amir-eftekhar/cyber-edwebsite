"use client"

import { FadeIn, FadeInStagger } from "@/components/animations"
import { Shield, Gift, Building, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const DONATE_URL = "https://www.gofundme.com/f/501c3-nonprofit-cpfa-provide-supplies-for-kids"
const SLACK_URL = "https://cybersecurity-ers9756.slack.com/ssb/redirect"

const fundingUses = [
  {
    title: "Supplies",
    description: "For our cybersecurity workshops, we need supplies such as awards and advertising means like banners to maximize our outreach impact.",
    icon: <Shield className="h-8 w-8 text-primary" />
  },
  {
    title: "Venues",
    description: "Venues are essential for hosting our cybersecurity workshops, providing the physical space necessary to accommodate participants.",
    icon: <Building className="h-8 w-8 text-primary" />
  },
  {
    title: "VPN Infrastructure",
    description: "Funds are vital for our free-distributed VPN to ensure its continued operation and improvement, providing online privacy for all users.",
    icon: <Cpu className="h-8 w-8 text-primary" />
  }
]

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Support <span className="gradient-text">CPFA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto">
              Your contribution helps us create a safer digital world for everyone.
            </p>
            <div className="mt-12 flex justify-center gap-4">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
                  Donate Now
                </Button>
              </a>
              <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">Join Community</Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Funding Uses Section */}
      <section className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Your Support <span className="gradient-text">Helps</span>
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid gap-8 md:grid-cols-3">
            {fundingUses.map((item) => (
              <FadeIn key={item.title} className="relative group">
                <div className="h-full rounded-2xl border bg-card p-8 hover:shadow-lg transition-all">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* Other Ways to Help */}
      <section className="container pb-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-16 text-center">
            <Gift className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Other Ways to Help
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Beyond financial support, you can help by volunteering, spreading awareness, and participating in our events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={SLACK_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Volunteer
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Share Our Mission
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}