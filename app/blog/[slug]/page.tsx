import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ChevronRight, User, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react'

// This would typically come from a CMS or Database
const blogDatabase = {
    'managing-pcos-with-yoga': {
        title: "The Ultimate Guide to Managing PCOS with Yoga",
        excerpt: "Discover the best yoga for PCOS and how specific pelvic floor strengthening exercises can naturally restore hormonal balance and regulate periods.",
        content: `
      ## The Hidden Truth About PCOS and Stress
      
      Many women diagnosed with Polycystic Ovary Syndrome (PCOS) are immediately told to "lose weight" and hit the gym. However, intense high-impact cardio can inadvertently trigger a massive release of **cortisol** (the stress hormone). For women with PCOS, elevated cortisol directly worsens insulin resistance and androgen production.

      This is where therapeutic **PCOS yoga therapy** shines. It is not just about stretching; it is a clinical intervention designed to regulate the endocrine system without spiking stress hormones.

      <div class="my-10 p-8 rounded-3xl bg-secondary/10 border-l-4 border-primary">
        <p class="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
           "Yoga does not just burn calories; it reprograms how your nervous system responds to stress, which is the foundational root of hormonal imbalance."
        </p>
      </div>

      ## Pelvic Floor Asanas for Ovarian Health

      Targeted poses explicitly direct fresh, oxygenated blood to the pelvic region. This mechanical stimulation is crucial for flushing stagnant blood and supporting healthy follicular development.

      ### 1. Baddha Konasana (Bound Angle Pose)
      Often referred to as the butterfly pose, this is the holy grail of **yoga for irregular periods**. It deeply opens the pelvic basin.
      *   **Clinical Benefit:** Drastically improves circulation to the ovaries and uterus, easing severe menstrual cramping and promoting a regular cycle.

      ### 2. Supta Baddha Konasana (Supported Reclining Angle)
      Taking the bound angle pose onto a bolster allows for complete parasympathetic nervous system engagement.
      *   **Clinical Benefit:** Lowers cortisol to baseline levels. This is the exact state where the body feels safe enough to prioritize reproductive functions over "fight or flight" survival.

      ## The Role of Insulin Resistance

      Over 70% of PCOS cases involve some degree of insulin resistance. Traditional weight lifting helps, but dynamic yoga flows (Vinyasa) specifically train the muscles to accept glucose without needing massive spikes of insulin. By building lean muscle through bodyweight resistance, you actively starve the visceral fat that causes hormonal disruption.

      ### A Holistic Approach
      Remember, true healing requires consistency. Combining these physical asanas with deep, slow diaphragmatic breathing (Pranayama) creates the optimal internal environment for your hormones to naturally balance themselves.
    `,
        author: "Arogya Raksha Clinical Team",
        date: "October 12, 2023",
        readTime: "8 min read",
        category: "Women's Health",
        image: "/images/programs/pcos-therapy-new.png",
        related: ['desk-job-back-pain-posture', 'yoga-vs-gym-weight-loss']
    },
    'knee-arthritis-chair-yoga': {
        title: "Chair Yoga Routines for Severe Knee Arthritis",
        excerpt: "Gentle mobility exercises for elderly individuals looking for arthritis relief without putting pressure on the knee joints.",
        content: `
      ## Understanding Knee Osteoarthritis
      
      Osteoarthritis (OA) in the knees occurs when the protective cartilage that cushions the ends of your bones wears down over time. For many seniors, the resulting bone-on-bone friction causes severe pain, stiffness, and a loss of mobility. 
      
      When movement hurts, the natural response is to stop moving. However, this creates a vicious cycle. Immobility leads to muscle atrophy in the quadriceps and hamstrings, which in turn removes the critical muscular support system your knee joint desperately needs.
      
      <div class="my-10 p-8 rounded-3xl bg-secondary/10 border-l-4 border-primary">
        <p class="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
           "The goal of therapeutic yoga for arthritis is not to 'cure' the worn cartilage, but to strengthen the surrounding musculature so the joint bears less of the mechanical load."
        </p>
      </div>

      ## The Power of Chair Yoga
      
      **Chair yoga** is a revolutionary approach for senior citizens because it entirely eliminates the fear of falling and removes the excessive gravitational load placed on the knees during traditional standing asanas.

      ### 1. Seated Leg Extensions (Quadricep Strengthening)
      The vastus medialis (the inner teardrop muscle of the quad) is the most important stabilizer for the kneecap.
      *   Sit tall in your chair. Slowly straighten your right leg out in front of you, flexing your foot toward your face.
      *   Hold for 5 seconds, engaging the thigh. Release slowly.
      *   **Clinical Benefit:** Rebuilds the quadricep muscle actively without any weight-bearing compression on the knee joint itself.

      ### 2. Ankle Rotations & Calf Stretches
      Stiff ankles directly alter your gait (how you walk), which forces the knee to absorb unnatural rotational forces.
      *   Extend one leg and draw slow, large circles with your toes.
      *   **Clinical Benefit:** Improves ankle mobility and encourages synovial fluid (the body's natural joint lubricant) to circulate around the lower extremities.

      ## Synovial Fluid: Motion is Lotion
      
      Human joints do not have blood supply inside the capsule. The only way articular cartilage gets nutrients is through the circulation of synovial fluid. This fluid is only moved through *mechanical action*. By performing gentle, unloaded range-of-motion exercises in a chair, you are literally feeding the starving cartilage in your knees.
    `,
        author: "Arogya Raksha Clinical Team",
        date: "October 15, 2023",
        readTime: "5 min read",
        category: "Senior Wellness",
        image: "/images/programs/senior-yoga-new.png",
        related: []
    },
    'desk-job-back-pain-posture': {
        title: "Desk Job Back Pain: Posture Correction for IT Professionals",
        excerpt: "Working long hours in Hinjewadi? Learn how targeted neck pain yoga therapy can reverse structural damage and cure sciatica.",
        content: `
      ## The Epidemic of "Tech Neck"
      
      If you work in IT or spend 8+ hours a day bent over a laptop, your spine is likely experiencing severe, sustained micro-trauma. The human head weighs approximately 10 to 12 pounds. However, when you tilt your head forward by just 45 degrees, the gravitational force exerted on your cervical spine (neck) jumps to nearly **50 pounds**.
      
      Over time, this intense forward-head posture flattens the natural lordotic curve of the neck, leading to chronic muscle spasms, pinched nerves, and referred pain radiating down the arms.

      <div class="my-10 p-8 rounded-3xl bg-secondary/10 border-l-4 border-primary">
        <p class="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
           "You cannot permanently fix posture by simply 'sitting up straight'. True posture correction requires lengthening the shortened muscles of the chest and strengthening the weakened muscles of the upper back."
        </p>
      </div>

      ## Reversing the Damage: Target Asanas
      
      Therapeutic back pain yoga focuses on spinal decompression and muscular re-education.

      ### 1. Bhujangasana (Cobra Pose)
      This is the ultimate antidote to slouching.
      *   **Clinical Benefit:** Actively engages the erector spinae muscles (the muscles running alongside the spine) and stretches the chronically tight pectorals (chest muscles). It forces the spine into extension, countering the endless hours of slouched flexion.

      ### 2. Marjaryasana-Bitilasana (Cat-Cow Stretch)
      A gentle, flowing movement coordinating breath with spinal flexion and extension.
      *   **Clinical Benefit:** Hydrates the intervertebral discs. Think of your spinal discs like sponges; alternating rounding and arching the back squeezes out waste and absorbs fresh blood and nutrients.

      ## Sciatica and the Piriformis Muscle
      
      Prolonged sitting also crushes the gluteal muscles and tightens the piriformis—a small muscle deep in the buttocks. When the piriformis tightens, it can directly compress the sciatic nerve, sending shooting pain down the back of the leg.
      *   Targeted hip openers like **Supta Kapotasana (Reclining Pigeon Pose)** are medically proven to release piriformis tension and provide rapid, natural sciatica relief without painkillers.
    `,
        author: "Arogya Raksha Clinical Team",
        date: "October 18, 2023",
        readTime: "6 min read",
        category: "Pain Management",
        image: "/images/home-hero-elegant.jpg",
        related: []
    },
    'yoga-vs-gym-weight-loss': {
        title: "Yoga vs Gym for Weight Loss: The Cortisol Factor",
        excerpt: "Why extreme cardio might be causing you to hold onto belly fat, and how hormonal weight loss yoga provides a sustainable alternative.",
        content: `
      ## The Cortisol Trap
      
      It's a frustrating story heard in our Pimple Saudagar studio every single day: "I'm running on the treadmill for an hour straight, lifting weights, restricting my calories, and the scale refuses to move. In fact, I'm gaining weight around my belly."
      
      Welcome to the **Cortisol Trap**.
      
      When you engage in extreme, high-impact cardiovascular exercise, your body perceives this as a threat to survival. In response, your adrenal glands pump out massive amounts of cortisol. Chronically high cortisol levels command your body to halt fat-burning entirely and instead store fat—specifically visceral adipose tissue around your abdomen—as an emergency energy reserve.

      <div class="my-10 p-8 rounded-3xl bg-secondary/10 border-l-4 border-primary">
        <p class="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
           "You cannot out-train a hormonal imbalance. If your nervous system is trapped in 'fight or flight', your body will stubbornly hold onto every gram of fat."
        </p>
      </div>

      ## How Hormonal Weight Loss Yoga Works
      
      Therapeutic weight loss yoga is fundamentally different from gym workouts. It prioritizes shifting the nervous system into the parasympathetic ("rest and digest") state, signaling to the body that it is safe to release stored fat.

      ### 1. Thyroid Stimulation (Sarvangasana & Halasana)
      The thyroid gland controls your entire basal metabolic rate. 
      *   Inversions like the Shoulder Stand (Sarvangasana) explicitly compress the throat region, restricting blood flow temporarily. When released, a massive surge of fresh blood floods the thyroid, mechanically stimulating it to optimize hormone production and effectively "speed up" a sluggish metabolism.

      ### 2. Deep Twists for Liver Detoxification (Ardha Matsyendrasana)
      Your liver is your body's primary fat-burning organ. Overworked livers struggle to metabolize fat.
      *   Seated spinal twists create an intense compression-and-release effect on the abdominal organs. This mechanical "wringing out" flushes stagnant blood and toxins from the liver, highly optimizing its ability to process lipids.

      ## Building Lean Muscle Mass
      
      Yoga is not just stretching. Slow, controlled Vinyasa flows and holding poses like Virabhadrasana (Warrior II) create intense isometric muscle contractions. This builds lean, dense muscle mass. Muscle is metabolically active tissue—the more muscle you have from bodyweight resistance, the more calories your body burns at rest.
    `,
        author: "Arogya Raksha Clinical Team",
        date: "October 22, 2023",
        readTime: "7 min read",
        category: "Weight Loss",
        image: "/images/programs/weight-loss-new.png",
        related: []
    },
    'breathing-exercises-sleep-anxiety': {
        title: "Breathing Exercises for Sleep and Anxiety",
        excerpt: "Struggling with stress? Try these deep pranayama techniques to lower cortisol, calm the nervous system, and improve sleep quality tonight.",
        content: `
      ## The Mechanics of Anxiety
      
      Anxiety is not just "in your head"; it is a systemic physiological response. When you feel anxious or stressed, your breathing pattern fundamentally changes. It becomes shallow, rapid, and entirely confined to the upper chest (clavicular breathing). 
      
      This shallow breathing sends a bio-feedback loop directly to the brain via the vagus nerve, confirming that there is a "threat" present, which sustains the anxiety loop and completely ruins deep sleep architecture.

      <div class="my-10 p-8 rounded-3xl bg-secondary/10 border-l-4 border-primary">
        <p class="text-xl md:text-2xl font-serif text-foreground/90 italic leading-relaxed">
           "The breath is the only autonomic function of the body that you can consciously control. By hijacking your breath, you can instantly hijack your nervous system."
        </p>
      </div>

      ## Target Pranayama for Restorative Sleep
      
      If you struggle to fall asleep, these clinical breathing exercises (Pranayama) are designed to dramatically lower your heart rate and down-regulate your sympathetic nervous system.

      ### 1. Nadi Shodhana (Alternate Nostril Breathing)
      This is the ultimate balancing technique.
      *   **How to do it:** Use your right thumb to close your right nostril. Inhale deeply through the left. Close the left nostril with your ring finger, open the right, and exhale slowly. Inhale through the right, close it, and exhale through the left.
      *   **Clinical Benefit:** Synchronizes the left and right hemispheres of the brain and rapidly clears the mind of racing, repetitive thoughts (rumination).

      ### 2. Bhramari (Humming Bee Breath)
      A powerful technique leveraging sound vibration.
      *   **How to do it:** Close your ears with your thumbs and rest your fingers lightly over your eyes. Inhale deeply, and as you exhale, make a low, steady humming sound like a bee.
      *   **Clinical Benefit:** The physical vibration created in the vocal cords directly stimulates the vagus nerve. Vagal stimulation instantly drops blood pressure, slows the heartbeat, and floods the brain with calming neurotransmitters like GABA.

      ## The 4-7-8 Technique
      
      For acute anxiety or midnight wakefulness, use this strict ratio:
      1. Inhale quietly through the nose for **4 seconds**.
      2. Hold the breath for **7 seconds**.
      3. Exhale forcefully through the mouth, making a whoosh sound, for **8 seconds**.
      *   *Why it works:* Extending the exhalation specifically triggers the relaxation response. Repeat this cycle four times and your body will naturally prepare for sleep.
    `,
        author: "Arogya Raksha Clinical Team",
        date: "October 25, 2023",
        readTime: "4 min read",
        category: "Mental Health",
        image: "/images/programs/programs-hero.jpg",
        related: []
    }
}

