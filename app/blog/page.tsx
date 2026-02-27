'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

// High-Intent SEO Mock Pillar Articles
const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to Managing PCOS with Yoga",
        excerpt: "Discover the best yoga for PCOS and how specific pelvic floor strengthening exercises can naturally restore hormonal balance and regulate periods.",
        category: "Women's Health",
        readTime: "8 min read",
        image: "/images/programs/pcos-therapy-new.png",
        date: "Oct 12, 2023",
        featured: true,
        href: "/blog/managing-pcos-with-yoga"
    },
    {
        id: 2,
        title: "Chair Yoga Routines for Severe Knee Arthritis",
        excerpt: "Gentle mobility exercises for elderly individuals looking for arthritis relief without putting pressure on the knee joints.",
        category: "Senior Wellness",
        readTime: "5 min read",
        image: "/images/programs/senior-yoga-new.png",
        date: "Oct 15, 2023",
        featured: false,
        href: "/blog/knee-arthritis-chair-yoga"
    },
    {
        id: 3,
        title: "Desk Job Back Pain: Posture Correction for IT Professionals",
        excerpt: "Working long hours in Hinjewadi? Learn how targeted neck pain yoga therapy can reverse structural damage and cure sciatica.",
        category: "Pain Management",
        readTime: "6 min read",
        image: "/images/home-hero-elegant.jpg",
        date: "Oct 18, 2023",
        featured: false,
        href: "/blog/desk-job-back-pain-posture"
    },
    {
        id: 4,
        title: "Yoga vs Gym for Weight Loss: The Cortisol Factor",
        excerpt: "Why extreme cardio might be causing you to hold onto belly fat, and how hormonal weight loss yoga provides a sustainable alternative.",
        category: "Weight Loss",
        readTime: "7 min read",
        image: "/images/programs/weight-loss-new.png",
        date: "Oct 22, 2023",
        featured: false,
        href: "/blog/yoga-vs-gym-weight-loss"
    },
    {
        id: 5,
        title: "Breathing Exercises for Sleep and Anxiety",
        excerpt: "Struggling with stress? Try these deep pranayama techniques to lower cortisol, calm the nervous system, and improve sleep quality tonight.",
        category: "Mental Health",
        readTime: "4 min read",
        image: "/images/programs/programs-hero.jpg",
        date: "Oct 25, 2023",
        featured: false,
        href: "/blog/breathing-exercises-sleep-anxiety"
    }
]

const categories = ["All", "Women's Health", "Senior Wellness", "Pain Management", "Weight Loss", "Mental Health"]

