'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function InstructorSection() {
    return (
        <section id="instructor" className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        <div>
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">Your Mentor</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                                Meet <span className="text-primary">Shankar Patil Sawant</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-foreground/80 leading-relaxed font-light text-lg">
                            <p>
                                A dedicated yoga practitioner and therapeutic wellness expert, Shankar believes that true health comes from understanding your own body, not fighting it.
                            </p>
                            <p>
                                With years of experience in helping people manage lifestyle disorders, he has developed a unique approach that combines
                                ancient yogic wisdom with modern therapeutic understanding.
                            </p>
                            <p>
                                His sessions are not just about postures; they are about <strong>internal correction</strong>. Whether you are dealing with PCOD, back pain, or stress,
                                his guidance helps you rebuild your health foundation brick by brick.
                            </p>
                        </div>

                        <div className="bg-white/50 p-6 rounded-xl border border-primary/10">
                            <h3 className="font-serif text-xl mb-4 text-primary">Our Mission</h3>
                            <p className="text-muted-foreground italic">
                                "Help people live active, pain-free and confident lives through natural practices."
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            {[
                                'Therapeutic Approach',
                                'Women Health Specialization',
                                'Senior Friendly',
                                'Natural Healing Focused'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Check size={16} />
                                    </div>
                                    <span className="text-sm font-medium text-foreground/80">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="aspect-square md:aspect-[4/5] rounded-full md:rounded-2xl overflow-hidden bg-muted/50 relative border-8 border-white shadow-2xl">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse">
                                {/* Placeholder for Instructor Image */}
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 font-serif italic text-2xl px-8 text-center">
                                    Shankar Patil Sawant<br />(Instructor Image)
                                </div>
                            </div>
                            {/* <Image src="/path/to/instructor.jpg" alt="Shankar Patil Sawant" fill className="object-cover" /> */}
                        </div>

                        {/* Quote Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-primary text-primary-foreground p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl max-w-xs hidden md:block"
                        >
                            <p className="font-serif text-xl leading-relaxed">
                                "Yoga is not about touching your toes — It is about improving your life."
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
