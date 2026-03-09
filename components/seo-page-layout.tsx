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
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10"></div>
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10"></div>
                </div>

                <div className="container relative z-20 flex flex-col items-center text-center mt-20 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary font-sans tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-bold inline-block border-b-2 border-primary/20 pb-2 mb-4 md:mb-6"
                    >
                        {eyebrow}
                    </motion.span>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl w-full mb-4 md:mb-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-heading tracking-tight drop-shadow-sm leading-[1.1]">
                            {title}
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-light drop-shadow-sm"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] z-10 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            </section>

            {/* Core Features Grid */}
            <section className="py-16 md:py-20 relative z-10 -mt-10 px-4 md:px-8">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-xl shadow-primary/5 border border-primary/10 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-700 blur-md -z-10"></div>
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1.25rem] bg-white border border-primary/20 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary transition-colors shadow-sm duration-500">
                                    <CheckCircle2 className="text-primary w-6 h-6 md:w-8 md:h-8 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 text-heading group-hover:text-primary transition-colors tracking-tight">{feature.title}</h3>
                                <p className="text-foreground/80 font-light text-[14px] md:text-base leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Blocks */}
            <section className="py-12 md:py-20 bg-background relative">
                <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
                <div className="container max-w-3xl mx-auto px-4 md:px-0">
                    <div className="prose prose-lg md:prose-xl prose-headings:font-sans prose-headings:text-heading prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl md:prose-h2:text-4xl prose-h3:text-2xl md:prose-h3:text-3xl prose-p:text-foreground/80 prose-p:font-light prose-p:leading-relaxed prose-p:text-[15px] md:prose-p:text-lg prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-heading prose-strong:font-bold prose-li:text-foreground/80 prose-ul:font-light prose-li:text-[15px] md:prose-li:text-lg prose-ul:marker:text-primary space-y-6">
                        {contentBlocks}
                    </div>
                </div>
            </section>

            {/* FAQ Schema & Accordion */}
            <section className="py-16 md:py-24 bg-background border-t border-primary/5">
                <div className="container max-w-3xl mx-auto px-4 md:px-0">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary mb-3 block">Common Queries</span>
                        <h2 className="text-3xl md:text-5xl font-sans text-heading font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-foreground/80 font-light text-[15px] md:text-lg">Expert answers regarding our {contactProgramName} batch.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "bg-white/80 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-300 overflow-hidden",
                                    openIndex === index ? "border-primary/40 shadow-xl shadow-primary/5" : "border-primary/10 hover:border-primary/20 hover:shadow-md"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full text-left px-5 md:px-8 py-4 md:py-6 flex items-center justify-between gap-4"
                                >
                                    <span className={cn(
                                        "font-sans font-bold text-base md:text-xl transition-colors duration-200 tracking-tight",
                                        openIndex === index ? "text-primary" : "text-heading"
                                    )}>
                                        {faq.question}
                                    </span>
                                    <div className={cn(
                                        "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                                        openIndex === index ? "bg-primary/10" : "bg-primary/5 group-hover:bg-primary/10"
                                    )}>
                                        <ChevronDown
                                            className={cn(
                                                "w-4 h-4 md:w-5 md:h-5 transition-transform duration-300",
                                                openIndex === index ? "rotate-180 text-primary" : "text-primary/60"
                                            )}
                                        />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 md:px-8 pb-6 md:pb-8 pt-0 text-foreground/80 font-light text-[14px] md:text-base leading-relaxed">
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
            <section className="py-16 md:py-24 bg-background border-t border-primary/5 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container relative z-10 max-w-3xl mx-auto px-4 md:px-0 flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold mb-4 md:mb-6 text-heading leading-[1.1] tracking-tight">Begin Your Healing Journey</h2>
                    <p className="text-[15px] md:text-xl font-light text-foreground/80 mb-8 md:mb-10 max-w-xl mx-auto">
                        Join our specialized {contactProgramName} batch in Pimple Saudagar or online.
                    </p>
                    <Link
                        href={`/contact?program=${encodeURIComponent(contactProgramName)}`}
                        className="group relative inline-flex items-center justify-center gap-3 md:gap-4 px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-primary text-white rounded-full md:rounded-[2rem] font-bold tracking-widest uppercase text-[11px] md:text-sm shadow-2xl shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all duration-500 overflow-hidden w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                            <span className="truncate">Book a Trial Class</span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 shrink-0 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
