'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-primary/20 relative overflow-hidden golden-sandwich">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24">

          {/* Brand & Mission - 4 cols */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <Link href="/" className="flex items-center gap-3 md:gap-4 group">
              <div className="p-1.5 md:p-2 bg-white rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/images/logo.png"
                  alt="Arogya Raksha Logo"
                  width={60}
                  height={60}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-xl md:text-2xl leading-none text-heading tracking-tight">Arogya Raksha</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary font-bold mt-1">Yoga & Therapy</span>
              </div>
            </Link>
            <p className="text-foreground/80 leading-relaxed text-[15px] md:text-lg font-light">
              Restoring internal balance through authentic therapeutic yoga. We focus on long-term healing and sustainable wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/arogyaraksha_pimple_saudagar/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/50 border border-primary/10 flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/917030705472"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/50 border border-primary/10 flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Batches - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-heading mb-5 md:mb-8">Batches</h4>
            <ul className="space-y-3 md:space-y-4 text-foreground/80 font-light text-[15px] md:text-base">
              <li><Link href="/services/regular-yoga-practice" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Regular Yoga</Link></li>
              <li><Link href="/services/pcos-hormonal-therapy-yoga" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />PCOD/PCOS</Link></li>
              <li><Link href="/services/senior-citizen-mobility" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Senior Citizen</Link></li>
              <li><Link href="/services/therapeutic-weight-loss" className="hover:text-primary transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Fat Reduction</Link></li>
            </ul>
          </div>

          {/* Studio Info - 3 cols */}
          <div className="lg:col-span-3 mt-4 md:mt-0">
            <h4 className="font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-heading mb-5 md:mb-8">Studio</h4>
            <div className="space-y-4 md:space-y-6 text-foreground/80 font-light text-[15px] md:text-base">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Kate Vasti, Kunj Colony,<br />
                  Pimple Saudagar, Pune,<br />
                  Maharashtra 411027
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+917030705472" className="hover:text-primary transition-colors tracking-tight">+91 70307 05472</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:contact@arogyayoga.com" className="hover:text-primary transition-colors">contact@arogyayoga.com</a>
              </div>
            </div>
          </div>

          {/* Hours - 3 cols */}
          <div className="lg:col-span-3 mt-4 md:mt-0">
            <h4 className="font-sans font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-heading mb-5 md:mb-8">Schedule</h4>
            <div className="space-y-3 md:space-y-4 text-foreground/80 font-light text-[14px] md:text-base">
              <div className="flex justify-between border-b border-primary/10 pb-3">
                <span>Mon - Sat (Morning)</span>
                <span className="font-bold text-heading">6:00 – 10:30 AM</span>
              </div>
              <div className="flex justify-between border-b border-primary/10 pb-3">
                <span>Mon - Sat (Evening)</span>
                <span className="font-bold text-heading">4:30 – 8:30 PM</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Sunday</span>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">Workshops only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <p className="text-foreground/50 text-xs md:text-sm font-light text-center md:text-left">
            © {currentYear} Arogya Raksha Yoga. Crafted for healing. <br className="md:hidden" />
            <span className="opacity-50 mx-1 hidden md:inline">|</span> Powered by {' '}
            <a href="https://www.techsarthiservices.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Techsarthi</a>
          </p>

        </div>
      </div>
    </footer>
  )
}
