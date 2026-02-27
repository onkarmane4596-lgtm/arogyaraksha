'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQ {
    question: string;
    answer: string;
}

interface SEOPageLayoutProps {
    title: string;
    description: string;
    heroImage: string;
    eyebrow: string;
    features: { title: string; desc: string }[];
    contentBlocks: React.ReactNode;
    faqs: FAQ[];
    contactProgramName: string;
}

export function SEOPageLayout({
    title,
    description,
    heroImage,
    eyebrow,
    features,
    contentBlocks,
    faqs,
    contactProgramName
}: SEOPageLayoutProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Header />

            {/* Premium Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10"></div>
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
                </div>

                <div className="container relative z-20 flex flex-col items-center text-center mt-20">
                    <span className="text-white/80 font-sans tracking-[0.3em] uppercase text-xs font-semibold inline-block border-b border-primary/60 pb-2 mb-6">
                        {eyebrow}
                    </span>

                    <div className="max-w-4xl w-full mb-6">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight drop-shadow-2xl leading-tight">
                            {title}
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light drop-shadow-md">
                        {description}
                    </p>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-20 relative z-10 -mt-10">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl shadow-black/50 border border-white/10 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <CheckCircle2 className="text-white w-6 h-6" />
                                </div>
                                <h3 className="font-sans font-semibold text-xl mb-3 text-white">{feature.title}</h3>
                                <p className="text-white/60 font-light text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Blocks */}
            <section className="py-16 md:py-24 bg-background border-y border-white/5">
                <div className="container max-w-4xl mx-auto prose prose-lg prose-invert prose-headings:font-sans prose-headings:text-white prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-white prose-li:text-white/60">
                    {contentBlocks}
                </div>
            </section>

            {/* FAQ Schema & Accordion */}
            <section className="py-24 bg-background">
                <div className="container max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-sans text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-white/70">Expert answers regarding our {contactProgramName} batch.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-white/5 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden",
                                    openIndex === index ? "border-primary/40 shadow-2xl shadow-primary/5" : "border-white/10 hover:border-primary/20"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                >
                                    <span className={cn(
                                        "font-semibold text-lg transition-colors duration-200",
                                        openIndex === index ? "text-primary" : "text-white"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={cn(
                                            "text-white/60 transition-transform duration-300 flex-shrink-0",
                                            openIndex === index ? "rotate-180 text-primary" : ""
                                        )}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-5 pt-1 text-white/60 font-light leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background border-t border-white/5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <div className="container relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-sans font-semibold mb-6 text-white leading-tight">Begin Your Healing Journey</h2>
                    <p className="text-lg md:text-xl font-light text-white/60 mb-10">
                        Join our specialized {contactProgramName} batch in Pimple Saudagar or online.
                    </p>
                    <Link
                        href={`/contact?program=${encodeURIComponent(contactProgramName)}`}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:shadow-2xl transition-all group rounded-full"
                    >
                        Book a Trial Class
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
