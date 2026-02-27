'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ArrowRight, Instagram, Facebook, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
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
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-6 md:px-12 golden-sandwich",
          scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="container-fluid flex items-center justify-between mx-auto">
          {/* Logo / Brand Name */}
          <Link href="/" className="relative z-50 flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Arogya Raksha Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <div className="flex flex-col">
              <div className="flex items-center text-xl md:text-2xl font-sans font-bold tracking-tight leading-none">
                <span className="text-white">Arogya</span>
                <span className="text-primary">Raksha</span>
              </div>
              <span className="text-[8px] md:text-[10.5px] uppercase tracking-[0.5em] text-white/60 font-medium">Yoga & Therapy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 relative z-50 font-sans">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-white/90 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full font-bold text-[14px] transition-all shadow-md hover:shadow-primary/20 bg-primary text-white hover:bg-primary/90 uppercase tracking-widest"
            >
              Book a Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2 transition-colors relative z-50", "text-white")}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={28} />}
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
            className="fixed inset-0 bg-background z-40 md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6 text-center">
              {navItems.map((item) => (
                <motion.div key={item.href} variants={linkVariants} className="w-full">
                  <Link
                    href={item.href}
                    className="text-4xl font-sans font-bold text-white hover:text-primary transition-colors block py-2 border-b border-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="mt-6 w-full max-w-[300px]">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  Start Healing
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Socials */}
            <motion.div
              variants={linkVariants}
              className="absolute bottom-12 flex gap-8 text-white/50"
            >
              <a href="https://www.instagram.com/arogyaraksha_pimple_saudagar/?hl=en" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Instagram size={28} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={28} /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
