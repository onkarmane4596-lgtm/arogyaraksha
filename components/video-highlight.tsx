'use client'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Play, Pause, Maximize, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export function VideoHighlight() {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const breathingControls = useAnimation()

    // Subtle parallax for the text overlay
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/03/10/audio_5be0938b81.mp3") // Peaceful ambient breath-like sound
        audioRef.current.loop = true
        audioRef.current.volume = 0.4

        const handleScroll = () => {
            if (audioRef.current && !audioRef.current.paused) {
                audioRef.current.pause()
                breathingControls.stop()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [breathingControls])

    useEffect(() => {
        if (isHovered) {
            audioRef.current?.play().catch(e => console.log("Audio play blocked:", e))
            breathingControls.start({
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.4, 0.1],
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            })
        } else {
            audioRef.current?.pause()
            breathingControls.stop()
            breathingControls.set({ scale: 1, opacity: 0.1 })
        }
    }, [isHovered, breathingControls])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
            {/* Ambient Deep Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent pointer-events-none"></div>

            <div className="container relative z-10">

                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-4"
                    >
                        <Sparkles size={14} />
                        Real Experience
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white leading-[1.1] tracking-tight text-balance"
                    >
                        Step Inside the <br />
                        <span className="italic font-light text-slate-400">Sanctuary</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Witness the calm, the focus, and the transformative energy of our therapeutic practice.
                    </motion.p>
                </div>

                {/* Video Container - Aspect Ratio 21:9 for cinematic look on desktop, 16:9 on mobile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden bg-slate-900 group shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Fallback Image/Gradient before video loads */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 to-slate-950 z-0 opacity-50"></div>

                    <video
                        ref={videoRef}
                        src="https://cdn.pixabay.com/video/2020/05/26/40251-425442749_large.mp4"
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 transition-opacity duration-1000 group-hover:opacity-80"
                        loop
                        muted
                        playsInline
                        poster="/placeholder.svg"
                    ></video>

                    {/* Cinematic Overlay Gradient */}
                    <div className={cn(
                        "absolute inset-0 bg-slate-950/40 transition-opacity duration-700 z-10",
                        isPlaying && !isHovered ? "opacity-0" : "opacity-100"
                    )}></div>

                    {/* Interactive Play Button overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <button
                            onClick={togglePlay}
                            className={cn(
                                "w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-500 backdrop-blur-xl border-2",
                                isPlaying && !isHovered
                                    ? "opacity-0 scale-75"
                                    : "opacity-100 scale-100 shadow-2xl shadow-emerald-600/20",
                                isPlaying
                                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                                    : "bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-500 hover:scale-110"
                            )}
                        >
                            {isPlaying ? (
                                <Pause size={40} className="text-white drop-shadow-md" />
                            ) : (
                                <Play size={44} className="text-white drop-shadow-md ml-3" />
                            )}
                        </button>
                    </div>

                    {/* Floating Text effect inside the video */}
                    <motion.div
                        style={{ y }}
                        animate={breathingControls}
                        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                    >
                        <h3 className="font-sans text-5xl md:text-9xl text-white font-black tracking-[0.2em] uppercase">
                            Breathe.
                        </h3>
                    </motion.div>

                    {/* Controls hint */}
                    <div className={cn(
                        "absolute bottom-8 right-8 z-20 transition-all duration-500",
                        isPlaying && !isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0 text-white/50 flex gap-4"
                    )}>
                        <button className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                            <Maximize size={20} />
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
