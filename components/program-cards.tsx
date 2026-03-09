'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Dumbbell, Heart, Users, Activity, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
    {
        title: "Regular Practice Batch",
        timing: "Multiple Batches",
        duration: "Daily",
        description: "A comprehensive, holistic daily practice designed to build strength, flexibility, and inner peace. This balanced regimen incorporates traditional practices with dynamic modern variations.",
        image: "/images/programs/programs-hero.jpg",
        features: ["Asana & Pranayama", "Meditation & Cleansing", "Dynamic Variations (Zumba, Aerobics)"],
        icon: Users,
        whatsappMsg: "Hello! I am interested in joining the Regular Practice Batch. Could you please share the details regarding the available timings and the enrollment process? Thank you!",
    },
    {
        title: "PCOD / PCOS Weight Loss",
        timing: "9:30 AM – 10:30 AM",
        duration: "1 Hour",
        description: "A specialized, 100% online program focusing on hormonal balance and natural weight management. Improve metabolism, reduce bloating, and boost your energy from the comfort of your home.",
        image: "/images/programs/pcos-therapy-new.png",
        features: ["Fat-burning Asanas", "Hormone-balancing Pranayama", "Lean Muscle Strength Training"],
        icon: Activity,
        whatsappMsg: "Hello! I'm reaching out to inquire about the PCOD / PCOS Weight Loss online program. I'd like to understand more about the sessions and any specific dietary guidance provided. Looking forward to hearing from you!",
    },
    {
        title: "Senior Citizen Batch",
        timing: "5:00 PM – 6:00 PM",
        duration: "1 Hour",
        description: "A gentle, safe, and slow-paced practice specifically designed for seniors. Incorporates chair support options and light mobility exercises to improve flexibility, reduce stiffness, and restore balance.",
        image: "/images/programs/senior-yoga-new.png",
        features: ["Relief for Knee & Back Pain", "Chair Support Options", "Safe & Slow-paced"],
        icon: Heart,
        whatsappMsg: "Hello! I am interested in the Senior Citizen Batch for my parents/myself. Could you please provide information about the gentle exercises, chair support, and the overall safety approach? Thank you!",
    },
    {
        title: "21-Day Tone & Tighten",
        timing: "Starts 10th Monthly",
        duration: "21 Days",
        description: "A short, powerful, and result-oriented intensive workshop for stubborn fat reduction. Ideal for targeted arm and thigh toning, diastasis recti recovery, and safe postpartum strengthening.",
        image: "/images/programs/weight-loss-new.png",
        features: ["Targeted Fat-burn", "Core Strengthening", "Visible Inch Loss in 21 Days"],
        icon: Dumbbell,
        whatsappMsg: "Hello! I'm interested in the 21-Day Tone & Tighten workshop starting on the 10th. Could you please share details about the target areas covered and how I can register? Thanks!",
    }
]

export function ProgramCards() {
    return (
        <section className="py-16 md:py-20 bg-background relative overflow-hidden">
            {/* Background Texture/Accents - Soft Organic */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-secondary/5 rounded-full blur-[100px] md:blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container relative z-10 px-4 md:px-8">
                <div className="max-w-3xl mb-12 md:mb-12 space-y-4 md:space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        Our Programs
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-heading mb-4 md:mb-4 leading-[1.1] tracking-tight font-bold"
                    >
                        Tailored Paths to <br /><span className="italic font-light text-primary">Holistic Wellness</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-foreground/80 font-light max-w-2xl leading-relaxed"
                    >
                        Choose the program that resonates with your current needs. From core strength to hormonal balance, we guide you at every step.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {programs.map((program, index) => {
                        const Icon = program.icon
                        const waUrl = `https://wa.me/917030705472?text=${encodeURIComponent(program.whatsappMsg)}`

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/10 rounded-[1.25rem] md:rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>
                                <div className="relative bg-card border border-primary/10 rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-7 h-full flex flex-col hover:border-primary/30 transition-all duration-500 shadow-xl shadow-primary/5">
                                    <div className="flex justify-between items-start mb-3 md:mb-6">
                                        <div className="w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-[1.25rem] bg-white border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 ease-out shadow-sm">
                                            <Icon className="w-4 h-4 md:w-8 md:h-8" />
                                        </div>
                                        <span className="text-[7px] md:text-[10px] font-bold uppercase tracking-[0.1em] md:tracking-[0.25em] text-primary border border-primary/20 bg-white px-2 mt-0.5 md:px-4 py-0.5 md:py-1 rounded-full group-hover:border-primary/40 transition-colors">
                                            {program.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-sm sm:text-lg md:text-2xl font-sans font-bold mb-1.5 md:mb-3 text-heading group-hover:text-primary transition-colors tracking-tight leading-tight">{program.title}</h3>
                                    <p className="text-foreground/80 leading-relaxed font-light mb-3 md:mb-6 flex-grow text-[10px] sm:text-[13px] md:text-base line-clamp-3 md:line-clamp-none">
                                        {program.description}
                                    </p>

                                    <div className="space-y-2.5 md:space-y-4 mt-auto">
                                        <div className="flex items-center gap-1.5 md:gap-3 text-[8px] md:text-xs font-bold text-heading uppercase tracking-widest bg-white p-2 md:p-3 rounded-lg md:rounded-xl border border-primary/10 shadow-sm whitespace-nowrap overflow-hidden">
                                            <Clock size={12} className="text-primary md:w-3.5 md:h-3.5 w-3 h-3 shrink-0" />
                                            <span className="truncate">{program.timing}</span>
                                        </div>
                                        <Link
                                            href={waUrl}
                                            target="_blank"
                                            className="w-full inline-flex items-center justify-center gap-1.5 md:gap-3 px-3 md:px-6 py-2 md:py-4 bg-gradient-to-r from-heading via-heading/90 to-primary bg-[length:200%_auto] hover:bg-right text-white rounded-lg md:rounded-xl font-bold tracking-widest uppercase text-[8px] md:text-xs shadow-md shadow-primary/20 hover:shadow-lg transition-all group/btn"
                                        >
                                            Inquire
                                            <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform md:w-3.5 md:h-3.5 w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Centered CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-16 md:mt-20 flex flex-col items-center text-center space-y-6 md:space-y-8 px-4"
                >
                    <div className="flex items-center gap-3 md:gap-4 text-primary">
                        <div className="h-px w-8 md:w-12 bg-primary/20"></div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-center">Take the First Step</span>
                        <div className="h-px w-8 md:w-12 bg-primary/20"></div>
                    </div>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-6 sm:px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-heading to-primary text-white rounded-full md:rounded-[2rem] font-bold tracking-widest uppercase text-[11px] md:text-sm shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-500 overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                            <span className="truncate">Consult Our Experts</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
