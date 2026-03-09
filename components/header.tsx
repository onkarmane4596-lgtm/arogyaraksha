'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, Instagram, Facebook } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Batches', href: '/programs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-2 md:top-4 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 flex justify-center",
        )}
      >
        <div
          className={cn(
            "w-full max-w-5xl flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-8 py-2 md:py-3",
            scrolled ? "bg-background/85 backdrop-blur-xl shadow-lg border border-border/40 py-2" : "bg-transparent py-3 md:py-4"
          )}
        >
          {/* Logo / Brand Name */}
          <Link href="/" className="relative z-[110] flex items-center gap-2 md:gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="bg-white/20 p-1 md:p-1.5 rounded-full backdrop-blur-md shadow-sm border border-white/30 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Arogya Raksha Logo"
                width={32}
                height={32}
                className="h-7 md:h-10 w-auto object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center text-base md:text-xl font-sans font-extrabold tracking-tight leading-none text-heading">
                Arogya<span className="text-primary ml-1">Raksha</span>
              </div>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-semibold text-heading/70 mt-0.5">Yoga & Therapy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative z-[110]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-semibold text-heading/80 hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 relative z-[110]">
            <a
              href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20booking%20a%20yoga%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[13px] transition-all bg-heading text-white hover:bg-primary shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Book a Session
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-white/50 backdrop-blur-md border border-white/40 shadow-sm text-heading z-[110] transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-background/98 backdrop-blur-2xl z-[90] md:hidden flex flex-col pt-24 pb-8 px-5 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 relative z-10 w-full mb-10">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={linkVariants} className="w-full">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-3xl font-sans font-bold text-heading hover:text-primary transition-colors py-3 border-b border-heading/10 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={24} className="text-primary/0 group-hover:text-primary transition-colors transform -translate-x-4 group-hover:translate-x-0 duration-300" />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="mt-6 w-full">
                <a
                  href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20starting%20my%20healing%20journey."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-heading to-primary text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium text-white/80 uppercase tracking-widest mb-1">Start Today</span>
                    <span>Book Your Session</span>
                  </span>
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                    <ArrowRight size={24} />
                  </div>
                </a>
              </motion.div>
            </nav>

            <div className="mt-auto">
              {/* Mobile Contact Info */}
              <motion.div variants={linkVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 mb-8">
                <h4 className="text-sm font-bold text-heading/50 uppercase tracking-wider mb-4">Get in Touch</h4>
                <a href="tel:+917030705472" className="block text-xl font-bold text-heading mb-2 hover:text-primary transition-colors">+91 7030705472</a>
                <p className="text-heading/70">Wakad, Pune</p>
              </motion.div>

              {/* Mobile Menu Socials */}
              <motion.div
                variants={linkVariants}
                className="flex items-center justify-center gap-8 text-heading/40"
              >
                <a href="https://www.instagram.com/arogyaraksha_pimple_saudagar/?hl=en" target="_blank" rel="noreferrer" className="p-4 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all"><Instagram size={24} /></a>
                <a href="#" className="p-4 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all"><Facebook size={24} /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
