'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HeartPulse, Brain, ShieldPlus, Activity, ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const impacts = [
    {
        id: 'hormonal',
        title: 'Hormonal Balance',
        icon: HeartPulse,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
        description: 'Specialized practices targeting the endocrine system to manage PCOS, regulate cycles, and restore natural hormonal rhythms.',
        benefits: ['Reduced PCOS Symptoms', 'Metabolic Regulation', 'Emotional Stability'],
        stat: '85%',
        statText: 'Report improved cycle regularity',
    },
    {
        id: 'nervous',
        title: 'Nervous System Reset',
        icon: Brain,
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100',
        description: 'Therapeutic breathwork and restorative asanas that shift the body from fight-or-flight into deep healing and recovery modes.',
        benefits: ['Lowered Cortisol Levels', 'Deeper Sleep Quality', 'Anxiety Reduction'],
        stat: '92%',
        statText: 'Experience better sleep within 2 weeks',
    },
    {
        id: 'immunity',
        title: 'Cellular Immunity',
        icon: ShieldPlus,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
        description: 'Specific sequences designed to stimulate the lymphatic system, flushing out toxins and boosting the body\'s natural defense mechanisms.',
        benefits: ['Enhanced Detoxification', 'Reduced Inflammation', 'Stronger Defenses'],
        stat: '3x',
        statText: 'Faster recovery from common ailments',
    },
    {
        id: 'mobility',
        title: 'Restorative Mobility',
        icon: Activity,
        color: 'text-emerald-600',
        bgColor: 'bg-emerald-50',
        borderColor: 'border-emerald-100',
        description: 'Safe, alignment-focused movements that lubricate joints, decompress the spine, and reverse the damage of sedentary lifestyles.',
        benefits: ['Joint Pain Relief', 'Spinal Alignment', 'Increased Flexibility'],
        stat: '100%',
        statText: 'Safe adaptations for seniors & injuries',
    },
    {
        id: 'digestive',
        title: 'Digestive Vitality',
        icon: Activity,
        color: 'text-amber-600',
        bgColor: 'bg-amber-50',
        borderColor: 'border-amber-100',
        description: 'Abdominal-focused asanas and Agnisara practices that stimulate metabolic heat and optimize the gut-brain connection.',
        benefits: ['Metabolic Activation', 'Bloating Reduction', 'Nutrient Absorption'],
        stat: '75%',
        statText: 'Report better digestion in 3 weeks',
    },
    {
        id: 'postural',
        title: 'Postural Alignment',
        icon: ShieldPlus,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-50',
        borderColor: 'border-indigo-100',
        description: 'Corrective techniques to reverse modern postural syndromes, opening the chest and restoring the natural curve of the spine.',
        benefits: ['Tech-Neck Correction', 'Lower Back Support', 'Improved Stature'],
        stat: '100%',
        statText: 'Corrective postural approach',
    }
]

export function HealthImpactSection() {
    const [activeTab, setActiveTab] = useState(impacts[0].id)

    const activeImpact = impacts.find(i => i.id === activeTab) || impacts[0]
    const ActiveIcon = activeImpact.icon

    return (
        <section className="py-24 md:py-32 bg-[#fafaf9] relative overflow-hidden flex flex-col items-center">

            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 to-transparent pointer-events-none"></div>

            <div className="container relative z-10 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600"
                    >
                        The Science of Healing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight"
                    >
                        How Yoga <span className="italic font-light text-slate-400">Rewires</span> Your Health
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto"
                    >
                        Therapeutic yoga goes far beyond stretching. It is a systematic approach to repairing from within.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

                    {/* Left Column: Navigation Tabs */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-4 h-full">
                        {impacts.map((impact, index) => {
                            const Icon = impact.icon
                            const isActive = activeTab === impact.id
                            return (
                                <motion.button
                                    key={impact.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveTab(impact.id)}
                                    className={cn(
                                        "w-full text-left p-6 md:p-8 rounded-3xl transition-all duration-500 border flex items-center gap-6 group relative overflow-hidden",
                                        isActive
                                            ? "bg-white border-emerald-100 shadow-xl shadow-emerald-600/5"
                                            : "bg-transparent border-transparent hover:bg-white/40 hover:border-slate-200 text-slate-500"
                                    )}
                                >
                                    {/* Active State Indicator Line */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-600 rounded-l-3xl"
                                        />
                                    )}

                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 shadow-sm",
                                        isActive
                                            ? "bg-emerald-600 text-white"
                                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                    )}>
                                        <Icon size={26} strokeWidth={isActive ? 2 : 1.5} />
                                    </div>
                                    <div>
                                        <h3 className={cn(
                                            "font-sans text-xl md:text-2xl mb-1 transition-colors duration-300 tracking-tight",
                                            isActive ? "text-slate-900 font-bold" : "text-slate-600 font-medium"
                                        )}>
                                            {impact.title}
                                        </h3>
                                        <p className="text-sm line-clamp-1 opacity-70 font-light tracking-wide text-slate-500">{impact.description}</p>
                                    </div>
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* Right Column: Dynamic Content Display */}
                    <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden flex flex-col h-full">

                        {/* Decorative background glow based on active color */}
                        <div className={cn("absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[120px] opacity-10 transition-colors duration-1000 pointer-events-none", activeImpact.bgColor)}></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeImpact.id}
                                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative z-10 h-full flex flex-col flex-grow"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className={cn("inline-flex w-16 h-16 rounded-2xl items-center justify-center shadow-inner", activeImpact.bgColor, activeImpact.color)}>
                                        <ActiveIcon size={32} />
                                    </div>
                                    <span className={cn("text-sm font-bold tracking-widest uppercase", activeImpact.color)}>
                                        Impact Area
                                    </span>
                                </div>

                                <h3 className="font-sans text-3xl md:text-5xl text-slate-900 mb-8 leading-tight tracking-tight font-bold">
                                    {activeImpact.title}
                                </h3>

                                <p className="text-lg md:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
                                    {activeImpact.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-10 mb-12 flex-grow">
                                    <div>
                                        <h4 className="font-sans text-2xl mb-6 text-slate-900 italic font-medium">Key Benefits</h4>
                                        <ul className="space-y-5">
                                            {activeImpact.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                                                    <div className={cn("mt-1.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0", activeImpact.bgColor, activeImpact.color)}>
                                                        <Check size={12} strokeWidth={3} />
                                                    </div>
                                                    <span className="text-lg">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#fafaf9] p-10 rounded-3xl border border-slate-100 flex flex-col justify-center relative overflow-hidden group hover:border-emerald-200 transition-colors shadow-sm">
                                        <div className={cn("text-7xl font-sans font-black mb-4 tracking-tighter transition-transform duration-500 group-hover:scale-105 origin-left text-emerald-600")}>
                                            {activeImpact.stat}
                                        </div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                            {activeImpact.statText}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-slate-100 mt-auto">
                                    <Link
                                        href="/programs"
                                        className="inline-flex items-center gap-3 text-emerald-600 font-bold hover:gap-5 transition-all uppercase tracking-widest text-sm group"
                                    >
                                        Explore Related Programs
                                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    )
}
