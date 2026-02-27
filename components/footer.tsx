'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Instagram, Facebook, ArrowRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden golden-sandwich">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Brand & Mission - 4 cols */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="p-2 bg-white rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/images/logo.png"
                  alt="Arogya Raksha Logo"
                  width={60}
                  height={60}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-2xl leading-none text-white tracking-tight">Arogya Raksha</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-500 font-bold mt-1">Yoga & Therapy</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              Restoring internal balance through authentic therapeutic yoga. We focus on long-term healing and sustainable wellness.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yoga_with_shankar/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/917030705472"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Programs - 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-white mb-8">Programs</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><Link href="/services/pcos-hormonal-therapy-yoga" className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />PCOS Therapy</Link></li>
              <li><Link href="/services/senior-citizen-mobility" className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Senior Citizen</Link></li>
              <li><Link href="/services/therapeutic-weight-loss" className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Weight Loss</Link></li>
              <li><Link href="/programs" className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Daily Batches</Link></li>
              <li><Link href="/programs" className="hover:text-emerald-500 transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />Yoga Therapy</Link></li>
            </ul>
          </div>

          {/* Studio Info - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-white mb-8">Studio</h4>
            <div className="space-y-6 text-slate-400 font-light">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-emerald-600 shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Kate Vasti, Kunj Colony,<br />
                  Pimple Saudagar, Pune,<br />
                  Maharashtra 411027
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} className="text-emerald-600 shrink-0" />
                <a href="tel:+917030705472" className="hover:text-emerald-500 transition-colors tracking-tight">+91 70307 05472</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-emerald-600 shrink-0" />
                <a href="mailto:contact@arogyayoga.com" className="hover:text-emerald-500 transition-colors">contact@arogyayoga.com</a>
              </div>
            </div>
          </div>

          {/* Hours - 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-bold text-sm uppercase tracking-[0.2em] text-white mb-8">Schedule</h4>
            <div className="space-y-4 text-slate-400 font-light">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span>Mon - Sat (Morning)</span>
                <span className="font-bold text-white">6:00 – 10:30 AM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span>Mon - Sat (Evening)</span>
                <span className="font-bold text-white">4:30 – 8:30 PM</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Sunday</span>
                <span className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Workshops only</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-sm font-light">
            © {currentYear} Arogya Raksha Yoga. Crafted for healing. {' '}
            <span className="opacity-50 mx-1">|</span> Powered by {' '}
            <a href="https://www.techsarthiservices.in/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors font-medium">Techsarthi</a>
          </p>
          <div className="flex gap-8 text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
