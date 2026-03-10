'use client'

import { SEOPageLayout } from '@/components/seo-page-layout'
import { motion } from 'framer-motion'
import { Flame, Target, Dumbbell, Zap, Clock, Users, CheckCircle2, Sparkles, Activity, TrendingDown, Timer, Calendar, Heart, ShieldCheck } from 'lucide-react'

const faqs = [
    {
        question: "How is this workshop different from a regular gym?",
        answer: "Gyms often rely on high-intensity cardio that can spike cortisol. This workshop uses targeted metabolic correction and core-firing techniques that focus on internal tension and muscle toning without overwhelming the body."
    },
    {
        question: "Is it safe for new moms after a C-section?",
        answer: "Yes, once you have your doctor's clearance (typically 3-6 months post-C-section), our Diastasis Recti recovery techniques are specifically designed to safely close the abdominal gap and tighten the core."
    },
    {
        question: "What is 'inch loss' compared to weight loss?",
        answer: "Weight loss is just a number on the scale. Inch loss is physical restructuring—toning the muscles and reducing localized fat (tummy, arms, thighs) to change your silhouette and clothes size."
    }
]

const activities = [
    { icon: Flame, title: "Targeted Fat-Burn", desc: "Scientific sequences for tummy, arm, and thigh reduction." },
    { icon: Target, title: "Core Tightening", desc: "Advanced techniques to strengthen and flatten the abdominal wall." },
    { icon: ShieldCheck, title: "Postpartum Care", desc: "Safe, effective recovery for Diastasis Recti and new moms." },
    { icon: TrendingDown, title: "Inch Loss", desc: "Visible results in 21 days with metabolic restructuring." },
]

const workshopHighlights = [
    { icon: Timer, title: "30-Min Dynamic Sessions", desc: "Short, powerful, and result-oriented workouts." },
    { icon: Zap, title: "Tone & Tighten", desc: "Focus on stubborn fat and muscle definition." },
    { icon: Activity, title: "Metabolic Boost", desc: "Fire up your metabolism for 24/7 fat burning." },
]

export default function TherapeuticWeightLossPage() {
    return (
        <SEOPageLayout
            title="Tone & Tighten Workshop"
            description="Our signature 21-Day intensive program for tummy, arm, and thigh fat reduction."
            heroImage="/images/programs/weight-loss-new.png"
            eyebrow="21-Day Intensive"
            contactProgramName="Tone and Tighten Workshop"
            features={[
                { title: "21-Day Challenge", desc: "Intensive 30-minute sessions starting every month on the 10th." },
                { title: "Postpartum Recovery", desc: "Specialized focus on Diastasis Recti and new mom fitness." },
                { title: "Targeted Toning", desc: "Concentrated work on stubborn tummy, arm, and thigh fat." }
            ]}
            faqs={faqs}
            contentBlocks={
                <div className="space-y-20">
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-primary/20">
                                    Result Oriented ✨
                                </span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-heading leading-tight mb-4">
                                    21-Day Tone & <br />
                                    <span className="text-primary italic font-light">Tighten Workshop</span>
                                </h2>
                                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                    Short. Powerful. Result-Oriented. Achieve visible inch loss and regain your confidence with our targeted fat-reduction system.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {activities.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="relative p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-primary/5 shadow-xl shadow-primary/[0.02] group hover:border-primary/20 hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-sm md:text-xl font-sans font-bold text-heading mb-1.5 md:mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                                    <p className="text-[10px] md:text-[13px] font-light text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors line-clamp-3 md:line-clamp-none">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-card rounded-[2.5rem] p-8 md:p-16 border border-primary/10 shadow-3xl">
                            <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                                <div className="flex-1 lg:max-w-md">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                                            <Calendar size={20} />
                                        </div>
                                        <h3 className="text-2xl font-sans font-bold text-heading">Next Batch: 10th</h3>
                                    </div>
                                    <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                        Our workshops start fresh on the 10th of every month. Choose the session that fits your lifestyle.
                                    </p>
                                    <a
                                        href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20joining%20the%2021-Day%20Tone%20and%20Tighten%20Workshop."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-heading to-primary text-white rounded-2xl shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-1"
                                    >
                                        <Users size={20} />
                                        <span className="text-sm font-bold tracking-tight">Register For Batch</span>
                                    </a>
                                </div>

                                <div className="flex-1 space-y-4">
                                    {[
                                        { time: "6:00 AM – 6:30 AM", label: "Early Morning Batch" },
                                        { time: "7:30 PM – 8:00 PM", label: "Evening Batch" }
                                    ].map((slot, sIdx) => (
                                        <motion.div
                                            key={sIdx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: sIdx * 0.1 }}
                                            className="p-6 rounded-3xl border border-primary/10 bg-white/50 backdrop-blur-sm flex items-center justify-between group/slot hover:border-primary transition-colors"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover/slot:bg-primary group-hover/slot:text-white transition-all duration-500">
                                                    <Clock size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-[11px] uppercase font-bold tracking-widest text-primary mb-1">{slot.label}</p>
                                                    <p className="font-sans font-bold text-heading text-xl">{slot.time}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                                        {workshopHighlights.map((hl, hIdx) => (
                                            <div key={hIdx} className="flex flex-col items-center text-center p-3 rounded-2xl bg-primary/5 border border-primary/5">
                                                <hl.icon size={20} className="text-primary mb-2" />
                                                <span className="text-[11px] font-bold text-heading uppercase tracking-tighter">{hl.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-heading rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <Sparkles className="absolute top-10 left-10 text-white rotate-12" size={120} />
                            <Target className="absolute bottom-10 right-10 text-white -rotate-12" size={120} />
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-white text-3xl md:text-4xl mb-6">Visible Inch Loss in 21 Days</h3>
                            <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                                Join the hundreds of moms and busy professionals who have successfully tightened their core and toned their bodies.
                            </p>
                            <a
                                href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20joining%20the%2021-Day%20Tone%20and%20Tighten%20Workshop."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-5 bg-primary text-white rounded-xl font-extrabold text-lg shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                Start Your Transformation
                            </a>
                        </div>
                    </section>
                </div>
            }
        />
    )
}
