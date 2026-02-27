'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

// Using the provided mp4 video assets with accurate titles based on real content analysis
const galleryItems = [
    { id: 1, src: '/assets/1.mp4', title: 'Group Practice', desc: 'Synchronous core engagement and leg raises in our lush outdoor pavilion.' },
    { id: 2, src: '/assets/2.mp4', title: 'Student Journey', desc: 'Heartfelt experiences and feedback from our Pune studio members.' },
    { id: 3, src: '/assets/3.mp4', title: 'Joy of Movement', desc: 'Expressive warm-ups and dynamic ecstatic flow in the garden.' },
    { id: 4, src: '/assets/4.mp4', title: 'Path to Peace', desc: 'A tranquil walk through our serene stone pathways at golden hour.' },
    { id: 5, src: '/assets/5.mp4', title: 'Healing Stories', desc: 'Real student experiences and the transformative impact of daily practice.' },
    { id: 6, src: '/assets/6.mp4', title: 'Post-Pregnancy Care', desc: 'Specialized therapeutic yoga supporting mothers on their healing journey.' },
    { id: 7, src: '/assets/7.mp4', title: 'Our Sanctuary', desc: 'A cinematic glimpse into our premium, sunlit retreat villa.' },
    { id: 8, src: '/assets/8.mp4', title: 'Omkar Sadhana', desc: 'Deep evening Yog Nidra and meditation sessions for ultimate serenity.' },
]

function AccordionVideoCard({ item, index }: { item: any, index: number }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.muted = false
            videoRef.current.play().catch(() => { })
        }
    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.muted = true
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1]
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl bg-slate-100 flex-shrink-0 snap-center
                       min-w-[85vw] h-[60vh] md:min-w-0 md:h-[70vh] 
                       md:flex-1 md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-slate-200"
        >
            {/* Video Container */}
            <div className="absolute inset-0 w-full h-full bg-slate-200">
                <video
                    ref={videoRef}
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out md:group-hover:scale-105"
                />
            </div>

            {/* Gradient Overlay for text readability - More subtle on light theme */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 md:opacity-40 md:group-hover:opacity-100 opacity-80"></div>

            {/* Text Content */}
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end pointer-events-none z-20">
                <div className="md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">

                    {/* Number Badge */}
                    <span className="inline-block text-emerald-400 font-bold text-sm tracking-widest mb-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">
                        0{index + 1}
                    </span>

                    <h3 className="font-sans text-white text-3xl md:text-3xl font-bold mb-4 drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis md:-rotate-90 md:origin-bottom-left md:absolute md:bottom-10 md:left-10 md:group-hover:rotate-0 md:group-hover:relative md:group-hover:bottom-auto md:group-hover:left-auto transition-all duration-500 ease-in-out tracking-tight">
                        {item.title}
                    </h3>

                    <div className="overflow-hidden md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-500 ease-out min-w-[300px]">
                        <p className="text-white/90 text-lg font-light drop-shadow-sm leading-relaxed mt-2 text-balance">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function MasonryGallery() {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600"
                        >
                            Visual Journey
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-slate-900 leading-[1.1] tracking-tight text-balance"
                        >
                            Moments of <br className="hidden md:block" />
                            <span className="italic font-light text-slate-400">Transformation</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 font-light max-w-sm text-lg leading-relaxed"
                    >
                        Hover over a moment to immerse yourself. Experience the authentic atmosphere, energy, and serenity of our practice.
                    </motion.p>
                </div>

                {/* Creative Expanding Accordion Layout */}
                <div className="flex flex-row overflow-x-auto md:overflow-hidden snap-x snap-mandatory md:snap-none gap-6 md:gap-4 lg:gap-6 pb-12 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar w-full">
                    {galleryItems.map((item, index) => (
                        <AccordionVideoCard key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}
