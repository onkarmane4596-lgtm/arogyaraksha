import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Yoga for Back Pain Near Me | Sciatica & Posture Correction Pune',
    description: 'Suffering from slip disc, sciatica, or neck pain? Our medical yoga therapy and posture correction exercises in Pimpri Chinchwad provide lasting relief for corporate professionals.',
}

const faqs = [
    {
        question: "Is yoga safe if I have a slip disc?",
        answer: "Yes, but it must be highly specialized. General yoga classes can exacerbate a slip disc. Our slip disc yoga therapy is conducted by medical wellness experts who use precise, decompressive postures to relieve nerve pressure."
    },
    {
        question: "Can yoga help with sciatica nerve pain?",
        answer: "Absolutely. Sciatica yoga treatment focuses on safely stretching the piriformis muscle and releasing tension in the lower lumbar spine, effectively relieving the shooting pain down the leg."
    },
    {
        question: "I have a long sitting job in Hinjewadi. Can this help my neck pain?",
        answer: "Yes! We specialize in neck pain yoga therapy and posture correction exercises explicitly designed for IT professionals and corporate workers who suffer from 'tech neck' and rounded shoulders."
    }
]

export default function ChronicBackPainPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalCondition",
                        "name": "Chronic Back Pain & Sciatica",
                        "associatedAnatomy": {
                            "@type": "AnatomicalStructure",
                            "name": "Spine"
                        },
                        "possibleTreatment": {
                            "@type": "MedicalTherapy",
                            "name": "Corrective Exercise Therapy"
                        }
                    })
                }}
            />
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
                title="Chronic Back Pain & Posture Correction"
                description="Medical wellness program targeting slip disc, sciatica, and cervical spondylosis."
                heroImage="/images/home-hero-elegant.jpg"
                eyebrow="Pain Management Therapy"
                contactProgramName="Back Pain Therapy"
                features={[
                    { title: "Spinal Decompression", desc: "Safe, targeted asanas to relieve pressure on compressed discs." },
                    { title: "Posture Correction", desc: "Exercises designed specifically to reverse the effects of long sitting jobs." },
                    { title: "Sciatica Treatment", desc: "Gentle piriformis release to eliminate shooting nerve pain." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>The Heavy Cost of a Sedentary Lifestyle</h2>
                        <p>
                            For professionals working in Wakad, Baner, and the Hinjewadi IT park, long hours at a desk inevitably lead to structural degradation. Searching for <strong>yoga for back pain near me</strong> is the first step toward correcting the root cause of spinal discomfort rather than relying on temporary painkillers.
                        </p>
                        <h3>Our Corrective Exercise Therapy</h3>
                        <p>
                            Our <strong>medical yoga therapy</strong> studio in Pimple Saudagar goes beyond basic stretching. We implement <em>functional movement training</em> designed to rebuild the muscular support system around your spine.
                        </p>
                        <ul>
                            <li><strong>Neck Pain Yoga Therapy:</strong> Targeted cervical elongation to reverse 'tech neck' resulting from prolonged screen time.</li>
                            <li><strong>Sciatica Yoga Treatment:</strong> Decompressive movements that create space between the lumbar vertebrae, freeing the sciatic nerve.</li>
                            <li><strong>Slip Disc Yoga Therapy:</strong> Highly supervised, restorative practices that encourage disc hydration and healing without flexion-based risks.</li>
                        </ul>
                        <p>
                            If you are looking for <em>posture correction exercises</em> or <em>yoga for a long sitting job</em>, our specialized rehabilitation yoga therapy offers a safe, clinically-minded environment to restore your mobility and live pain-free.
                        </p>
                    </>
                }
            />
        </>
    )
}