export function generateStaticParams() {
    return Object.keys(blogDatabase).map((slug) => ({
        slug: slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogDatabase[resolvedParams.slug as keyof typeof blogDatabase]
    if (!post) return { title: 'Not Found' }

    return {
        title: `${post.title} | Arogya Raksha Medical Yoga`,
        description: post.excerpt,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = blogDatabase[resolvedParams.slug as keyof typeof blogDatabase]

    if (!post) {
        notFound()
    }

    // Function to render markdown-like content safely (for this mock, we use dangerouslySetInnerHTML)
    const renderContent = (content: string) => {
        // Quick visual styling replacements for the mock content
        let formatted = content
            .replace(/## (.*?)\n/g, '<h2 class="text-3xl md:text-4xl font-serif text-foreground mt-16 mb-6 leading-tight">$1</h2>')
            .replace(/### (.*?)\n/g, '<h3 class="text-2xl font-serif text-foreground mt-10 mb-4">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
            .replace(/\*(.*?)\n/g, '<li class="ml-6 mb-2 list-disc">$1</li>')
            .replace(/<div class/g, '<div className') // Fix JSX syntax in string
            .replace(/class=/g, 'className=')

        // Wrap regular paragraphs
        const paragraphs = formatted.split('\n\n').map(p => {
            if (p.trim().startsWith('<') || p.trim() === '') return p;
            return `<p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">${p}</p>`
        }).join('\n');

        return paragraphs;
    }

    return (
        <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
            <Header />

            {/* Structured Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "image": `https://www.arogyaraksha.com${post.image}`,
                        "datePublished": "2023-10-12T08:00:00+08:00",
                        "dateModified": "2023-10-12T09:20:00+08:00",
                        "author": {
                            "@type": "Organization",
                            "name": post.author,
                            "url": "https://www.arogyaraksha.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Arogya Raksha Yoga",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.arogyaraksha.com/logo.png"
                            }
                        },
                        "description": post.excerpt
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.arogyaraksha.com"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Blog",
                            "item": "https://www.arogyaraksha.com/blog"
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": post.title
                        }]
                    })
                }}
            />

            {/* Breadcrumbs */}
            <div className="pt-24 pb-4 border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-40">
                <div className="container max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="opacity-50" />
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <ChevronRight size={14} className="opacity-50" />
                    <span className="text-foreground truncate max-w-[200px] md:max-w-xs">{post.title}</span>
                </div>
            </div>

            {/* Cinematic Article Hero */}
            <article className="relative z-10">
                <div className="container max-w-5xl mx-auto pt-12 md:pt-20 pb-10 px-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-8 max-w-4xl tracking-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed mb-10">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-foreground/70 mb-12">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-primary" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-primary" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-primary" />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sweeping Hero Image */}
                <div className="container max-w-6xl mx-auto px-4 mb-16 md:mb-24">
                    <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    </div>
                </div>

                {/* Article Content & Sticky Sidebar Layout */}
                <div className="container max-w-7xl mx-auto px-4 pb-24">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                        {/* Sticky Table of Contents (Desktop) */}
                        <div className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-40 bg-card rounded-3xl p-6 border border-border/50 shadow-lg shadow-black/5">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6 flex items-center gap-2">
                                    <BookOpen size={16} className="text-primary" />
                                    In this Article
                                </h4>
                                <ul className="space-y-4 text-sm font-medium text-muted-foreground">
                                    <li className="text-primary border-l-2 border-primary pl-3 -ml-0.5 cursor-pointer hover:text-primary transition-colors">
                                        The Hidden Truth About PCOS
                                    </li>
                                    <li className="border-l-2 border-transparent pl-3 -ml-0.5 cursor-pointer hover:text-foreground transition-colors">
                                        Pelvic Floor Asanas
                                    </li>
                                    <li className="border-l-2 border-transparent pl-3 -ml-0.5 cursor-pointer hover:text-foreground transition-colors">
                                        The Role of Insulin
                                    </li>
                                    <li className="border-l-2 border-transparent pl-3 -ml-0.5 cursor-pointer hover:text-foreground transition-colors">
                                        A Holistic Approach
                                    </li>
                                </ul>

                                {/* CTA Widget */}
                                <div className="mt-10 pt-8 border-t border-border/40">
                                    <h5 className="font-serif text-lg mb-2">Need Expert Help?</h5>
                                    <p className="text-xs text-muted-foreground font-light mb-4">Book a consultation with our clinical yoga therapists today.</p>
                                    <Link href="/contact" className="inline-flex w-full items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-lg hover:shadow-lg transition-all">
                                        Book Consultation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-grow max-w-3xl">

                            {/* Medical Disclaimer */}
                            <div className="mb-12 p-6 rounded-2xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/50 flex items-start gap-4">
                                <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                                <p className="text-sm text-orange-800 dark:text-orange-200 font-medium leading-relaxed">
                                    <strong>Medical Disclaimer:</strong> The information provided in this article is for educational purposes only and does not substitute for professional medical advice. Always consult with your physician before beginning any physical therapy regimen, especially for endocrine or structural conditions.
                                </p>
                            </div>

                            {/* Drop Cap & Markdown Content */}
                            <div
                                className="prose prose-lg dark:prose-invert max-w-none prose-p:text-lg prose-p:font-light prose-p:leading-relaxed prose-headings:font-serif [&>p:first-of-type]:first-letter:text-7xl [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:text-primary [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:-mt-2"
                                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                            />

                            {/* Inline High-Intent CTA Banner */}
                            {post.category === "Women's Health" && (
                                <div className="mt-16 bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay"></div>
                                    <h3 className="text-2xl md:text-4xl font-serif mb-4 relative z-10">Stop Fighting Your Hormones</h3>
                                    <p className="text-primary-foreground/80 md:text-lg font-light mb-8 max-w-xl relative z-10">
                                        Join our specialized PCOS Yoga Therapy batches in Pimple Saudagar to naturally regulate your cycle and reverse insulin resistance.
                                    </p>
                                    <Link href="/services/pcos-hormonal-therapy-yoga" className="relative z-10 px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wider text-sm rounded-full hover:shadow-xl transition-all inline-flex items-center gap-2 group">
                                        Explore the Program
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </article>

            {/* Read Next Section */}
            {post.related.length > 0 && (
                <section className="py-20 bg-secondary/10 border-t border-border/40">
                    <div className="container max-w-7xl mx-auto">
                        <h3 className="text-3xl font-serif text-foreground mb-10 flex items-center gap-4">
                            Keep Reading
                            <div className="h-[1px] flex-grow bg-border"></div>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {post.related.map(relatedSlug => {
                                const relatedPost = blogDatabase[relatedSlug as keyof typeof blogDatabase];
                                if (!relatedPost) return null;
                                return (
                                    <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="flex flex-col sm:flex-row gap-6 bg-card rounded-3xl p-4 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all group">
                                        <div className="relative w-full sm:w-48 aspect-video sm:aspect-square rounded-2xl overflow-hidden flex-shrink-0">
                                            <Image src={relatedPost.image} alt={relatedPost.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-center pr-4">
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{relatedPost.category}</span>
                                            <h4 className="text-xl font-serif text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                                            <span className="text-sm text-foreground/50 font-medium flex items-center gap-2">
                                                Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    )
}
