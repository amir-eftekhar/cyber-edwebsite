"use client"

import { FadeIn, FadeInStagger } from "@/components/animations"
import { Shield, Target, Heart } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Shanay Gaitonde",
    role: "Co-Founder & COO",
    bio: "Hello! My name is Shanay Gaitonde and I am one of the co-founders of this nonprofit organization. My goal with this nonprofit is to help educate those who are vulnerable to cybersecurity attacks and one promise from my end is that I will give my 100 percent to this initiative. Furthermore, some traits that describe me are hardworking, cooperative, ambitious, and competitive.",
    image: "/shanay_logo.webp"
  },
  {
    name: "Siddharth Alluri",
    role: "Co-Founder & CFO",
    bio: "My name is Siddharth Alluri and I am one of the co-founders of the CPFA initiative, which plans to combat cybersecurity attacks to those of all ages. As a contributor to this non-profit, I plan to try my very best to spread awareness on cyberattacks to the most vulnerable of people. To describe myself, I am someone who is very open-minded, reliable, considerate, and compassionate. I'm optimistic that by working together, we can make great progress in addressing breaches comprehensively.",
    image: "/sid.webp"
  },
  {
    name: "Vivaan Warrier",
    role: "Founder & CEO",
    bio: "Hey everyone! My name is Vivaan Warrier, and I am the Founder of this Cyber Security Non Profit. Helping our society impede these viruses and cyber security attacks is something that I have always been passionate about and strived to achieve. To describe myself, I am optimistic, cooperative, and hardworking. With this non-profit, me and my team will be able to help prevent these viruses and malware issues and definitely help the society.",
    image: "/vivan.webp"
  }
]

export default function VisionPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Our <span className="gradient-text">Vision</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto">
              CPFA aspires to expand across the entire Bay Area after successfully protecting Dublin. This will include expanding our message across Alameda County to ensure more people are safer online.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Section */}
      <section className="container">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-center text-lg leading-relaxed">
                CPFA started in the summer of 2023 when Founder Vivaan Warrier and Co-founders Shanay Gaitonde and Siddharth Alluri decided to start a non profit organization to educate young children and seniors about the risks associated in the increasingly digital world. CPFA wants to expand its message to help as many people as possible stay safe in the dangerous digital world.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Team Section */}
      <section className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.2}>
                <div className="group relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-semibold">{member.name}</h3>
                      <p className="text-primary-foreground/90 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* Values Section */}
      <section className="container pb-16">
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 md:p-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Protection</h3>
                <p className="text-muted-foreground">
                  Ensuring digital safety for all members of our community.
                </p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Empowering through knowledge and practical skills.
                </p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Building a network of cybersecurity advocates.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}