'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { MapPin, Phone, Mail, Clock, ChevronDown, ArrowRight, Activity, Play, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const faqs = [
  {
    question: "Do I need prior yoga experience?",
    answer: "No! All our programs are designed for beginners. We modify poses and provide variations for every level of experience and fitness."
  },
  {
    question: "Can I try a free trial class?",
    answer: "Yes! We offer a complimentary consultation and trial class to help you find the right program for your needs."
  },
  {
    question: "What should I wear to class?",
    answer: "Wear comfortable, breathable clothing that allows freedom of movement. You'll practice barefoot or in socks."
  },
  {
    question: "Are classes available online?",
    answer: "Yes! We offer both in-person and online classes for flexibility. Online classes provide the same personalized attention."
  },
  {
    question: "What if I have health concerns?",
    answer: "Please let us know about any injuries or health conditions. We'll provide modifications to ensure your safety."
  }
];

// Extracted FAQ Component for clean state management
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "bg-stone-50/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden",
            openIndex === index ? "border-emerald-500/30 shadow-xl shadow-emerald-900/5" : "border-slate-100 hover:border-emerald-200"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className={cn(
              "font-semibold text-lg transition-colors duration-200",
              openIndex === index ? "text-emerald-600" : "text-slate-900"
            )}>
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                "text-slate-400 transition-transform duration-300 flex-shrink-0",
                openIndex === index ? "rotate-180 text-emerald-600" : ""
              )}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 pt-1 text-slate-600 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-stone-50 selection:bg-emerald-500/20">
      <Header />

      {/* Immersive Zen-Medical Hero - Contact */}
      <section className="relative h-[80vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/headers/contact-hero.png"
            alt="Wellness Reception"
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
              Direct Connection
            </span>
          </motion.div>

          <div className="max-w-6xl mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-7xl md:text-9xl lg:text-[11rem] font-sans font-bold text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
            >
              Let's <span className="italic font-light text-white/80">Heal</span> <br />
              Together
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-3xl text-white/70 max-w-4xl leading-relaxed font-light drop-shadow-lg"
          >
            Have questions about our therapeutic programs? We're here to guide your wellness journey.
          </motion.p>
        </div>

        {/* Ambient Zen Sparkle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] z-10 pointer-events-none"></div>

        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-20"></div>
      </section>

      {/* Two Column Layout: Contact Info & FAQs - Light Theme */}
      <section className="py-24 md:py-32 relative z-10 bg-stone-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 max-w-7xl mx-auto mb-20">

            {/* Left Column: Contact Details (Premium Light Cards) */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">Reach Out</span>
                <h2 className="font-sans text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight">
                  Get in <span className="italic font-light text-slate-500">Touch</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {/* Address Card */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-8 items-start group hover:border-emerald-200 transition-all duration-500">
                  <div className="w-16 h-16 bg-stone-50 border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm text-emerald-600">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-2xl mb-4 text-slate-900 transition-colors">Studio Location</h3>
                    <p className="text-slate-600 font-light leading-relaxed mb-4 text-lg">
                      Main gate, opposite Kundan Estate,<br />
                      Kate Vasti, Kunj Colony, Pimple Saudagar,<br />
                      Pune, Maharashtra 411027
                    </p>
                    <p className="text-emerald-600 font-bold text-[10px] tracking-widest uppercase bg-emerald-50 inline-block px-3 py-1 rounded-full">
                      Pimpri-Chinchwad & Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Card */}
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 items-start group hover:border-emerald-200 transition-all duration-500">
                    <div className="w-14 h-14 bg-stone-50 border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm text-emerald-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-xl mb-3 text-slate-900">Phone</h3>
                      <p className="text-slate-600 font-light text-lg">
                        <a href="tel:+917030705472" className="hover:text-emerald-600 transition-colors">
                          +91 70307 05472
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6 items-start group hover:border-emerald-200 transition-all duration-500">
                    <div className="w-14 h-14 bg-stone-50 border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm text-emerald-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-xl mb-3 text-slate-900">Email</h3>
                      <p className="text-slate-600 font-light text-lg break-all">
                        <a href="mailto:arogyarakshayoga@gmail.com" className="hover:text-emerald-600 transition-colors">
                          arogyarakshayoga<br />@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-8 items-start group hover:border-emerald-200 transition-all duration-500">
                  <div className="w-16 h-16 bg-stone-50 border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm text-emerald-600">
                    <Clock size={28} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-sans font-bold text-2xl mb-6 text-slate-900">Studio Hours</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium tracking-wider uppercase text-[10px]">Mon - Fri</span>
                        <span className="text-slate-900 font-bold">6:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-slate-50">
                        <span className="text-slate-500 font-medium tracking-wider uppercase text-[10px]">Saturday</span>
                        <span className="text-slate-900 font-bold">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-slate-500 font-medium tracking-wider uppercase text-[10px]">Sunday</span>
                        <span className="text-emerald-600 font-bold uppercase text-xs">Workshops Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion - Re-styled for Light Theme */}
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">Clarifications</span>
                <h2 className="font-sans text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight">
                  Frequently Asked <br />
                  <span className="italic font-light text-slate-500">Questions</span>
                </h2>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                <FAQAccordion />
                <div className="mt-12 p-8 bg-stone-50 rounded-[2rem] border border-slate-100">
                  <h4 className="font-sans font-bold text-slate-900 mb-2">Still have questions?</h4>
                  <p className="text-slate-500 font-light mb-6">Our therapists are available for a detailed 1-on-1 discovery call.</p>
                  <Link href="tel:+917030705472" className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] hover:text-emerald-700 transition-colors flex items-center gap-2 group">
                    Call our studio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Reach Out? - Modified to Light/Mixed */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-7xl">
          <div className="max-w-3xl mb-20 space-y-6">
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">Incentives</span>
            <h2 className="font-sans text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight text-balance">
              Why Start a <span className="italic font-light text-slate-500">Conversation?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Personal Health Consultation", desc: "Discuss your metabolic markers or hormonal concerns privately.", icon: Activity },
              { title: "Book a Trial Session", desc: "Experience our clinical teaching approach before you commit.", icon: Play },
              { title: "Medical Documentation", desc: "Submit your reports for a therapist to review for specific variations.", icon: BookOpen },
              { title: "Program Scheduling", desc: "Clarify offline batch vacancies or online 1-on-1 availability.", icon: Clock },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="bg-stone-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 mb-8 border border-slate-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-sans font-bold text-xl mb-4 text-slate-900 transition-colors leading-tight">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form Wrapper - Dark Fade to Light Form */}
      <section className="bg-slate-950 pt-24">
        <div className="container max-w-5xl text-center mb-16">
          <h2 className="font-sans text-5xl md:text-7xl text-white leading-[1.1] tracking-tight font-bold mb-8">
            Start Your <span className="italic font-light text-emerald-500">Inquiry</span>
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our medical coordinators will get back to you within 24 hours.
          </p>
        </div>
        <div className="bg-white rounded-t-[4rem] overflow-hidden pt-12 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
