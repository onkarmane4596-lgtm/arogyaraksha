'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { X, Play } from 'lucide-react'

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

function AccordionVideoCard({ item, index, onClick }: { item: any, index: number, onClick: () => void }) {
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
            onClick={onClick}
            className="group relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] cursor-pointer shadow-xl hover:shadow-2xl flex-shrink-0 
                       h-[50vh] md:h-[70vh] 
                       flex-1 hover:flex-[5] md:hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-primary/10"
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
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                />
            </div>

            {/* Gradient Overlay for text readability - More subtle on light theme */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 md:h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100 md:opacity-40 md:group-hover:opacity-100"></div>

            {/* Play Button Indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 scale-75 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                    <Play size={28} className="ml-1.5 md:ml-2" fill="currentColor" />
                </div>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end pointer-events-none z-20">
                <div className="translate-y-8 group-hover:translate-y-0 md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">

                    {/* Number Badge */}
                    <span className="inline-block text-primary font-bold text-[10px] md:text-sm tracking-widest mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        0{index + 1}
                    </span>

                    <h3 className="font-sans text-white text-[16px] sm:text-lg md:text-3xl font-bold mb-2 md:mb-4 drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis -rotate-90 origin-bottom-left absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 md:bottom-10 group-hover:rotate-0 group-hover:relative group-hover:bottom-auto group-hover:left-auto group-hover:translate-x-0 transition-all duration-500 ease-in-out tracking-tight opacity-0 md:opacity-100 group-hover:opacity-100">
                        {item.title}
                    </h3>

                    <div className="overflow-hidden h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out md:min-w-[300px]">
                        <p className="text-white/90 text-[13px] md:text-lg font-light drop-shadow-sm leading-relaxed md:mt-2 text-balance whitespace-normal line-clamp-2 md:line-clamp-none">
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function MasonryGallery() {
    const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold uppercase tracking-[0.3em] text-primary"
                        >
                            Visual Journey
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-heading leading-[1.1] tracking-tight text-balance"
                        >
                            Moments of <br className="hidden md:block" />
                            <span className="italic font-light text-primary">Transformation</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/80 font-light max-w-sm text-lg leading-relaxed"
                    >
                        Hover over a moment to immerse yourself. Experience the authentic atmosphere, energy, and serenity of our practice.
                    </motion.p>
                </div>

                {/* Creative Expanding Accordion Layout */}
                <div className="flex flex-row overflow-hidden gap-1.5 sm:gap-2 md:gap-4 lg:gap-6 w-full">
                    {galleryItems.map((item, index) => (
                        <AccordionVideoCard
                            key={item.id}
                            item={item}
                            index={index}
                            onClick={() => setSelectedVideo(item)}
                        />
                    ))}
                </div>

            </div>

            {/* Full Screen Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all z-50 shadow-2xl"
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full max-w-7xl aspect-[16/9] md:aspect-[21/9] relative rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black"
                        >
                            <video
                                src={selectedVideo.src}
                                autoPlay
                                controls
                                className="w-full h-full object-contain"
                            />
                            {/* Information Overlay on Modal */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 md:p-12 pointer-events-none z-10">
                                <h3 className="text-white text-2xl md:text-5xl font-sans font-bold mb-2 md:mb-4 tracking-tight drop-shadow-lg">{selectedVideo.title}</h3>
                                <p className="text-white/80 text-sm md:text-xl font-light drop-shadow-md max-w-3xl leading-relaxed">{selectedVideo.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
