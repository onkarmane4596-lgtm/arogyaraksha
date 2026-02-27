import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PCOS Yoga Therapy in Pimpri Chinchwad | Arogya Raksha',
    description: 'Balance hormones naturally with specialized PCOS/PCOD yoga therapy in Pimple Saudagar & Pune. Join our expert-guided sessions to reduce bloating & weight.',
}

const faqs = [
    {
        question: "How long does it take to see period regularity with yoga?",
        answer: "Consistency is key. Our clinical data shows that with 3-4 sessions per week in our targeted PCOS therapy batch, patients naturally regulate their menstrual cycles within 12 to 16 weeks."
    },
    {
        question: "Is this a generic weight loss class?",
        answer: "No. This is a specialized endocrinology-focused practice. We utilize specific asanas that stimulate the pelvic floor and ovaries, targeting the root hormonal cause of weight gain, rather than just burning calories."
    },
    {
        question: "Can I manage my insulin resistance with this program?",
        answer: "Yes, our specific sequence of therapeutic asanas and pranayama acts strongly on the metabolic system to reduce insulin resistance — a core driver of PCOS symptoms."
    }
]

export default function PCOSTherapyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
            <SEOPageLayout
                title="PCOS / PCOD Therapy"
                description="A highly specialized endocrinology-focused practice to restore natural hormonal balance."
                heroImage="/images/programs/pcos-therapy-new.png"
                eyebrow="Clinical & Therapeutic"
                contactProgramName="PCOS Yoga"
                features={[
                    { title: "Hormonal Regulation", desc: "Targeted pelvic breathwork to stimulate ovarian function naturally." },
                    { title: "Metabolic Reset", desc: "Advanced asanas designed to actively lower insulin resistance." },
                    { title: "Stress Reduction", desc: "Scientific pranayama techniques to lower excess cortisol levels." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>Why Generic Fitness Fails PCOS</h2>
                        <p>
                            Many women struggle with stubborn weight gain and menstrual irregularity despite rigorous dieting and intense gym workouts. This is because PCOS is an <strong>endocrine disorder</strong>, not simply a calorie equation.
                        </p>
                        <p>
                            High-intensity workouts can often spike cortisol levels, further worsening hormonal imbalances. At Arogya Raksha Yoga in Pimple Saudagar, our specialized PCOS therapy takes a targeted therapeutic approach.
                        </p>
                        <h3>Our Clinical Approach</h3>
                        <p>
                            We utilize deep, restorative pelvic floor strengthening combined with specific ovarian-stimulating postures. This method lowers the stress response, improves blood circulation to the reproductive organs, and effectively aids lymphatic drainage.
                        </p>
                        <ul>
                            <li><strong>Asana:</strong> Focuses on compressing and releasing the abdominal region to boost organ function.</li>
                            <li><strong>Pranayama:</strong> Balances the autonomic nervous system to reduce anxiety and stress-induced cortisol.</li>
                            <li><strong>Holistic Routine:</strong> Integrates seamlessly into the lifestyle of working professionals in Pune.</li>
                        </ul>
                    </>
                }
            />
        </>
    )
}
