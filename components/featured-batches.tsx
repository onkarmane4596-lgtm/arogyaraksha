'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Shield, Activity, Sun } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const featuredBatches = [
    {
        id: "pcos",
        title: "PCOD/PCOS Therapy",
        description: "100% online program designed to support hormonal balance and weight management.",
        href: "/services/pcos-hormonal-therapy-yoga",
        icon: Leaf,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        hoverBorder: "group-hover:border-emerald-500/40",
        shadow: "shadow-emerald-500/5",
    },
    {
        id: "senior",
        title: "Senior Citizen Batch",
        description: "Safe, slow-paced yoga focusing on knee/back pain relief and mobility restoration.",
        href: "/services/senior-citizen-mobility",
        icon: Shield,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        hoverBorder: "group-hover:border-blue-500/40",
        shadow: "shadow-blue-500/5",
    },
    {
        id: "weight",
        title: "21-Day Weight Loss",
        description: "Targeted fat reduction workshop for tummy, arms, and thighs starting every 10th.",
        href: "/services/therapeutic-weight-loss",
        icon: Activity,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        hoverBorder: "group-hover:border-orange-500/40",
        shadow: "shadow-orange-500/5",
    },
    {
        id: "daily",
        title: "Regular Yoga Practice",
        description: "Online + Offline sessions including Asanas, Pranayama, Zumba, and Strength Training.",
        href: "/services/regular-yoga-practice",
        icon: Sun,
        color: "text-primary",
        bgColor: "bg-primary/10",
        borderColor: "border-primary/20",
        hoverBorder: "group-hover:border-primary/40",
        shadow: "shadow-primary/5",
    }
]

export function FeaturedBatches() {
    return (
        <section className="py-16 md:py-16 bg-background relative overflow-hidden">
            {/* Background Texture/Accents - Soft Organic */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/5 rounded-full blur-[100px] md:blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container relative z-10 px-4 md:px-8">
                <div className="text-center mb-12 md:mb-10 space-y-4 md:space-y-4 mx-auto max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-sm">
                            Specialized Care
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-heading leading-[1.1] tracking-tight font-bold"
                    >
                        Our Therapeutic <br className="md:hidden" />
                        <span className="italic font-light text-primary">Yoga Batches</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-foreground/80 font-light leading-relaxed mx-auto max-w-2xl"
                    >
                        Join our expert-led specialized batches designed to target systemic issues, rebuild mobility, and promote sustainable overall wellness.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                    {featuredBatches.map((batch, index) => (
                        <motion.div
                            key={batch.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative h-full flex flex-col"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] blur-md opacity-0 group-hover:opacity-100 transition duration-700"></div>

                            <Link
                                href={batch.href}
                                className={cn(
                                    "relative flex-grow bg-card/90 backdrop-blur-xl border rounded-[1.25rem] md:rounded-[2rem] p-4 md:p-6 flex flex-col hover:-translate-y-2 transition-all duration-500 shadow-xl",
                                    batch.borderColor,
                                    batch.hoverBorder,
                                    batch.shadow
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-[1.25rem] flex items-center justify-center mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-500",
                                    batch.bgColor,
                                    batch.color
                                )}>
                                    <batch.icon className="w-4 h-4 md:w-7 md:h-7" />
                                </div>

                                <h3 className="text-sm sm:text-lg md:text-xl font-sans font-bold mb-1.5 md:mb-3 text-heading group-hover:text-primary transition-colors tracking-tight leading-tight">
                                    {batch.title}
                                </h3>

                                <p className="text-foreground/80 font-light text-[10px] sm:text-[13px] md:text-[14px] leading-relaxed mb-3 md:mb-8 flex-grow line-clamp-3 md:line-clamp-none">
                                    {batch.description}
                                </p>

                                <div className="mt-auto flex items-center gap-1.5 md:gap-2 text-[8px] md:text-xs font-bold uppercase tracking-widest text-heading group-hover:text-primary transition-colors">
                                    Explore Batch
                                    <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform md:w-4 md:h-4 w-3 h-3" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
