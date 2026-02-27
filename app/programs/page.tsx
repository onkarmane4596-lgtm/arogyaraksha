'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProgramCards } from '@/components/program-cards'
import { ScheduleSection } from '@/components/schedule-section'
import { WorkshopsSection } from '@/components/workshops-section'
import { PaymentSection } from '@/components/payment-section'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProgramsPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white selection:bg-emerald-100">
            <Header />
            <div className="flex-1 w-full">
                {/* Immersive Zen-Medical Hero - Programs */}
                <section className="relative h-[80vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.5 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src="/images/headers/programs-hero.png"
                            alt="Therapeutic Programs"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </motion.div>

                    {/* Premium Overlays for Depth & Focus */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-white z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)] z-10"></div>
                    <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply z-10"></div>

                    <div className="container relative z-30 flex flex-col items-center text-center mt-20">
                        {/* Eye-catching Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-emerald-400 font-sans tracking-[0.5em] uppercase text-xs font-bold inline-block border-b-2 border-emerald-500/50 pb-3 mb-10 drop-shadow-sm">
                                Clinical & Therapeutic
                            </span>
                        </motion.div>

                        {/* Massive Immersive Typography */}
                        <div className="max-w-6xl w-full mb-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-7xl md:text-9xl lg:text-[11rem] font-sans font-bold text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
                            >
                                Curated <br />
                                <span className="italic font-light text-white/80">Pathways</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-xl md:text-3xl text-white/70 max-w-4xl leading-relaxed font-light drop-shadow-lg"
                        >
                            Specialized therapeutic regimens meticulously designed for your unique physiological needs.
                        </motion.p>
                    </div>

                    {/* Ambient Zen Sparkle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] z-10 pointer-events-none"></div>
                </section>

                <ProgramCards />

                <div className="bg-stone-50 border-t border-slate-100">
                    <ScheduleSection />
                </div>

                <div className="bg-white border-t border-slate-100">
                    <PaymentSection />
                </div>

                <div className="bg-stone-50 border-t border-slate-100 font-sans">
                    <WorkshopsSection />
                </div>
            </div>
            <Footer />
        </main>
    )
}
