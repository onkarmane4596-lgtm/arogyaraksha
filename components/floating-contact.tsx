'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function FloatingContact() {
    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <Link
                    href="https://wa.me/917030705472"
                    className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={30} className="fill-current" />
                </Link>
            </motion.div>

            {/* Call Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >
                <Link
                    href="tel:+917030705472"
                    className="flex items-center justify-center w-14 h-14 bg-white text-green-600 rounded-full shadow-lg hover:scale-110 transition-transform border border-green-100"
                    aria-label="Call Us"
                >
                    <Phone size={28} className="fill-current" />
                </Link>
            </motion.div>
        </div>
    )
}
