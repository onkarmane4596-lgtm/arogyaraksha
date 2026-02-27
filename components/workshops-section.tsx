'use client'

import { motion } from 'framer-motion'
import { Eye, Smile, Droplets, TrendingUp, HeartPulse, Music, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const workshops = [
    {
        title: "Eye Workshop",
        description: "Specialized exercises to improve vision, reduce eye strain, and relax optic nerves.",
        icon: Eye,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        glow: "group-hover:shadow-blue-200/30"
    },
    {
        title: "Face Yoga",
        description: "Natural techniques to tone facial muscles, stimulate collagen, and achieve a radiant glow.",
        icon: Smile,
        color: "text-pink-600",
        bg: "bg-pink-50",
        border: "border-pink-100",
        glow: "group-hover:shadow-pink-200/30"
    },
    {
        title: "Shuddhikriya",
        description: "Ancient yogic cleansing techniques to purify the respiratory and digestive systems.",
        icon: Droplets,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        glow: "group-hover:shadow-emerald-200/30"
    },
    {
        title: "Weight Gain",
        description: "Healthy, holistic approaches combining specific asanas and diet focus for sustainable weight gain.",
        icon: TrendingUp,
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-100",
        glow: "group-hover:shadow-green-200/30"
    },
    {
        title: "Medical Yoga",
        description: "Therapeutic interventions tailored for specific physiological or structural health conditions.",
        icon: HeartPulse,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-100",
        glow: "group-hover:shadow-rose-200/30"
    },
    {
        title: "Sound Healing",
        description: "Immersive auditory experiences utilizing vibrations to restore mental and emotional harmony.",
        icon: Music,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-100",
        glow: "group-hover:shadow-indigo-200/30"
    },
]

export function WorkshopsSection() {
    return (
        <section className="py-24 md:py-32 bg-[#fafaf9] relative overflow-hidden border-y border-slate-200/60">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600"
                    >
                        Specialized Focus
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight"
                    >
                        Advanced Healing <br className="hidden md:block" />
                        <span className="italic font-light text-slate-500">Workshops</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    >
                        Deep dive into specific healing modalities designed to address profound wellness needs with expert guidance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {workshops.map((workshop, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200/60 hover:border-emerald-200/50 shadow-sm hover:shadow-2xl ${workshop.glow} transition-all duration-500 ease-out hover:-translate-y-2`}
                        >
                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl ${workshop.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    <workshop.icon size={32} className={workshop.color} />
                                </div>

                                <h3 className="font-sans font-bold text-2xl text-slate-900 mb-4 tracking-tight">
                                    {workshop.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed font-light">
                                    {workshop.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* WhatsApp CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 flex flex-col items-center text-center space-y-8"
                >
                    <div className="flex items-center gap-4 text-slate-400">
                        <div className="h-px w-12 bg-slate-200"></div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Interested in a Workshop?</span>
                        <div className="h-px w-12 bg-slate-200"></div>
                    </div>

                    <Link
                        href="https://wa.me/917030705472?text=Hello!%20I%20am%20interested%20in%20your%20Specialized%20Healing%20Workshops.%20Could%20you%20please%20provide%20more%20details%3F"
                        target="_blank"
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-bold tracking-widest uppercase text-sm shadow-2xl shadow-emerald-700/20 hover:bg-emerald-700 hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <MessageCircle size={20} className="fill-current" />
                            Inquire via WhatsApp
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