export default function BlogHubPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = blogPosts.filter(post =>
        activeCategory === "All" || post.category === activeCategory
    );

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== "All");

    return (
        <main className="min-h-screen flex flex-col bg-stone-50 selection:bg-emerald-500/20">
            <Header />

            {/* Immersive Zen-Medical Hero - Blog */}
            <section className="relative h-[80vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/headers/blog-hero.png"
                        alt="Wellness Journal"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </motion.div>

                {/* Premium Overlays for Depth & Focus */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-stone-50 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)] z-10"></div>
                <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply z-10"></div>

                <div className="container relative z-30 flex flex-col items-center text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-emerald-400 font-sans tracking-[0.5em] uppercase text-[10px] font-bold inline-block border-b-2 border-emerald-500/50 pb-3 mb-10 drop-shadow-sm">
                            Insights & Education
                        </span>
                    </motion.div>

                    <div className="max-w-6xl mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-7xl md:text-9xl lg:text-[11rem] font-sans font-bold text-white tracking-tighter leading-[0.85] drop-shadow-2xl"
                        >
                            The Wellness <br />
                            <span className="italic font-light text-white/80">Journal</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-xl md:text-3xl text-white/60 max-w-4xl leading-relaxed font-light drop-shadow-md"
                    >
                        Deep dives into natural hormone balancing, posture correction, and evidence-based therapeutic yoga protocols.
                    </motion.p>
                </div>

                {/* Ambient Zen Sparkle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[150px] z-10 pointer-events-none"></div>

                {/* Bottom Fade to Content */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-50 to-transparent z-20"></div>
            </section>

            {/* Dynamic Category Filters - Light Theme Sticky */}
            <section className="py-10 border-b border-slate-100 sticky top-16 md:top-20 z-40 bg-stone-50/80 backdrop-blur-xl">
                <div className="container max-w-7xl mx-auto">
                    <div className="flex overflow-x-auto hide-scrollbar gap-3 md:gap-4 pb-2 md:pb-0 items-center md:justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap focus:outline-none border shadow-sm",
                                    activeCategory === category
                                        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-500/20"
                                        : "bg-white border-slate-100 text-slate-400 hover:border-emerald-200 hover:text-emerald-600"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid - Light Theme */}
            <section className="py-24 md:py-32 relative z-20 bg-stone-50">
                <div className="container max-w-7xl mx-auto">

                    {/* Featured Pillar Article */}
                    {activeCategory === "All" && featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-24"
                        >
                            <Link href={featuredPost.href} className="group flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white rounded-[3.5rem] p-6 border border-slate-100 shadow-2xl shadow-slate-200/50 hover:border-emerald-200 transition-all duration-700">
                                <div className="relative w-full lg:w-[55%] aspect-[16/10] rounded-[2.5rem] overflow-hidden">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                                </div>

                                <div className="w-full lg:w-[45%] px-4 lg:pr-12 py-8 flex flex-col">
                                    <div className="flex items-center gap-6 mb-8">
                                        <span className="px-5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                                            {featuredPost.category}
                                        </span>
                                        <span className="flex items-center gap-2 text-slate-500 text-xs font-medium uppercase tracking-widest">
                                            <Clock size={16} className="text-emerald-600" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl lg:text-6xl font-sans font-bold text-slate-900 mb-8 leading-[1.1] group-hover:text-emerald-700 transition-colors tracking-tight">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-slate-500 text-xl leading-relaxed font-light mb-12">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-4 text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs mt-auto">
                                        Read Article
                                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-lg shadow-emerald-500/20">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Standard Article Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode='popLayout'>
                            {regularPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link href={post.href} className="flex flex-col h-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 group shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-500">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 font-sans text-[10px] font-bold uppercase tracking-widest shadow-sm border border-slate-100">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-10 flex flex-col flex-grow">
                                            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-6">
                                                <Clock size={16} className="text-emerald-600" />
                                                <span>{post.readTime}</span>
                                                <span className="mx-2 text-slate-200">|</span>
                                                <span>{post.date}</span>
                                            </div>

                                            <h3 className="text-2xl font-sans font-bold text-slate-900 mb-6 leading-tight group-hover:text-emerald-700 transition-colors tracking-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-500 font-light leading-relaxed mb-10 flex-grow text-lg">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="text-emerald-600 font-bold uppercase tracking-widest text-[10px]">
                                                    Read full story
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-stone-50 border border-slate-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                                    <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredPosts.length === 0 && (
                        <div className="py-32 text-center">
                            <h3 className="text-3xl font-sans font-bold text-slate-300">No articles found in this category yet.</h3>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-8 px-10 py-4 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-emerald-500/20"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA - Premium Dark Transition */}
            <section className="py-24 md:py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
                <div className="container relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-5xl md:text-7xl font-sans font-bold text-white leading-[1.1] tracking-tight">
                            Master Your <span className="italic font-light text-emerald-500">Metabolism</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join our newsletter for weekly clinical insights, free specialized routines, and natural healing tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto p-2 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-8 py-5 rounded-[2rem] bg-transparent text-white placeholder:text-slate-500 focus:outline-none transition-all font-light text-lg"
                                required
                            />
                            <button className="px-12 py-5 bg-emerald-600 text-white font-bold uppercase tracking-widest text-[10px] rounded-[2rem] hover:bg-emerald-700 shadow-2xl shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95">
                                Join Journal
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
