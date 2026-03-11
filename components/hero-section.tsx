'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  motion,
  useSpring,
  useTransform,
  useInView,
  useScroll
} from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasStarted, setHasStarted] = useState(false)

  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30
  })

  const display = useTransform(spring, (current) => Math.round(current))

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true)
      spring.set(value)
    }
  }, [isInView, value, spring, hasStarted])

  return <motion.span ref={ref}>{display}</motion.span>
}

export function HeroSection() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-10 lg:py-0"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero.jpeg.png"
          alt="Arogya Raksha Yoga Therapy"
          fill
          priority
          quality={90}
          className="hidden md:block object-cover object-center scale-110"
        />

        <Image
          src="/hero-mobile.png"
          alt="Arogya Raksha Yoga Therapy Mobile"
          fill
          priority
          quality={90}
          className="block md:hidden object-cover object-center scale-110"
        />

        {/* LIGHT BRAND ATMOSPHERE */}
        <div className="absolute inset-0 bg-white/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,transparent_100%)] z-10"></div>
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10"></div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="container relative z-20 pt-16 pb-8 md:pt-36 md:pb-16 flex flex-col justify-center items-center"
      >
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          <div className="flex flex-col items-center text-center mb-6 md:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-heading leading-[1.05] tracking-tight mb-3 md:mb-4"
            >
              Transform Your Life Through{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-heading to-primary inline-block py-1.5 px-1">
                Yoga.
              </span>
              <br />
              <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-heading to-primary inline-block py-1.5 px-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                Build strength, improve flexibility, and discover inner peace.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[14px] sm:text-base md:text-lg lg:text-xl text-heading/80 font-medium leading-relaxed mb-8 md:mb-10 max-w-4xl"
            >
              A healthier, happier you starts right here.
            </motion.p>

            {/* STATS */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full pt-6 border-t border-primary/20 max-w-2xl">
              <div className="flex flex-col items-center">
                <div className="font-bold text-3xl md:text-5xl mb-0.5 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent py-1">
                  <AnimatedCounter value={1000} />+
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-heading/50">
                  Happy Clients
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="font-bold text-3xl md:text-5xl mb-0.5 bg-gradient-to-r from-heading to-primary bg-clip-text text-transparent py-1">
                  <AnimatedCounter value={10} />+
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-heading/50">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8 bg-white/70 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-white/70 relative overflow-hidden group">
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-heading mb-2 tracking-tight group-hover:text-primary transition-colors">
                  Begin Your Journey
                </h3>

                <p className="text-sm md:text-base text-heading/70">
                  Schedule a consultation or join our specialized batches to
                  start healing naturally.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-heading to-primary text-white rounded-full font-bold tracking-widest uppercase text-[12px] shadow-2xl hover:scale-105 transition-all"
                >
                  Join Our Classes
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/programs"
                  className="px-6 py-3 rounded-full border border-primary/10 bg-white/50 hover:bg-white text-heading/70 hover:text-primary font-bold tracking-widest uppercase text-[10px] backdrop-blur-sm transition-all text-center"
                >
                  Explore Batches
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}