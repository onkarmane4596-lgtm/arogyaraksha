'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const mantras = [
    "Arogyaraksha Yoga Pune",
    "Arogyaraksha Yoga Pune",
    "Arogyaraksha Yoga Pune",
    "Arogyaraksha Yoga Pune",
    "Arogyaraksha Yoga Pune",
    "Arogyaraksha Yoga Pune"
]

export function ScrollStrip() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Move text from right to left
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000])
    // Move slightly differently for a parallax feel if we had two rows, but for a single strip we'll just use one strong motion

    return (
        <div
            ref={containerRef}
            className="relative h-24 md:h-32 bg-slate-950 flex items-center overflow-hidden z-20 -rotate-1 scale-105 select-none"
        >
            <motion.div
                style={{ x: x1 }}
                className="flex whitespace-nowrap gap-12 md:gap-24 items-center pl-10"
            >
                {[...mantras, ...mantras].map((text, i) => (
                    <span
                        key={i}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white/10 italic"
                    >
                        {text}
                        <span className="ml-12 md:ml-24 inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-500/30" />
                    </span>
                ))}
            </motion.div>

            {/* Subtle glow edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        </div>
    )
}
