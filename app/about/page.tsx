'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Heart, Users, Lightbulb, Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Every profound healing journey begins with feeling understood. We listen to your body’s unique signals without judgment.',
  },
  {
    icon: Users,
    title: 'Sanctuary Community',
    description: 'We curate a quiet, supportive environment where mutual respect and shared growth elevate everyone’s practice.',
  },
  {
    icon: Lightbulb,
    title: 'Evolving Wisdom',
    description: 'While rooted in 5,000-year-old traditions, our protocols continually evolve alongside modern clinical research.',
  },
  {
    icon: Award,
    title: 'Absolute Integrity',
    description: 'We promise transparency in our methods. If therapeutic yoga cannot resolve a specific issue, we will tell you.',
  },
]

const team = [
  {
    name: 'Shivani Mulik',
    role: 'Fitness Trainer & Yoga Teacher',
    bio: 'Masters in Yoga | Specializing in Online and Offline therapeutic yoga sessions, providing personalized fitness training and holistic healing.',
    image: '/images/team/shivani.jpeg',
  },
  {
    name: 'Shankar Sawant',
    role: 'Certified Yoga Teacher',
    bio: 'B.A. & Masters in Yoga | Specialist in Weight Loss, PCOD/PCOS, Thyroid & Diabetes management at our premium Pune studio.',
    image: '/images/team/shankar.jpeg',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Header />

      {/* Immersive Zen-Medical Hero - About */}
      <section className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/headers/about-hero.png"
            alt="Arogya Raksha Studio"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Premium Overlays for Depth & Focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>

        <div className="container relative z-30 flex flex-col items-center text-center mt-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-primary font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold inline-block border-b-2 border-primary/20 pb-2 md:pb-3 mb-6 md:mb-10 [text-shadow:_0_1px_2px_rgba(0,0,0,0.05)]">
              Since 2018 • Pune, India
            </span>
          </motion.div>

          <div className="max-w-5xl w-full mb-6 md:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-bold text-heading tracking-tight leading-[1.05] [text-shadow:_0_2px_10px_rgba(0,0,0,0.08)]"
            >
              The Science of <br />
              <span className="italic font-light text-heading/90">Deep Healing</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-xl text-foreground font-medium max-w-2xl leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.05)]"
          >
            We don't just teach yoga; we provide clinical protocols for internal correction and hormonal balance.
          </motion.p>
        </div>

        {/* Ambient Zen Sparkle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] z-10 pointer-events-none"></div>

        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      </section>

      {/* Visual Story Timeline - Light Theme */}
      <section className="py-16 md:py-24 bg-background relative px-4 md:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Our Origins</span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
                  A Sanctuary Born from <br />
                  <span className="italic font-light text-primary">Personal Necessity</span>
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6 text-foreground/80 leading-relaxed font-light text-[15px] md:text-lg">
                <p>
                  Arogya Raksha (meaning "health protection" in Sanskrit) was founded on the principle that yoga is not just an exercise class—it is definitive medicine.
                </p>
                <p>
                  Our founder witnessed firsthand how clinical, therapeutic yoga transformed her family's health, specifically in managing PCOS and age-related mobility issues where conventional approaches struggled.
                </p>
                <p className="border-l-4 border-primary/20 pl-5 md:pl-6 py-2 italic text-heading font-medium text-[14px] md:text-base bg-gradient-to-r from-primary/5 to-transparent">
                  "Today, we stand as Pune's premier sanctuary dedicated strictly to internal correction and life-changing vitality."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
            >
              <Image
                src="/images/1.jpg"
                alt="Therapeutic Practice"
                width={1000}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Values Grid - Light Theme - Compact Redesign */}
      <section className="py-12 md:py-20 bg-secondary/5 relative overflow-hidden border-y border-primary/5 px-4 md:px-8">
        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="max-w-2xl mb-8 md:mb-12 space-y-2 md:space-y-3">
            <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs">The Tenets</span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
              Our Clinical <span className="italic font-light text-primary">Pillars</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/95 backdrop-blur-xl p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/10 group hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden flex flex-col items-start text-left"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition duration-700 blur-md pointer-events-none z-[-1]"></div>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border border-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                    <Icon className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-sans font-bold text-lg md:text-2xl mb-2 md:mb-3 text-heading group-hover:text-primary transition-colors tracking-tight leading-tight">{value.title}</h3>
                  <p className="text-foreground/70 text-[13px] md:text-base leading-relaxed font-light">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Instructor Gallery - Fixed Dark Transition */}
      <section className="py-16 md:py-24 bg-card relative overflow-hidden px-4 md:px-8">
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-12 md:mb-16">
            <div className="space-y-4 md:space-y-6">
              <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">The Mentors</span>
              <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
                Guided by <br />
                <span className="italic font-light text-foreground/70">Clinical Experts</span>
              </h2>
            </div>
            <p className="text-foreground/80 font-light max-w-md text-[15px] md:text-lg leading-relaxed">
              Our therapists combine traditional wisdom with modern metabolic research to deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 max-w-5xl">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 md:mb-8 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:scale-[1.02] border border-primary/5 hover:border-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale-0 contrast-110 hover:contrast-125 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                    <h3 className="font-sans text-xl md:text-3xl text-heading mb-2 font-bold tracking-tight">{member.name}</h3>
                    <p className="text-primary font-bold text-[10px] md:text-xs tracking-widest uppercase">{member.role}</p>
                  </div>
                </div>

                <div className="border border-primary/10 rounded-2xl p-5 md:p-6 bg-white/50 backdrop-blur-sm group-hover:bg-white group-hover:border-primary/20 transition-all duration-500 shadow-sm">
                  <p className="text-foreground/80 leading-relaxed font-light text-[14px] md:text-base transition-colors duration-500">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA - Light Theme Transition */}
      <section className="py-16 md:py-24 bg-background border-t border-primary/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container relative z-10 max-w-3xl text-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
              Ready to <span className="italic font-light text-primary">Restore</span> Your Vitality?
            </h2>
            <p className="text-[15px] md:text-xl text-foreground/80 font-light max-w-xl mx-auto leading-relaxed">
              Your recovery journey starts with a clinical consultation. Meet our therapists and find your pathway.
            </p>
            <div className="pt-4 md:pt-6">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-heading to-primary text-white rounded-full font-bold tracking-[0.2em] uppercase text-sm shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-500 overflow-hidden sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <span className="truncate">Join Our Classes</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
