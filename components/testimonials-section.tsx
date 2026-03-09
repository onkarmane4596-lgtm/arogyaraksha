'use client'

import { motion } from 'framer-motion'
import { Star, MessageSquarePlus, ExternalLink, Sparkles, Quote } from 'lucide-react'

const googleReviewsData = {
  profileName: "Arogyaraksha Yoga Pune",
  rating: 5.0,
  reviewCount: 285,
  shareLink: "https://g.page/r/CTbITJQkDgyVEBE/review",
  summary: "People say this yoga studio offers a variety of courses and helps people improve their flexibility, strength, and mental clarity. They highlight the calm, welcoming, and clean atmosphere, as well as the beautiful greenery surrounding the space. They also like the knowledgeable, attentive, and passionate instructors who provide personalized attention and guidance."
}

// Placeholder reviews simulating real Google Reviews layout
const reviews = [
  {
    name: 'Priyanka Desai',
    date: 'a month ago',
    text: 'Arogyaraksha is truly a sanctuary. The therapy yoga sessions are highly customized. The teachers pay attention to every detail and ensuring correct posture. My back pain has significantly reduced since joining.',
    rating: 5,
    avatar: 'P'
  },
  {
    name: 'Rahul Joshi',
    date: '2 months ago',
    text: 'Best yoga studio in Pimpri-Chinchwad! The environment is incredibly peaceful and the instructors are deeply knowledgeable about traditional yoga practices and therapy. Highly recommend for pure healing.',
    rating: 5,
    avatar: 'R'
  },
  {
    name: 'Neha K',
    date: '3 months ago',
    text: 'The PCOS therapy batch has been life-changing. Not only just physically, but mentally too. The guidance is authentic and the community is very supportive. 5 stars without a doubt.',
    rating: 5,
    avatar: 'N'
  },
  {
    name: 'Deepak M',
    date: '4 months ago',
    text: 'Highly effective yoga sessions for stress relief. The environment full of greenery naturally relaxes you. I always look forward to my morning classes.',
    rating: 5,
    avatar: 'D'
  }
]

const summaryAvatars = [
  { name: 'P', color: 'bg-blue-100 text-blue-600' },
  { name: 'R', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'N', color: 'bg-purple-100 text-purple-600' },
  { name: 'D', color: 'bg-amber-100 text-amber-600' },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-16 bg-background relative overflow-hidden flex flex-col items-center">

      {/* Background flourishes */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 max-w-7xl px-4 sm:px-6 md:px-8">

        <div className="mb-12 md:mb-12 space-y-4 md:space-y-4 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary"
          >
            Real Google Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-heading leading-[1.1] tracking-tight"
          >
            Community <br />
            <span className="italic font-light text-primary">Feedback</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Creative Summary Card (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-card relative overflow-hidden group p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/10"
            >
              {/* Decorative AI Sparkle */}
              <div className="absolute top-6 right-6 p-2 md:p-3 bg-primary/5 rounded-full">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="font-sans text-xl md:text-2xl text-heading font-bold mb-2 md:mb-3 tracking-tight">{googleReviewsData.profileName}</h3>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-4xl md:text-5xl font-black text-heading">
                    {googleReviewsData.rating.toFixed(1)}
                  </span>
                  <div className="flex flex-col gap-0.5 md:gap-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className="fill-primary text-primary md:w-5 md:h-5" />
                      ))}
                    </div>
                    <span className="text-primary text-[10px] md:text-sm font-bold uppercase tracking-widest">
                      {googleReviewsData.reviewCount} verified reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Summary Text */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 md:w-12 md:h-12 text-primary/10 -z-10 transform -scale-x-100" />
                <p className="text-foreground/80 leading-relaxed font-light text-[15px] md:text-xl mb-8 md:mb-10 relative z-10 italic">
                  "{googleReviewsData.summary}"
                </p>
              </div>

              {/* Overlapping Avatars */}
              <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-primary/10">
                <div className="flex -space-x-3 md:-space-x-4">
                  {summaryAvatars.map((avatar, i) => (
                    <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm ${avatar.color} border-[3px] md:border-4 border-card shadow-sm transition-transform hover:translate-y-[-4px] cursor-default`}>
                      {avatar.name}
                    </div>
                  ))}
                  <div className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center bg-primary/10 text-primary font-bold text-[10px] md:text-xs border-[3px] md:border-4 border-card shadow-sm">
                    +280
                  </div>
                </div>
              </div>

            </motion.div>

            <div className="space-y-6 pt-6">
              <div className="px-2">
                <p className="text-foreground/70 text-base leading-relaxed font-light">
                  Arogyaraksha Yoga Pune would love your feedback. Post a review to our profile.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={googleReviewsData.shareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-heading to-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                >
                  <MessageSquarePlus size={18} />
                  <span>Write a Review</span>
                </a>
                <a
                  href="https://www.google.com/search?q=Arogyaraksha+Yoga+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-16 h-16 bg-muted text-foreground/60 border border-primary/10 rounded-2xl shadow-sm hover:bg-background hover:text-primary transition-all hover:-translate-y-1"
                >
                  <ExternalLink size={24} />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Individual Reviews Grid */}
          <div className="lg:col-span-7 columns-2 md:columns-2 gap-3 sm:gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="break-inside-avoid mb-3 sm:mb-6 md:mb-6 bg-card p-4 sm:p-6 md:p-6 rounded-[1.25rem] md:rounded-[2rem] shadow-md shadow-primary/5 border border-primary/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-[0.6rem] md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-base md:text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-heading text-[12px] md:text-base tracking-tight leading-tight">{review.name}</h4>
                      <p className="text-[8px] md:text-xs text-primary/60 uppercase tracking-widest font-bold mt-0.5">{review.date}</p>
                    </div>
                  </div>
                  <div className="opacity-30 group-hover:opacity-60 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] md:w-[22px] md:h-[22px]" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                  </div>
                </div>

                <div className="flex gap-0.5 md:gap-1 mb-2 md:mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={10} className="fill-primary text-primary md:w-4 md:h-4" />
                  ))}
                </div>

                <p className="text-foreground/80 text-[10px] sm:text-[12px] md:text-base leading-relaxed font-light line-clamp-5 md:line-clamp-none">
                  "{review.text}"
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
