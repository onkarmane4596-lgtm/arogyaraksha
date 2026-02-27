'use client'

import { motion } from 'framer-motion'
import { Sparkles, MoonStar, Sun, Leaf } from 'lucide-react'

const journeySteps = [
    {
        icon: MoonStar,
        title: 'Recognizing the Imbalance',
        description: 'We listen to your body’s signals—whether it’s chronic fatigue, irregular cycles, or persistent joint pain.',
        delay: 0.1,
    },
    {
        icon: Leaf,
        title: 'Personalized Practice',
        description: 'We design a daily protocol combining therapeutic asanas, targeted breathwork, and deep relaxation.',
        delay: 0.3,
    },
    {
        icon: Sun,
        title: 'Restoring Vitality',
        description: 'Over weeks and months, your inner systems reset and true, sustainable health is achieved.',
        delay: 0.5,
    }
]

export function TransformationJourney() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2 shadow-sm"
                    >
                        <Sparkles size={20} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-slate-900 leading-[1.1] tracking-tight text-balance"
                    >
                        Your Healing <br className="hidden md:block" />
                        <span className="italic font-light text-slate-400">Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Healing is not a quick fix; it is a systematic, compassionate process of realignment.
                        Here is how we guide you back to balance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
                    {/* Connecting Line (visible on md+) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-emerald-100/60 z-0"></div>

                    {journeySteps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: step.delay }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="w-28 h-28 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-xl shadow-slate-200/50 relative mb-10 group-hover:scale-110 transition-all duration-500 ease-out">
                                    {/* Outer glowing ring on hover */}
                                    <div className="absolute inset-0 rounded-full border border-emerald-200 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>

                                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
                                        <Icon size={32} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-sans font-bold mb-4 text-slate-900 tracking-tight">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light text-lg">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
