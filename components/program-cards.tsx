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
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Texture/Accents - Soft Slate */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-slate.svg')] bg-[length:40px_40px] opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="max-w-3xl mb-16 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        Our Programs
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-4xl md:text-5xl lg:text-7xl text-slate-900 mb-6 leading-[1.1] tracking-tight"
                    >
                        Tailored Paths to <br /><span className="italic font-light text-slate-500">Holistic Wellness</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed"
                    >
                        Choose the program that resonates with your current needs. From core strength to hormonal balance, we guide you at every step.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-100 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-700"></div>
                                <div className="relative bg-stone-50 border border-slate-100 rounded-[2.5rem] p-10 h-full flex flex-col hover:border-emerald-100 transition-all duration-500 shadow-xl shadow-slate-200/40">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-[1.25rem] bg-white border border-slate-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 ease-out shadow-sm">
                                            <Icon size={32} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 border border-slate-100 px-4 py-1.5 rounded-full group-hover:border-emerald-200 group-hover:text-emerald-700 transition-colors">
                                            {program.duration}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-sans font-bold mb-4 text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">{program.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-light mb-10 flex-grow text-lg">
                                        {program.description}
                                    </p>

                                    <div className="space-y-5">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest bg-white p-4 rounded-2xl border border-slate-50 shadow-sm">
                                            <Clock size={16} className="text-emerald-600" />
                                            <span>{program.timing}</span>
                                        </div>
                                        <Link
                                            href={waUrl}
                                            target="_blank"
                                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-emerald-600 text-white rounded-2xl font-bold tracking-widest uppercase text-xs shadow-lg shadow-emerald-700/20 hover:bg-emerald-700 transition-all group/btn"
                                        >
                                            Inquire Now
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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
                    className="mt-20 flex flex-col items-center text-center space-y-8"
                >
                    <div className="flex items-center gap-4 text-slate-400">
                        <div className="h-px w-12 bg-slate-200"></div>
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Take the First Step</span>
                        <div className="h-px w-12 bg-slate-200"></div>
                    </div>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold tracking-widest uppercase text-sm shadow-2xl shadow-slate-950/20 hover:bg-emerald-600 hover:scale-105 transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Consult Our Experts & Enroll Now
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
