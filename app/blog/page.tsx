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
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Header />

            {/* Immersive Zen-Medical Hero - Blog */}
            <section className="relative h-[60vh] md:h-[80vh] min-h-[500px] md:min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-background">
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
                <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(111,166,162,0.05)_100%)] z-10"></div>
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10"></div>

                <div className="container relative z-30 flex flex-col items-center text-center mt-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="text-primary font-sans tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold inline-block border-b-2 border-primary/20 pb-2 md:pb-3 mb-6 md:mb-10 drop-shadow-sm">
                            Insights & Education
                        </span>
                    </motion.div>

                    <div className="max-w-5xl w-full mb-6 md:mb-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-sans font-bold text-heading tracking-tight drop-shadow-sm leading-[1.05]"
                        >
                            The Wellness <br />
                            <span className="italic font-light text-heading/90">Journal</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-base md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-light drop-shadow-sm"
                    >
                        Deep dives into natural hormone balancing, posture correction, and evidence-based therapeutic yoga protocols.
                    </motion.p>
                </div>

                {/* Ambient Zen Sparkle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] z-10 pointer-events-none"></div>

                {/* Bottom Fade to Content */}
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
            </section>

            {/* Dynamic Category Filters - Light Theme Sticky */}
            <section className="py-4 md:py-6 border-b border-primary/5 sticky top-16 md:top-20 z-40 bg-background/80 backdrop-blur-xl">
                <div className="container max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-3 items-center md:justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap focus:outline-none border shadow-sm",
                                    activeCategory === category
                                        ? "bg-primary border-primary text-white shadow-primary/20"
                                        : "bg-card/50 border-primary/10 text-foreground/60 hover:border-primary/30 hover:bg-card hover:text-primary"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid - Light Theme */}
            <section className="py-16 md:py-24 relative z-20 bg-secondary/5 px-4 md:px-8">
                <div className="container max-w-7xl mx-auto">

                    {/* Featured Pillar Article */}
                    {activeCategory === "All" && featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 md:mb-16"
                        >
                            <Link href={featuredPost.href} className="group relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-card/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 lg:p-8 border border-primary/10 shadow-xl shadow-primary/5 hover:border-primary/30 transition-all duration-700 overflow-hidden">
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 blur-md pointer-events-none z-[-1]"></div>
                                <div className="relative w-full lg:w-[55%] aspect-[16/10] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                                </div>

                                <div className="w-full lg:w-[45%] px-2 lg:px-6 lg:pr-8 py-4 lg:py-6 flex flex-col">
                                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                                        <span className="px-3 md:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                            {featuredPost.category}
                                        </span>
                                        <span className="flex items-center gap-1.5 text-foreground/60 text-[10px] md:text-xs font-medium uppercase tracking-widest">
                                            <Clock size={14} className="text-primary/70" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-heading mb-4 md:mb-6 leading-[1.1] group-hover:text-primary transition-colors tracking-tight">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-foreground/80 text-[15px] md:text-lg leading-relaxed font-light mb-8 md:mb-10">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mt-auto">
                                        Read Article
                                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:translate-x-1.5 transition-all duration-500 shadow-sm">
                                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Standard Article Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <AnimatePresence mode='popLayout'>
                            {regularPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative h-full flex flex-col"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition duration-700 blur-md pointer-events-none rounded-[2rem] z-[-1]"></div>

                                    <Link href={post.href} className="flex flex-col flex-grow h-full bg-card/90 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-primary/10 shadow-xl shadow-primary/5 hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-500">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                                <span className="px-3 md:px-4 py-1.5 rounded-full bg-background/95 backdrop-blur-md text-heading font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-sm border border-primary/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 md:gap-3 text-foreground/60 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">
                                                <Clock size={14} className="text-primary/70" />
                                                <span>{post.readTime}</span>
                                                <span className="mx-1 text-foreground/20">|</span>
                                                <span>{post.date}</span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-sans font-bold text-heading mb-4 md:mb-6 leading-tight group-hover:text-primary transition-colors tracking-tight">
                                                {post.title}
                                            </h3>

                                            <p className="text-foreground/80 font-light leading-relaxed mb-8 flex-grow text-[14px] md:text-[15px]">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between">
                                                <div className="text-primary font-bold uppercase tracking-widest text-[10px]">
                                                    Read full story
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/20 group-hover:translate-x-1">
                                                    <ArrowRight size={14} />
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
                            <h3 className="text-3xl font-sans font-bold text-foreground/40">No articles found in this category yet.</h3>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="mt-8 px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                            >
                                View All Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA - Premium Light Transition */}
            <section className="py-16 md:py-24 bg-card relative overflow-hidden flex flex-col items-center border-t border-primary/5 px-4 md:px-8">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-heading leading-[1.1] tracking-tight">
                            Master Your <span className="italic font-light text-primary">Metabolism</span>
                        </h2>
                        <p className="text-[15px] md:text-lg font-light text-foreground/80 mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
                            Join our newsletter for weekly clinical insights, free specialized routines, and natural healing tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-lg mx-auto p-1.5 md:p-2 bg-background/80 backdrop-blur-md border border-primary/10 rounded-[2rem] shadow-lg shadow-primary/5 focus-within:border-primary/30 transition-colors" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-6 py-3.5 md:py-4 rounded-[1.5rem] md:rounded-[1.75rem] bg-transparent text-heading placeholder:text-foreground/50 focus:outline-none transition-all font-light text-[14px] md:text-[15px]"
                                required
                            />
                            <button className="px-8 md:px-10 py-3.5 md:py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-[1.5rem] md:rounded-[1.75rem] hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
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
