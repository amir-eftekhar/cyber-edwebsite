import { Button } from "@/components/ui/button"
import { Icon } from '@iconify/react'
import Image from "next/image"
import Link from "next/link"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"

const EMAIL = "cyberedteam@gmail.com"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 grid-pattern">
      {/* Hero Section */}
      <section className="hero-section container relative overflow-hidden">

        <div className="relative z-10 text-center max-w-4xl mx-auto pt-8">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
            <Icon icon="ph:shield-check-bold" className="h-5 w-5 mr-2 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Strengthen Your Cyber Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Fostering <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Literacy</span> Across{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Generations</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Empowering students and seniors with essential digital safety skills through interactive workshops and educational programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl">
                <Icon icon="ph:graduation-cap-bold" className="mr-2 h-5 w-5" />
                Explore Programs
              </Button>
            </Link>
            <a href={`mailto:${EMAIL}`}>
              <Button size="lg" variant="outline" className="group hover:border-blue-500/50 bg-white/10 backdrop-blur-lg">
                <Icon icon="ph:envelope-simple-bold" className="mr-2 h-5 w-5 group-hover:text-blue-500" />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Workshop Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/senpren1.png"
              alt="Cybersecurity Workshop"
              width={1600}
              height={1200}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Student Programs</h3>
              <p className="text-lg text-white/90">Teaching digital safety to middle school students</p>
            </div>
          </div>

          {/* Community Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/senpren2.png"
              alt="Community Support"
              width={1600}
              height={1200}
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Senior Programs</h3>
              <p className="text-lg text-white/90">Helping seniors navigate the digital world safely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container section-padding relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 pattern-circuit pattern-blue-500 pattern-bg-white pattern-opacity-5 pattern-size-8 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background rounded-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <Icon icon="ph:target-light" className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Our Purpose</span>
          </div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            In today's increasingly connected world, we believe that everyone deserves to feel safe and confident while using technology. Our mission is to bridge the digital literacy gap across generations through targeted education and practical training.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container section-padding">
        <div className="rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8 md:p-12 border border-blue-500/20 pattern-circuit pattern-blue-500 pattern-bg-white pattern-opacity-5 pattern-size-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/95 to-background" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-2xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 mx-auto block animate-gradient">
              <Icon icon="ph:rocket-launch-bold" className="h-5 w-5 mr-2 text-blue-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Our Initiatives</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Making the Internet Safer</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl p-6 bg-white/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <Icon icon="ph:browser-bold" className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Browser Extension</h3>
                </div>
                <p className="text-muted-foreground mb-4">Our upcoming browser extension will help users identify and avoid potential online threats in real-time. Stay protected while browsing with AI-powered security features.</p>
                <span className="inline-flex items-center text-sm font-medium text-blue-500">
                  <Icon icon="ph:clock-countdown-bold" className="h-4 w-4 mr-1" />
                  Coming Soon
                </span>
              </div>
              
              <div className="rounded-2xl p-6 bg-white/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <Icon icon="ph:chalkboard-teacher-bold" className="h-8 w-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Educational Programs</h3>
                </div>
                <p className="text-muted-foreground mb-4">We deliver comprehensive cybersecurity education through:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <Icon icon="ph:check-circle-bold" className="h-4 w-4 mr-2 text-blue-500" />
                    Biweekly workshops at Fallon Middle School
                  </li>
                  <li className="flex items-center">
                    <Icon icon="ph:check-circle-bold" className="h-4 w-4 mr-2 text-blue-500" />
                    Monthly senior center presentations
                  </li>
                  <li className="flex items-center">
                    <Icon icon="ph:check-circle-bold" className="h-4 w-4 mr-2 text-blue-500" />
                    Special events at Dublin Library
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/5 border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 group">
                <Icon icon="ph:code-bold" className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hackathons</h3>
                <p className="text-muted-foreground text-sm">
                  Engaging cybersecurity challenges and hands-on coding exercises for students.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/5 border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 group">
                <Icon icon="ph:users-three-bold" className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Building a network of cyber-aware individuals through local community engagement.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-blue-500/20 p-6 hover:border-blue-500/40 transition-all duration-300 group">
                <Icon icon="ph:shield-check-bold" className="h-8 w-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Providing tools and knowledge for safer internet browsing and digital interactions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Newsletter Section */}
      <section className="container section-padding">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter to receive updates about our workshops, events, and cybersecurity tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-3 border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-full px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}