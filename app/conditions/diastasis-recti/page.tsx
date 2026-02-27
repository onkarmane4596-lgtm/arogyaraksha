import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Diastasis Recti Recovery Exercises | Postpartum Wellness Pune',
    description: 'Safely heal your core after pregnancy. Our medical yoga therapy utilizes targeted diastasis recti recovery exercises in Pimple Saudagar to close the abdominal gap.',
}

const faqs = [
    {
        question: "What is Diastasis Recti and why is it dangerous?",
        answer: "It is the separation of the left and right sides of the outermost abdominal muscle. If left untreated, or if treated with traditional 'crunches' at a gym, it can lead to severe lower back pain, chronic pelvic floor dysfunction, and even ventral hernias."
    },
    {
        question: "Will regular postnatal recovery yoga fix this?",
        answer: "Not necessarily. Many traditional yoga poses (like deep backbends or intense planks) actually worsen the separation. You specifically require diastasis recti recovery exercises that focus exclusively on the transverse abdominis without forward bulging."
    },
    {
        question: "How long does the recovery process take?",
        answer: "With adherence to our medical wellness program, most women observe significant closing of the gap and functional strength returning within 8 to 12 weeks of specialized pelvic floor strengthening yoga."
    }
]

export default function DiastasisRectiPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalCondition",
                        "name": "Diastasis Recti",
                        "associatedAnatomy": {
                            "@type": "AnatomicalStructure",
                            "name": "Rectus Abdominis Muscle"
                        },
                        "possibleTreatment": {
                            "@type": "MedicalTherapy",
                            "name": "Postnatal Recovery Yoga"
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
                title="Diastasis Recti Recovery"
                description="Specialized medical protocols to safely reconstruct the abdominal wall post-pregnancy."
                heroImage="/images/home-hero-elegant.jpg"
                eyebrow="Postpartum Wellness"
                contactProgramName="Postnatal Yoga"
                features={[
                    { title: "Transverse Focus", desc: "Activating the deepest core muscles to draw the abdomen back together." },
                    { title: "Hernia Prevention", desc: "Medical vigilance to ensure zero intra-abdominal pressure during practice." },
                    { title: "Pelvic Synergy", desc: "Rebuilding the connection between the pelvic floor and the breathing diaphragm." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>The Hidden Postpartum Epidemic</h2>
                        <p>
                            Many mothers in Pune experience a lingering "mummy tummy" or persistent lower back pain long after giving birth. This is frequently misdiagnosed simply as excess weight, but is actually a fundamental structural separation: Diastasis Recti.
                        </p>
                        <h3>Our Precision Corrective Exercise Therapy</h3>
                        <p>
                            At our studio in Pimple Saudagar, our <strong>postnatal recovery yoga</strong> goes beyond simple stretches. We view postpartum recovery as rigorous <em>rehabilitation yoga therapy</em>. Returning to generic fitness classes immediately after birth often does permanent damage to a weakened core.
                        </p>
                        <ul>
                            <li><strong>Diastasis Recti Recovery Exercises:</strong> Precise, small-range movements designed to knit the connective linea alba tissue. We completely prohibit crunching, heavy lifting, or deep twisting until the gap is healed.</li>
                            <li><strong>Pelvic Floor Strengthening Yoga:</strong> The foundation of all core recovery. We teach you how to properly engage the pelvic floor in tandem with your exhales.</li>
                            <li><strong>Functional Posture:</strong> Training you how to safely lift your baby and move throughout your day without putting outward pressure on the separated muscles.</li>
                        </ul>
                        <p>
                            Trust Arogya Raksha's certified experts with your postpartum journey. Our <em>medical wellness program</em> provides a safe haven for mothers looking for effective <strong>diastasis recti recovery exercises</strong>.
                        </p>
                    </>
                }
            />
        </>
    )
}
