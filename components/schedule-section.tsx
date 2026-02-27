'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Sun, Sunset, Moon, Sparkles } from 'lucide-react'

const schedule = [
    {
        period: "Morning Sessions",
        icon: Sun,
        color: "text-amber-500",
        bgColor: "bg-amber-50",
        batches: [
            { time: "6:00 AM – 6:30 AM", type: "21-Day Tone & Tighten Workshop", highlight: true },
            { time: "6:10 AM – 7:10 AM", type: "Regular Batch" },
            { time: "7:15 AM – 8:15 AM", type: "Regular Batch" },
            { time: "8:30 AM – 9:30 AM", type: "Regular Batch" },
            { time: "9:30 AM – 10:30 AM", type: "Online PCOD / PCOS Special", highlight: true },
        ]
    },
    {
        period: "Afternoon Sessions",
        icon: Sparkles,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        batches: [
            { time: "12:00 PM – 1:00 PM", type: "Regular Batch" },
        ]
    },
    {
        period: "Evening Sessions",
        icon: Sunset,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        batches: [
            { time: "5:00 PM – 6:00 PM", type: "Senior Citizen Special", highlight: true },
            { time: "6:00 PM – 7:00 PM", type: "Regular Batch" },
            { time: "7:30 PM – 8:00 PM", type: "21-Day Tone & Tighten Workshop", highlight: true },
        ]
    }
]

export function ScheduleSection() {
    return (
        <section id="schedule" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
            {/* Ambient Ambient Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em]"
                    >
                        Timetable
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight"
                    >
                        Class <span className="italic font-light text-slate-500">Schedule</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-600 text-xl font-light max-w-2xl mx-auto"
                    >
                        Online and Offline sessions available. Choose a time that suits your lifestyle.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {schedule.map((session, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className={`p-4 rounded-2xl ${session.bgColor} ${session.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <session.icon size={28} />
                                </div>
                                <h3 className="font-sans font-bold text-2xl text-slate-900 tracking-tight">{session.period}</h3>
                            </div>

                            <div className="space-y-8">
                                {session.batches.map((batch, idx) => (
                                    <div key={idx} className={`relative pl-8 border-l-2 transition-colors duration-500 ${batch.highlight ? 'border-emerald-500' : 'border-slate-100'}`}>
                                        <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full transition-transform duration-500 group-hover:scale-125 ${batch.highlight ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-200'}`}></div>
                                        <div className="flex flex-col space-y-1">
                                            <span className="font-bold text-lg text-slate-900 tracking-tight tabular-nums">{batch.time}</span>
                                            <span className={`text-sm font-medium ${batch.highlight ? 'text-emerald-700' : 'text-slate-500'}`}>
                                                {batch.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-white border border-slate-100 p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h4 className="font-sans font-bold text-2xl mb-4 text-slate-900 tracking-tight">Weekend & Special Activities</h4>
                        <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            Zumba • Aerobics • Vajra Movements • Strength Training • Special Sessions
                        </p>
                        <div className="inline-block mt-8 px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-emerald-100">
                            *Sunday Closed (Workshops / Appointments Only)
                        </div>
                    </div>
                    {/* Background Soft Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-50/50 -z-0"></div>
                </motion.div>
            </div>
        </section>
    )
}
