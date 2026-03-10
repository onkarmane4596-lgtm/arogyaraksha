'use client'

import { SEOPageLayout } from '@/components/seo-page-layout'
import { motion } from 'framer-motion'
import { Clock, CheckCircle2, Zap, Brain, Wind, Sparkles, Dumbbell, Activity, Users } from 'lucide-react'

const faqs = [
    {
        question: "Can beginners join the Regular Yoga Practice Batch?",
        answer: "Yes, the regular batch is designed to accommodate all levels. Our instructors provide modifications for beginners while offering challenges for more advanced practitioners."
    },
    {
        question: "Do I need to choose between Online or Offline?",
        answer: "Our 'Hybrid' model allows for flexibility. You can join offline at our studio or online from the comfort of your home, depending on your schedule and preference."
    },
    {
        question: "What should I bring to the offline class?",
        answer: "We recommend bringing your own yoga mat for hygiene, a water bottle, and wearing comfortable, breathable clothing. All other necessary props are provided at the studio."
    }
]

const activities = [
    { icon: Sparkles, title: "Yoga Asanas", desc: "Traditional postures to enhance flexibility, balance, and core stability." },
    { icon: Wind, title: "Pranayama", desc: "Ancient breathing techniques for energy regulation and stress relief." },
    { icon: Brain, title: "Meditation", desc: "Scientific techniques to cultivate deep focus and emotional resilience." },
    { icon: Activity, title: "Cleansing Technique", desc: "Yogic detox (Shatkarma) for internal purity and boosted immunity." },
    { icon: Zap, title: "Dynamic Cardio", desc: "High-energy Zumba and Aerobics sessions for metabolic health." },
    { icon: Dumbbell, title: "Strength & Vajra", desc: "Functional strength training and specialized Vajra moves for vitality." },
    { icon: Sparkles, title: "Special Sessions", desc: "Curated wellness workshops and specialized recovery protocols." },
]

const schedule = [
    { label: "Morning Session 1", time: "6:10 AM – 7:10 AM", type: "Hybrid" },
    { label: "Morning Session 2", time: "7:15 AM – 8:15 AM", type: "Hybrid" },
    { label: "Morning Session 3", time: "8:30 AM – 9:30 AM", type: "Hybrid" },
    { label: "Afternoon Session", time: "12:00 PM – 1:00 PM", type: "Hybrid" },
    { label: "Evening Session", time: "6:00 PM – 7:00 PM", type: "Hybrid" },
]

export default function RegularYogaPracticePage() {
    return (
        <SEOPageLayout
            title="Regular Yoga Practice"
            description="Experience our signature Hybrid model—Online or Offline—designed for peak physiological performance."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Consistent Wellness"
            contactProgramName="Regular Yoga"
            features={[
                { title: "Hybrid Flexibility", desc: "Switch seamlessly between online and offline sessions as your schedule demands." },
                { title: "Complete Integration", desc: "A scientific blend of Asana, Pranayama, and modern functional fitness." },
                { title: "Therapeutic Focus", desc: "Direct guidance from senior instructors to ensure safety and alignment." }
            ]}
            faqs={faqs}
            contentBlocks={
                <div className="space-y-20">
                    <section>
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div className="max-w-2xl">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-primary/20">
                                    Online + Offline Available
                                </span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-heading leading-tight mb-4">
                                    The Science of <br />
                                    <span className="text-primary italic font-light">Daily Discipline</span>
                                </h2>
                                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                    Our Regular Practice is a meticulously structured ecosystem where ancient wisdom meets modern athletics. We don&apos;t just teach yoga; we cultivate sustainable lifestyle transformations.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                            {activities.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="relative p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white border border-primary/5 shadow-xl shadow-primary/[0.02] group hover:border-primary/20 hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <item.icon size={60} />
                                    </div>
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-sm md:text-xl font-sans font-bold text-heading mb-1.5 md:mb-3 group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                                    <p className="text-[10px] md:text-[13px] font-light text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors line-clamp-3 md:line-clamp-none">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <section className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-card rounded-[2.5rem] p-8 md:p-16 border border-primary/10 shadow-3xl">
                            <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                                <div className="flex-1 lg:max-w-md">
                                    <h3 className="text-3xl font-sans font-bold text-heading mb-6">Batch Schedule</h3>
                                    <p className="text-foreground/70 font-light leading-relaxed mb-8">
                                        Consistency is the bridge between goals and accomplishment. Choose a slot that aligns with your peak state.
                                    </p>
                                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-heading text-white rounded-2xl shadow-lg shadow-heading/20 cursor-pointer hover:bg-primary transition-colors">
                                        <Users size={20} />
                                        <span className="text-sm font-bold tracking-tight">Reserve Your Spot</span>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    {schedule.map((slot, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-center justify-between p-5 rounded-2xl border border-primary/5 bg-white/50 backdrop-blur-sm hover:border-primary/20 hover:bg-white transition-all duration-300 group/item"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-500">
                                                    <Clock size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 mb-1">{slot.label}</p>
                                                    <p className="font-sans font-bold text-heading text-lg">{slot.time}</p>
                                                </div>
                                            </div>
                                            <div className="px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 group-hover/item:border-secondary/30 transition-colors">
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">{slot.type}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-heading rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skew-x-12 translate-x-1/2" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-white text-3xl md:text-4xl mb-6">Experience the Transformation</h3>
                            <p className="text-white/70 font-light text-lg mb-10 leading-relaxed">
                                Join our thriving community of practitioners in <strong>Pimple Saudagar</strong> or connect with us <strong>online</strong> from anywhere in the world.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/917030705472?text=Hi!%20I'm%20interested%20in%20joining%20the%20Regular%20Yoga%20Practice%20batch."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gradient-to-r from-heading to-primary text-white rounded-xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all cursor-pointer"
                                >
                                    Join Now
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/jEeLfUs1VxfFvMDJ8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                                >
                                    View Locations
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            }
        />
    )
}
