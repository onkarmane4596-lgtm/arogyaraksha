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
        <section className="py-12 md:py-32 bg-background relative overflow-hidden">
            {/* Soft Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20 space-y-2 md:space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mb-1 md:mb-2 shadow-sm border border-primary/20"
                    >
                        <Sparkles size={16} className="md:w-5 md:h-5" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-heading leading-[1.1] tracking-tight text-balance"
                    >
                        Your Healing <br className="hidden md:block" />
                        <span className="italic font-light text-primary">Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Healing is not a quick fix; it is a systematic, compassionate process of realignment.
                        Here is how we guide you back to balance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative max-w-5xl mx-auto">
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
                                <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-white border border-primary/10 flex items-center justify-center shadow-xl shadow-primary/5 relative mb-3 md:mb-10 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 ease-out">
                                    {/* Outer glowing ring on hover */}
                                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>

                                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-primary/5 flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Icon size={20} className="md:w-8 md:h-8" />
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 md:mb-4 text-heading tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-foreground/70 leading-relaxed font-light text-[14px] md:text-lg">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
