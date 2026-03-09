'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { MapPin, Phone, Mail, Clock, ChevronDown, ArrowRight } from 'lucide-react'
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
    <div className="space-y-3 md:space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "bg-card/50 backdrop-blur-sm rounded-[1.5rem] border transition-all duration-300 overflow-hidden",
            openIndex === index ? "border-primary/30 shadow-xl shadow-primary/5" : "border-primary/10 hover:border-primary/20"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-5 py-4 md:px-6 md:py-5 flex items-center justify-between gap-4 group"
          >
            <span className={cn(
              "font-semibold text-base md:text-lg transition-colors duration-200",
              openIndex === index ? "text-primary" : "text-heading group-hover:text-primary/80"
            )}>
              {faq.question}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 md:w-5 md:h-5 text-foreground/40 transition-transform duration-300 flex-shrink-0",
                openIndex === index ? "rotate-180 text-primary" : ""
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
                <div className="px-5 pb-4 pt-1 md:px-6 md:pb-5 text-[14px] md:text-base text-foreground/70 font-light leading-relaxed">
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
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Header />

      {/* Immersive Zen-Medical Hero - Contact */}
      <section className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Desktop Image */}
          <Image
            src="/images/2.jpg"
            alt="Wellness Reception"
            fill
            className="hidden md:block object-cover object-center"
            priority
          />
          {/* Mobile Image */}
          <Image
            src="/hero-mobile.png"
            alt="Wellness Reception Mobile"
            fill
            className="block md:hidden object-cover object-center"
            priority
          />
        </motion.div>

        {/* Premium Overlays for Depth & Focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(111,166,162,0.05)_100%)] z-10"></div>
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10"></div>

        <div className="container relative z-30 flex flex-col items-center text-center mt-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-primary font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold inline-block border-b-2 border-primary/20 pb-2 md:pb-3 mb-6 md:mb-10 drop-shadow-sm">
              Direct Connection
            </span>
          </motion.div>

          <div className="max-w-5xl w-full mb-6 md:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-bold text-heading tracking-tight drop-shadow-sm leading-[1.05]"
            >
              Let's <span className="italic font-light text-heading/90">Heal</span> <br />
              Together
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-light drop-shadow-sm"
          >
            Have questions about our therapeutic programs? We're here to guide your wellness journey.
          </motion.p>
        </div>

        {/* Ambient Zen Sparkle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] z-10 pointer-events-none"></div>

        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      </section>

      {/* Two Column Layout: Contact Info & FAQs - Light Theme */}
      <section className="py-16 md:py-24 relative z-10 bg-secondary/5 border-y border-primary/10 px-4 md:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">

            {/* Left Column: Contact Details (Premium Light Cards) */}
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Reach Out</span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
                  Get in <span className="italic font-light text-primary">Touch</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Address Card */}
                <div className="bg-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 flex gap-4 md:gap-6 items-start group hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-background border border-primary/10 rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm text-primary">
                    <MapPin className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg md:text-2xl mb-2 md:mb-4 text-heading transition-colors group-hover:text-primary">Studio Location</h3>
                    <p className="text-foreground/80 font-light leading-relaxed mb-4 text-[14px] md:text-[16px]">
                      Main gate, opposite Kundan Estate,<br />
                      Kate Vasti, Kunj Colony, Pimple Saudagar,<br />
                      Pune, Maharashtra 411027
                    </p>
                    <p className="text-primary font-bold text-[9px] md:text-[10px] tracking-widest uppercase bg-primary/10 inline-block px-3 py-1 rounded-full">
                      Pimpri-Chinchwad & Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Phone Card */}
                  <div className="bg-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 flex flex-col gap-4 md:gap-6 items-start group hover:border-primary/30 transition-all duration-500">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-background border border-primary/10 rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm text-primary">
                      <Phone className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base md:text-xl mb-1 md:mb-3 text-heading">Phone</h3>
                      <p className="text-foreground/80 font-light text-[14px] md:text-[16px]">
                        <a href="tel:+917030705472" className="hover:text-primary transition-colors">
                          +91 70307 05472
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="bg-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 flex flex-col gap-4 md:gap-6 items-start group hover:border-primary/30 transition-all duration-500">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-background border border-primary/10 rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm text-primary">
                      <Mail className="w-4 h-4 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base md:text-xl mb-1 md:mb-3 text-heading">Email</h3>
                      <p className="text-foreground/80 font-light text-[14px] md:text-[16px] break-all">
                        <a href="mailto:arogyarakshayoga@gmail.com" className="hover:text-primary transition-colors">
                          arogyarakshayoga<br className="hidden md:block" />@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="bg-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10 flex gap-4 md:gap-6 items-start group hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-background border border-primary/10 rounded-[1rem] md:rounded-[1.25rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm text-primary">
                    <Clock className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-grow w-full">
                    <h3 className="font-sans font-bold text-lg md:text-2xl mb-4 md:mb-6 text-heading group-hover:text-primary">Studio Hours</h3>
                    <div className="space-y-2 md:space-y-4 text-[13px] md:text-[15px]">
                      <div className="flex justify-between items-center py-2 md:py-3 border-b border-background">
                        <span className="text-foreground/50 font-medium tracking-wider uppercase text-[9px] md:text-[10px]">Mon - Fri</span>
                        <span className="text-heading font-medium md:font-bold">6:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 md:py-3 border-b border-background">
                        <span className="text-foreground/50 font-medium tracking-wider uppercase text-[9px] md:text-[10px]">Saturday</span>
                        <span className="text-heading font-medium md:font-bold">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center py-2 md:py-3 cursor-default group/workshop">
                        <span className="text-foreground/50 font-medium tracking-wider uppercase text-[9px] md:text-[10px]">Sunday</span>
                        <span className="text-primary font-bold uppercase text-[10px] md:text-[11px] group-hover/workshop:text-primary/70 transition-colors">Workshops Only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: FAQ Accordion - Re-styled for Light Theme */}
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-3 md:space-y-4 mt-8 lg:mt-0">
                <span className="text-primary font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">Clarifications</span>
                <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight">
                  Frequently Asked <br />
                  <span className="italic font-light text-primary">Questions</span>
                </h2>
              </div>
              <div className="bg-card p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-primary/10">
                <FAQAccordion />

                <div className="mt-8 md:mt-10 p-6 md:p-8 bg-background rounded-[1.5rem] md:rounded-[2rem] border border-primary/10">
                  <h4 className="font-sans font-bold text-heading text-[15px] md:text-lg mb-1 md:mb-2">Still have questions?</h4>
                  <p className="text-foreground/60 font-light mb-4 md:mb-6 text-[13px] md:text-[15px]">Our therapists are available for a detailed 1-on-1 discovery call.</p>
                  <Link href="tel:+917030705472" className="text-primary font-bold uppercase tracking-[0.2em] md:tracking-widest text-[9px] md:text-[10px] hover:text-primary/80 transition-colors flex items-center gap-2 group">
                    Call our studio <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Inquiry Form Wrapper - Light Fade to Light Form */}
      <section className="bg-card pt-16 md:pt-24 border-t border-primary/10 px-4 md:px-8">
        <div className="container max-w-5xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-heading leading-[1.1] tracking-tight mb-4 md:mb-6">
            Start Your <span className="italic font-light text-primary">Inquiry</span>
          </h2>
          <p className="text-[15px] md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our medical coordinators will get back to you within 24 hours.
          </p>
        </div>
        <div className="bg-background rounded-t-[2rem] md:rounded-t-[4rem] overflow-hidden pt-8 md:pt-12 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border border-b-0 border-primary/10">
          <InquiryForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
