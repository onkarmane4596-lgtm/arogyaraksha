'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InquiryForm() {
  const handleWhatsAppClick = () => {
    const text = "Hi! I'm interested in starting my therapeutic yoga journey."
    const encodedText = encodeURIComponent(text)
    const whatsappNumber = '917030705472'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background Decor - Organic Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 block mb-4">
              Take the First Step
            </span>
            <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight text-balance">
              Start Your Healing <br className="hidden md:block" />
              <span className="italic font-light text-slate-400">Journey Today.</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            We are here to listen. Reach out to us directly on WhatsApp to discuss your health concerns, goals, or to book a trial class.
          </p>

          <div className="pt-8 flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-emerald-600 text-white rounded-[2rem] font-bold tracking-widest uppercase shadow-[0_20px_40px_-15px_rgba(5,150,105,0.6)] hover:bg-emerald-700 hover:shadow-[0_20px_50px_-10px_rgba(5,150,105,0.8)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 block h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer pointer-events-none"></div>

              <span className="relative z-10 text-lg md:text-xl">Chat on WhatsApp</span>

              <div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>

          <p className="text-sm text-slate-400 font-light mt-8">
            Usually replies within a few hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}

