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
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
  },
  {
    name: 'Shankar Patil Sawant',
    role: 'Certified Yoga Teacher',
    bio: 'B.A. & Masters in Yoga | Specialist in Weight Loss, PCOD/PCOS, Thyroid & Diabetes management at our premium Pune studio.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e08c2d468e',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-50 selection:bg-emerald-500/20">
      <Header />

      {/* Immersive Zen-Medical Hero - About */}
      <section className="relative h-[80vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-stone-50 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)] z-10"></div>
        <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply z-10"></div>

        <div className="container relative z-30 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-emerald-400 font-sans tracking-[0.5em] uppercase text-[10px] font-bold inline-block border-b-2 border-emerald-500/50 pb-3 mb-10 drop-shadow-sm">
              Since 2018 • Pune, India
            </span>
          </motion.div>

          <div className="max-w-6xl mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-7xl md:text-9xl lg:text-[11rem] font-sans font-bold text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
            >
              The Science of <br />
              <span className="italic font-light text-white/80">Deep Healing</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-3xl text-white/70 max-w-4xl leading-relaxed font-light drop-shadow-lg"
          >
            We don't just teach yoga; we provide clinical protocols for internal correction and hormonal balance.
          </motion.p>
        </div>

        {/* Ambient Zen Sparkle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] z-10 pointer-events-none"></div>

        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-20"></div>
      </section>

      {/* Visual Story Timeline - Light Theme */}
      <section className="py-24 md:py-32 bg-stone-50 relative">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">Our Origins</span>
                <h2 className="font-sans text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight">
                  A Sanctuary Born from <br />
                  <span className="italic font-light text-slate-500">Personal Necessity</span>
                </h2>
              </div>

              <div className="space-y-8 text-slate-600 leading-relaxed font-light text-xl">
                <p>
                  Arogya Raksha (meaning "health protection" in Sanskrit) was founded on the principle that yoga is not just an exercise class—it is definitive medicine.
                </p>
                <p>
                  Our founder witnessed firsthand how clinical, therapeutic yoga transformed her family's health, specifically in managing PCOS and age-related mobility issues where conventional approaches struggled.
                </p>
                <p className="border-l-4 border-emerald-500 pl-8 py-2 italic text-slate-900 font-medium">
                  "Today, we stand as Pune's premier sanctuary dedicated strictly to internal correction and life-changing vitality."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
            >
              <Image
                src="https://images.unsplash.com/photo-1593810450967-f9c42732e326"
                alt="Therapeutic Practice"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Values Grid - Light Theme */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-slate-100">
        <div className="container relative z-10 max-w-7xl">
          <div className="max-w-3xl mb-20 space-y-6">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">The Tenets</span>
            <h2 className="font-sans text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight">
              Our Clinical <br />
              <span className="italic font-light text-slate-500">Pillars</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-stone-50 p-12 rounded-[2.5rem] border border-slate-100 group hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-sans font-bold text-3xl mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors">{value.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Premium Instructor Gallery - Fixed Dark Transition */}
      <section className="py-24 md:py-40 bg-slate-950 relative overflow-hidden">
        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="space-y-6">
              <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-[10px]">The Mentors</span>
              <h2 className="font-sans text-5xl md:text-7xl text-white leading-[1.1] tracking-tight">
                Guided by <br />
                <span className="italic font-light text-slate-500">Clinical Experts</span>
              </h2>
            </div>
            <p className="text-slate-400 font-light max-w-md text-xl leading-relaxed">
              Our therapists combine traditional wisdom with modern metabolic research to deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale-0 contrast-110 hover:contrast-125 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>

                  <div className="absolute bottom-10 left-10">
                    <h3 className="font-sans text-3xl text-white mb-2 font-bold">{member.name}</h3>
                    <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase">{member.role}</p>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed font-light text-lg px-2 group-hover:text-slate-200 transition-colors duration-500">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA - Light Theme Transition */}
      <section className="py-24 md:py-40 bg-stone-50 border-t border-slate-100">
        <div className="container max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="font-sans text-6xl md:text-8xl text-slate-900 leading-[1] tracking-tight font-bold">
              Ready to <span className="italic font-light text-slate-500">Restore</span> Your Vitality?
            </h2>
            <p className="text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Your recovery journey starts with a clinical consultation. Meet our therapists and find your pathway.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-bold tracking-widest uppercase text-xs shadow-2xl shadow-emerald-900/20 hover:bg-emerald-700 hover:scale-105 transition-all group"
              >
                Schedule Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
