'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function StorySection() {
    return (
        <section id="story" className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted/50 relative">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse">
                                {/* Placeholder for "Shankar Patil Sawant" or a yoga pose */}
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 font-serif italic text-2xl">
                                    Therapeutic Practice
                                </div>
                            </div>
                            {/* If real image provided, replace above div with:
              <Image src="/path/to/image.jpg" alt="Yoga philosophy" fill className="object-cover" /> 
              */}
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border/50 hidden md:block"
                        >
                            <p className="font-serif italic text-lg text-primary leading-tight">
                                "Yoga here is not a workout session — it is a daily healthcare system."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Text Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">The Story Behind</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                                Most people don’t suffer from lack of exercise — they suffer from <span className="text-primary italic">lack of balance.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
                            <p>
                                In today’s fast lifestyle, long sitting hours, irregular food habits, stress, and hormonal issues
                                have slowly become a part of daily life. People try workouts and diet plans, but the relief remains temporary.
                            </p>
                            <p>
                                <strong>Arogya Raksha Yoga</strong> was created to change that approach.
                            </p>
                            <p>
                                Instead of forcing the body, we understand the body. <br />
                                Instead of burning calories, we correct the system. <br />
                                Instead of temporary fitness, we build permanent health.
                            </p>
                            <p>
                                Founded by yoga practitioner <strong>Shankar Patil Sawant</strong>, the studio follows a therapeutic yoga approach
                                where every practice has a purpose — breathing, movement, and routine work together to restore internal balance first.
                            </p>
                        </div>

                        <div className="pt-4">
                            <h3 className="font-serif text-2xl mb-4 text-foreground">We help with:</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                                {['PCOS & Hormonal Balance', 'Senior Citizen Mobility', 'Back & Neck Pain Relief', 'Post-Pregnancy Recovery', 'Stress & Anxiety Reduction', 'Weight Management'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
