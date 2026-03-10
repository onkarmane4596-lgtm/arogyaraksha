'use client'

import { SEOPageLayout } from '@/components/seo-page-layout'
import { motion } from 'framer-motion'
import { Clock, CheckCircle2, Zap, Brain, Wind, Sparkles, Dumbbell, Activity, Users, Home, TrendingDown, Waves, Battery } from 'lucide-react'

const faqs = [
    {
        question: "How long does it take to see period regularity with yoga?",
        answer: "Consistency is key. Our clinical data shows that with 3-4 sessions per week in our targeted PCOS therapy batch, patients naturally regulate their menstrual cycles within 12 to 16 weeks."
    },
    {
        question: "Is this a generic weight loss class?",
        answer: "No. This is a specialized endocrinology-focused practice. We utilize specific asanas that stimulate the pelvic floor and ovaries, targeting the root hormonal cause of weight gain, rather than just burning calories."
    },
    {
        question: "Can I manage my insulin resistance with this program?",
        answer: "Yes, our specific sequence of therapeutic asanas and pranayama acts strongly on the metabolic system to reduce insulin resistance — a core driver of PCOS symptoms."
    }
]

const activities = [
    { icon: TrendingDown, title: "Fat-burning Asanas", desc: "Specialized postures to target stubborn PCOS weight gain." },
    { icon: Wind, title: "Hormone Pranayama", desc: "Breathwork techniques to balance the endocrine system." },
    { icon: Dumbbell, title: "Strength Training", desc: "Build lean muscle mass to improve metabolic health." },
    { icon: Sparkles, title: "Hormonal Support", desc: "Proven methods to balance estrogen and insulin levels." },
]

const benefits = [
    { icon: Activity, title: "Improve Metabolism", desc: "Boost your body's natural calorie-burning efficiency." },
    { icon: Waves, title: "Reduce Bloating", desc: "Gentle therapeutic moves to alleviate PCOD discomfort." },
    { icon: Battery, title: "Boost Energy", desc: "Combat fatigue with revitalizing yogic sequences." },
]

export default function PCOSTherapyPage() {
    return (
        <SEOPageLayout
            title="PCOS / PCOD Weight Loss"
            description="Our specialized 100% Online session designed to target hormonal weight gain and metabolic health."
            heroImage="/images/programs/pcos-therapy-new.png"
            eyebrow="Online Therapy"
            contactProgramName="PCOS Yoga"
            features={[
                { title: "100% Online", desc: "Join from the comfort of your home with our expert-led sessions." },
                { title: "Weight Loss Focus", desc: "Targeted routines combining Yoga and Strength for PCOS results." },
                { title: "Endocrine Support", desc: "Scientific methods to balance hormones and reduce insulin resistance." }
            ]}
            faqs={faqs}
            contentBlocks={
                <div className="space-y-20">
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-primary/20">
                                    Join From Home 💻
                                </span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-heading leading-tight mb-4">
                                    Online PCOD / PCOS <br />
                                    <span className="text-primary italic font-light">Weight Loss Session</span>
                                </h2>
                                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                    Experience a highly specialized endocrinology-focused practice. We don&apos;t just burn calories; we fix the underlying hormonal triggers for weight gain and bloating.
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
                                    <h3 className="text-3xl font-sans font-bold text-heading mb-6">Live Online Session</h3>
                                    <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                        Consistent practice from the comfort of your home. Target insulin resistance and restore balance.
                                    </p>
                                    <a
                                        href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20joining%20the%20Online%20PCOS%20Weight%20Loss%20session."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-heading to-primary text-white rounded-2xl shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-1"
                                    >
                                        <Users size={20} />
                                        <span className="text-sm font-bold tracking-tight">Join Live Session</span>
                                    </a>
                                </div>

                                <div className="flex-1">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="p-6 rounded-3xl border border-primary/10 bg-white/50 backdrop-blur-sm"
                                    >
                                        <div className="flex items-center gap-5 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                                                <Clock size={24} />
                                            </div>
                                            <div>
                                                <p className="text-[11px] uppercase font-bold tracking-widest text-primary mb-1">Morning Session</p>
                                                <p className="font-sans font-bold text-heading text-2xl">9:30 AM – 10:30 AM</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-3">
                                            {benefits.map((benefit, bIdx) => (
                                                <div key={bIdx} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                                                    <div className="text-primary"><benefit.icon size={18} /></div>
                                                    <span className="text-sm font-bold text-heading">{benefit.title}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-heading rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <Home className="absolute top-10 left-10 text-white rotate-12" size={120} />
                            <TrendingDown className="absolute bottom-10 right-10 text-white -rotate-12" size={120} />
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-white text-3xl md:text-4xl mb-6">Natural Hormonal Harmony</h3>
                            <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                                Join our community of women who have successfully managed PCOD/PCOS symptoms through scientific yogic therapy.
                            </p>
                            <a
                                href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20joining%20the%20Online%20PCOS%20Weight%20Loss%20session."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-5 bg-primary text-white rounded-xl font-extrabold text-lg shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </section>
                </div>
            }
        />
    )
}
