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
                <section className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-background">
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
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(111,166,162,0.05)_100%)] z-10"></div>
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10"></div>

                    <div className="container relative z-30 flex flex-col items-center text-center mt-20 px-4">
                        {/* Eye-catching Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-primary font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold inline-block border-b-2 border-primary/20 pb-2 md:pb-3 mb-6 md:mb-10 drop-shadow-sm">
                                Clinical & Therapeutic
                            </span>
                        </motion.div>

                        <div className="max-w-5xl w-full mb-6 md:mb-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-bold text-heading tracking-tight drop-shadow-sm leading-[1.05]"
                            >
                                Curated <br />
                                <span className="italic font-light text-heading/90">Pathways</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-base md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-light drop-shadow-sm"
                        >
                            Specialized therapeutic regimens meticulously designed for your unique physiological needs.
                        </motion.p>
                    </div>

                    {/* Ambient Zen Sparkle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] z-10 pointer-events-none"></div>
                </section>

                <ProgramCards />

                <div className="bg-secondary/5 border-t border-primary/10">
                    <ScheduleSection />
                </div>

                <div className="bg-background border-t border-primary/10">
                    <PaymentSection />
                </div>

                <div className="bg-secondary/5 border-t border-primary/10 font-sans">
                    <WorkshopsSection />
                </div>
            </div>
            <Footer />
        </main>
    )
}
