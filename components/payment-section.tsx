'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { QrCode, ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react'

export function PaymentSection() {
    return (
        <section id="payment" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                <QrCode size={14} />
                                Payment Portal
                            </motion.div>
                            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight">
                                Secure & <span className="italic font-light text-slate-400">Seamless</span> Payments
                            </h2>
                            <p className="text-slate-600 text-xl font-light leading-relaxed max-w-xl">
                                Join our therapeutic sessions with ease. Please pay the fees using the QR code provided here to confirm your enrollment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-stone-50 border border-slate-100 space-y-4">
                                <div className="p-3 w-fit rounded-xl bg-emerald-100 text-emerald-700">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg tracking-tight">Secure Payments</h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">Verified merchant gateway for absolute peace of mind.</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-stone-50 border border-slate-100 space-y-4">
                                <div className="p-3 w-fit rounded-xl bg-emerald-100 text-emerald-700">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold text-lg tracking-tight">Instant Magic</h4>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">Transactions are processed immediately via UPI.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 text-white text-sm font-bold tracking-widest uppercase">
                                <CheckCircle2 size={18} className="text-emerald-400" />
                                Accepted: GPay, PhonePe, Paytm, UPI
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: QR Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Glowing Atmosphere */}
                        <div className="absolute -inset-10 bg-emerald-100/50 rounded-full blur-3xl opacity-20"></div>

                        <div className="relative bg-stone-50 rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col items-center text-center overflow-hidden">
                            {/* Decorative Pattern */}
                            <div className="absolute top-0 right-0 p-10 opacity-[0.03] -translate-y-1/2 translate-x-1/2">
                                <QrCode size={300} />
                            </div>

                            <h3 className="text-slate-900 text-3xl font-bold mb-2 tracking-tight">Scan to Pay</h3>
                            <p className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] mb-12">Official Merchant QR</p>

                            <div className="relative group">
                                {/* Border Frame for QR */}
                                <div className="absolute -inset-6 border-2 border-emerald-100 rounded-[2.5rem] group-hover:border-emerald-300 transition-colors duration-700"></div>
                                <div className="absolute -inset-1 border border-emerald-50 rounded-2xl"></div>

                                <div className="relative bg-white rounded-2xl p-6 shadow-xl shadow-slate-200 border border-slate-50 group-hover:scale-[1.02] transition-transform duration-700">
                                    <Image
                                        src="/images/qr.jpeg"
                                        alt="Payment QR Code"
                                        width={260}
                                        height={260}
                                        className="rounded-lg mix-blend-multiply"
                                    />
                                </div>
                            </div>

                            <div className="mt-14 space-y-2">
                                <p className="text-slate-400 text-sm font-medium tracking-wide italic">
                                    &quot;Payment confirmation is immediate.&quot;
                                </p>
                                <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[0.2em]">
                                    Arogya Raksha Yoga & Therapy
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
