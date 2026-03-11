'use client'

import { motion } from 'framer-motion'
import { Eye, Smile, Droplets, TrendingUp, HeartPulse, Music, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const workshops = [
    {
        title: "Eye Workshop",
        description: "Specialized exercises to improve vision, reduce eye strain, and relax optic nerves.",
        image: "/images/workshops/eye.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]",
    },
    {
        title: "Face Yoga",
        description: "Natural techniques to tone facial muscles, stimulate collagen, and achieve a radiant glow.",
        image: "/images/workshops/face.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(236,72,153,0.15)]",
    },
    {
        title: "Shuddhikriya",
        description: "Ancient yogic cleansing techniques to purify the respiratory and digestive systems.",
        image: "/images/workshops/Shuddhikriya.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)]",
    },
    {
        title: "Weight Gain",
        description: "Healthy, holistic approaches combining specific asanas and diet focus for sustainable weight gain.",
        image: "/images/workshops/weight-gain.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(34,197,94,0.15)]",
    },
    {
        title: "Medical Yoga",
        description: "Therapeutic interventions tailored for specific physiological or structural health conditions.",
        image: "/images/workshops/medical-yoga.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(244,63,94,0.15)]",
    },
    {
        title: "Sound Healing",
        description: "Immersive auditory experiences utilizing vibrations to restore mental and emotional harmony.",
        image: "/images/workshops/sound-healing.png",
        glow: "group-hover:shadow-[0_8px_30px_rgb(99,102,241,0.15)]",
    },
]

export function WorkshopsSection() {
    return (
        <section className="py-16 md:py-16 bg-background/50 relative overflow-hidden border-y border-border/20">
            {/* Soft Ambient Glows (Glassmorphic vibe) */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-multiply opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-white/40 rounded-[100%] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-12 space-y-4 md:space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-primary"
                    >
                        Specialized Focus
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                        className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-heading leading-[1.1] tracking-tight"
                    >
                        Advanced Healing <br className="hidden md:block" />
                        <span className="italic font-light text-heading/70">Workshops</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-foreground/80 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Deep dive into specific healing modalities designed to address profound wellness needs with expert guidance.
                    </motion.p>
                </div>

                <div className="relative -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 pb-8 pt-4 w-full">
                        {workshops.map((workshop, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`group relative bg-white/60 backdrop-blur-xl p-3 md:p-5 rounded-[1.25rem] md:rounded-[2rem] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/90 ${workshop.glow} transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col h-full`}
                            >
                                {/* Inner ambient card glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <Link href={`https://wa.me/917030705472?text=Hello!%20I%20am%20interested%20in%20the%20${encodeURIComponent(workshop.title)}.%20Could%20you%20please%20provide%20more%20details%3F`} target="_blank" className="flex flex-col h-full">

                                        {/* Image Container */}
                                        <div className="w-full aspect-[4/5] md:aspect-[4/5] rounded-xl md:rounded-[1.25rem] overflow-hidden mb-3 md:mb-5 relative shadow-sm border border-white/60 flex-shrink-0 bg-white/40">
                                            <Image
                                                src={workshop.image}
                                                alt={workshop.title}
                                                fill
                                                className="object-cover object-top md:object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>

                                        <h3 className="font-sans font-bold text-sm md:text-xl text-heading mb-1.5 md:mb-2 tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight">
                                            {workshop.title}
                                        </h3>

                                        <p className="text-heading/70 leading-relaxed font-medium text-[10px] md:text-[15px] flex-grow line-clamp-3 md:line-clamp-none">
                                            {workshop.description}
                                        </p>

                                        <div className="mt-2 md:mt-6 flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[13px] font-bold uppercase tracking-wider text-heading/40 group-hover:text-primary transition-colors duration-300">
                                            <span>Learn more</span>
                                            <ArrowRight size={10} className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 md:w-3.5 md:h-3.5 w-[10px] h-[10px]" />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Refined CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    className="mt-16 md:mt-24 flex flex-col items-center text-center space-y-6 relative z-20"
                >
                    <div className="flex items-center gap-3 text-primary/60">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Ready to begin?</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
                    </div>

                    <Link
                        href="https://wa.me/917030705472?text=Hello!%20I%20am%20interested%20in%20your%20Specialized%20Healing%20Workshops.%20Could%20you%20please%20provide%20more%20details%3F"
                        target="_blank"
                        className="group relative inline-flex items-center justify-center p-1.5 md:p-2 bg-gradient-to-r from-heading to-primary rounded-full max-w-sm w-full sm:w-auto shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="flex items-center gap-3 md:gap-4 pl-4 pr-1">
                            <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-white">
                                Join Our Workshops
                            </span>
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:scale-105 group-hover:rotate-12 transition-transform duration-500">
                                <MessageCircle size={20} className="fill-current" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
