'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useSpring, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasStarted, setHasStarted] = useState(false)

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
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
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-10 lg:py-0">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/hero.jpeg.png"
          alt="Arogya Raksha Yoga Therapy"
          fill
          className="hidden md:block object-cover object-center scale-105 animate-[float_20s_ease-in-out_infinite]"
          priority
          quality={90}
        />
        {/* Mobile Image */}
        <Image
          src="/hero-mobile.png"
          alt="Arogya Raksha Yoga Therapy Mobile"
          fill
          className="block md:hidden object-cover object-center scale-105 animate-[float_20s_ease-in-out_infinite]"
          priority
          quality={90}
        />
        {/* Fresh Light Overlay and Cinematic Gradients */}
        <div className="absolute inset-0 bg-white/40 z-10 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-primary/5 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 mix-blend-soft-light z-10"></div>
      </div>

      <div className="container relative z-20 pt-16 pb-8 md:pt-32 md:pb-20 mt-4 lg:mt-0 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Main Typography & Trust Indicators */}
          <div className="flex flex-col items-start text-left lg:col-span-7 xl:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-sans font-bold text-heading leading-[1.1] tracking-tight drop-shadow-sm mb-3 md:mb-5"
            >
              Heal Your Body, <br className="hidden md:block" />
              <span className="italic font-light text-primary">Transform Your Life.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-[15px] sm:text-base md:text-lg lg:text-xl text-foreground font-light leading-relaxed drop-shadow-sm mb-6 md:mb-10 max-w-2xl"
            >
              A holistic lifestyle therapy and medical wellness program designed to correct posture, treat PCOS, support seniors, and restore natural hormonal balance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full border-t border-primary/20 pt-6 md:pt-8"
            >
              {[
                { value: 500, suffix: "+", label: "Happy Clients", color: "text-primary" },
                { value: 10, suffix: "+", label: "Years Exp.", color: "text-primary" },
                { value: 4, suffix: "", label: "Batches", color: "text-primary" },
                { value: 100, suffix: "%", label: "Natural", color: "text-primary" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className={`font-sans font-bold text-3xl mb-1 ${stat.color} drop-shadow-sm`}>
                    <AnimatedCounter value={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-5 xl:col-span-4 xl:col-start-9 w-full mt-2 lg:mt-0"
          >
            <div className="flex flex-col gap-4 sm:gap-5 bg-white/70 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 relative overflow-hidden group hover:border-primary/30 transition-colors">
              {/* Decorative blob inside CTA card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000"></div>

              <div className="text-center mb-1 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-heading mb-1.5 sm:mb-2 tracking-tight">Begin Your Journey</h3>
                <p className="text-[13px] sm:text-sm text-foreground/80 font-light leading-relaxed">Schedule a consultation or join our specialized batches to start healing naturally.</p>
              </div>

              <div className="flex flex-col gap-4 relative z-10 mt-4">
                <Link
                  href="/contact"
                  className="group relative w-full overflow-hidden rounded-full bg-primary px-6 py-4 font-bold tracking-widest uppercase text-[12px] sm:text-sm text-white transition-all hover:scale-[1.02] hover:bg-primary/90 hover:shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book a Session
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  href="/programs"
                  className="group w-full px-6 py-4 rounded-full border border-primary/20 bg-white/50 hover:bg-white text-heading font-bold tracking-widest uppercase text-[12px] sm:text-sm backdrop-blur-sm transition-all hover:shadow-md flex items-center justify-center text-center"
                >
                  Explore Batches
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
