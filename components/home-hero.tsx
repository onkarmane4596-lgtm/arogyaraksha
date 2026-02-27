'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PhoneCall, MessageSquare, Play, Users, Globe, Award, Heart, Mouse } from 'lucide-react'
import Image from 'next/image'

export function HomeHero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Immersive Target Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-exact-target.png"
                    alt="Arogya Raksha Yoga Serenity"
                    fill
                    className="object-cover object-center opacity-40 scale-105"
                    priority
                />

                {/* Target Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-slate-900/60 to-blue-900/50 z-10"></div>

                {/* Target Blurred Floating Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-green-500/30 rounded-full blur-[120px] z-20"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] z-20"
                ></motion.div>
            </div>

            {/* Central Content */}
            <div className="container relative z-30 flex flex-col items-center text-center px-4 pt-20">
                {/* Target Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[88px] font-poppins font-black tracking-tight leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ADE80] to-[#60A5FA] drop-shadow-2xl">
                            Arogya Raksha
                        </span>
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-white/90 font-inter font-medium max-w-2xl mx-auto leading-relaxed">
                        Every breath you take with us brings you closer to healing.
                    </p>
                </motion.div>

                {/* Target CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-6 mb-16"
                >
                    <Link
                        href="tel:+917030705472"
                        className="w-full sm:w-auto px-8 py-4 bg-[#16A34A] text-white rounded-full font-bold tracking-wide shadow-2xl hover:bg-green-700 transition-all hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <PhoneCall size={20} className="fill-current" />
                        <span>Call Now</span>
                    </Link>

                    <Link
                        href="https://wa.me/917030705472"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-[#65A30D] rounded-full font-bold tracking-wide shadow-xl hover:bg-slate-50 transition-all hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <MessageSquare size={22} className="fill-current" />
                        <span>WhatsApp Chat</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold tracking-wide hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-3"
                    >
                        <Play size={18} className="fill-current" />
                        <span>Join Online Batch</span>
                    </Link>
                </motion.div>

                {/* Target Statistics Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl"
                >
                    {[
                        { value: "2000+", label: "Students Trained", color: "text-[#4ADE80]" },
                        { value: "Pan-India", label: "Online Sessions", color: "text-[#60A5FA]" },
                        { value: "Expert", label: "Therapists", color: "text-[#FACC15]" },
                        { value: "Holistic", label: "Healing", color: "text-[#C084FC]" }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <span className={`text-3xl md:text-4xl font-poppins font-bold mb-2 ${stat.color}`}>
                                {stat.value}
                            </span>
                            <span className="text-sm text-white/70 font-medium uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Target Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            >
                <div className="flex flex-col items-center gap-2">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <Mouse className="text-white/40" size={32} strokeWidth={1.5} />
                    </motion.div>
                </div>
            </motion.div>

        </section>
    )
}
