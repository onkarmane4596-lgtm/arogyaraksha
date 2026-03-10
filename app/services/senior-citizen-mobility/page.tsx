'use client'

import { SEOPageLayout } from '@/components/seo-page-layout'
import { motion } from 'framer-motion'
import { Clock, CheckCircle2, Zap, Brain, Wind, Sparkles, Dumbbell, Activity, Users, Home, Info, Heart, ShieldCheck, Footprints, Sun, Flower2 } from 'lucide-react'

const faqs = [
    {
        question: "What if I have severe knee arthritis and cannot sit on the floor?",
        answer: "Our senior batches utilize prop-supported, restorative methods. We provide specialized chair yoga options ensuring zero pressure on the knee joints while still improving mobility and flexibility."
    },
    {
        question: "Is it safe if I have high blood pressure or heart conditions?",
        answer: "Yes, our therapeutic approach carefully monitors physiological limits. We utilize cooling pranayama and gentle movements that safely regulate blood pressure without over-exertion. However, we always recommend consulting your primary physician before starting."
    },
    {
        question: "How does this help prevent falls?",
        answer: "By specifically targeting the stabilizing muscles of the core, hips, and ankles, our practice reestablishes deep proprioception and balance, eradicating the physical instability that leads to dangerous falls."
    }
]

const activities = [
    { icon: Flower2, title: "Safe Yoga", desc: "Gentle practices designed for maximum safety and comfort." },
    { icon: Sparkles, title: "Knee & Back", desc: "Specialized relief strategies for joint and spinal pain." },
    { icon: Sun, title: "Chair Support", desc: "Advanced variations using props for 100% security." },
    { icon: Wind, title: "Mobility", desc: "Light stretching to improve range of motion and flexibility." },
]

const benefits = [
    { icon: Heart, title: "Better Balance", desc: "Targeted exercises to prevent falls and improve stability." },
    { icon: Wind, title: "Gentle Breathing", desc: "Simple techniques to boost energy and respiratory health." },
    { icon: Sun, title: "Independence", desc: "Regain the confidence to move freely in daily life." },
]

export default function SeniorYogaPage() {
    return (
        <SEOPageLayout
            title="Restorative Senior Yoga"
            description="Gentle, safe, and effective yoga for senior citizens. Online + Offline sessions designed for your comfort."
            heroImage="/images/programs/senior-yoga-new.png"
            eyebrow="Safe & Supported"
            contactProgramName="Senior Citizen Yoga"
            features={[
                { title: "Pain Management", desc: "Targeted strategies for chronic knee, back, and joint pain." },
                { title: "Prop-Supported", desc: "Zero-pressure exercises utilizing chairs and bolsters." },
                { title: "Slow-Paced", desc: "Meticulously designed for seniors to ensure zero injury risk." }
            ]}
            faqs={faqs}
            contentBlocks={
                <div className="space-y-20">
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-primary/20">
                                    Online + Offline Available
                                </span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-heading leading-tight mb-4">
                                    Independence in Your <br />
                                    <span className="text-primary italic font-light">Golden Years</span>
                                </h2>
                                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                    Our Senior Citizen Yoga classes are carefully curated to rejuvenate and strengthen the aging body with absolute care and clinical precision.
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
                                    <h3 className="text-3xl font-sans font-bold text-heading mb-6">Batch Schedule</h3>
                                    <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                        Join a supportive community of seniors. Whether in-person or online, we ensure a pace that respects your body.
                                    </p>
                                    <a
                                        href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20the%20Senior%20Citizen%20Yoga%20Special%20Batch."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-heading to-primary text-white rounded-2xl shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-1"
                                    >
                                        <Users size={20} />
                                        <span className="text-sm font-bold tracking-tight">Reserve A Spot</span>
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
                                                <p className="text-[11px] uppercase font-bold tracking-widest text-primary mb-1">Session Timing</p>
                                                <p className="font-sans font-bold text-heading text-2xl">5:00 PM – 6:00 PM</p>
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
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <Flower2 className="absolute top-10 right-10 text-white rotate-12" size={120} />
                            <Heart className="absolute bottom-10 left-10 text-white -rotate-12" size={120} />
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-white text-3xl md:text-4xl mb-6">Safe. Slow. Supported.</h3>
                            <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                                Join our thriving community of independent seniors in <strong>Pimpri Chinchwad</strong> or connect globally via <strong>Online</strong> sessions.
                            </p>
                            <a
                                href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20the%20Senior%20Citizen%20Yoga%20Special%20Batch."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-5 bg-primary text-white rounded-xl font-extrabold text-lg shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all hover:scale-105"
                            >
                                Start Your Journey
                            </a>
                        </div>
                    </section>
                </div>
            }
        />
    )
}
