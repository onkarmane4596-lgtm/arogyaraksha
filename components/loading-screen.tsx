'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Minimum loading time to ensure smooth animation
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                >
                    {/* Background subtle glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary-light),_transparent_70%)] opacity-20" />

                    <div className="relative flex flex-col items-center gap-12">
                        {/* Logo & Branding */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="relative w-40 h-16 md:w-56 md:h-24">
                                <Image
                                    src="/images/logo.png"
                                    alt="Arogya Raksha Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-12 bg-primary/20" />
                                <span className="text-[10px] md:text-[14px] uppercase tracking-[0.4em] font-sans font-medium text-primary/60">
                                    Therapeutic Yoga
                                </span>
                                <div className="h-[1px] w-12 bg-primary/20" />
                            </div>
                        </motion.div>

                        {/* Progress Indicator */}
                        <div className="w-48 h-[2px] bg-primary/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                className="h-full bg-primary"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
