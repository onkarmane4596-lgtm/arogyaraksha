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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg.png"
          alt="Arogya Raksha Yoga Therapy"
          fill
          className="object-cover object-center scale-105 animate-[float_20s_ease-in-out_infinite]"
          priority
        />
        {/* Sophisticated Green Overlay and Cinematic Gradients */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-secondary/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-primary/20 mix-blend-overlay z-10"></div>
      </div>

      <div className="container relative z-20 pt-32 pb-20 flex flex-col items-center text-center">

        {/* Prominent Badge - Pushed to the top */}


        {/* Main Typography */}
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans text-white leading-[1.05] tracking-tight drop-shadow-2xl"
          >
            Heal Your Body, <br className="hidden md:block" />
            <span className="italic font-light text-white/90">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg"
          >
            A holistic lifestyle therapy and medical wellness program designed to correct posture, treat PCOS, support seniors, and restore natural hormonal balance.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-white px-10 py-4 font-semibold text-primary transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/programs"
            className="group w-full sm:w-auto px-10 py-4 rounded-full border border-white/30 text-white font-medium backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/50"
          >
            Explore Our Batches
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 border-t border-white/10 pt-8 w-full max-w-5xl mx-auto"
        >
          {[
            { value: 500, suffix: "+", label: "Transformations", color: "text-emerald-400" },
            { value: 10, suffix: "+", label: "Years Experience", color: "text-amber-400" },
            { value: 4, suffix: "", label: "Specialized Programs", color: "text-sky-400" },
            { value: 100, suffix: "%", label: "Personalized Care", color: "text-rose-400" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className={`font-sans font-bold text-3xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-500 ${stat.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                <AnimatedCounter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white/70 group-hover:text-white transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
