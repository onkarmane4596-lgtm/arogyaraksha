import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Senior Citizen Yoga Classes in Pune | Safe Mobility',
    description: 'Gentle, safe, and effective yoga for senior citizens in Pimpri Chinchwad. Relieve knee pain, improve mobility, and gain strength with chair support options.',
}

const faqs = [
    {
        question: "What if I have severe knee arthritis and cannot sit on the floor?",
        answer: "Our senior batches utilize prop-supported, restorative methods. We provide specialized chair yoga options ensuring zero pressure on the knee joints while still improving mobility and flexibility."
    },
    {
        question: "Is it safe if I have high blood pressure or heart conditions?",
        answer: "Yes, our therapeutic approach carefully monitors physiological limits. We utilize cooling pranayama and gentle movements that safely regulate blood pressure without over-exertion. However, we always recommend consulting your primary physician before starting."
    },
    {
        question: "How does this help prevent falls?",
        answer: "By specifically targeting the stabilizing muscles of the core, hips, and ankles, our practice reestablishes deep proprioception and balance, eradicating the physical instability that leads to dangerous falls."
    }
]

export default function SeniorYogaPage() {
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
                title="Restorative Senior Yoga"
                description="Prevent bone density loss, safely lubricate joints, and improve daily mobility without fear."
                heroImage="/images/programs/senior-yoga-new.png"
                eyebrow="Safe & Supported"
                contactProgramName="Senior Citizen Yoga"
                features={[
                    { title: "Joint Lubrication", desc: "Gentle synovial fluid stimulation to ease arthritis and stiffness." },
                    { title: "Fall Prevention", desc: "Core and ankle stabilization regimens to completely eradicate instability." },
                    { title: "Prop-Supported", desc: "Extensive use of chairs, walls, and bolsters ensuring 100% safety." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>Regaining Independence in Your Golden Years</h2>
                        <p>
                            Aging successfully means maintaining the ability to move through life with joy, dignity, and zero pain. Our senior citizen yoga classes in Pimpri Chinchwad are meticulously designed for the aging body, taking into account chronic conditions such as osteoarthritis and osteoporosis.
                        </p>
                        <h3>Why Specialized Senior Care Matters</h3>
                        <p>
                            Generic yoga classes can move too quickly and pose significant injury risks to older adults. At our Pimple Saudagar studio, our certified medical yoga experts keep the pace slow, deliberate, and entirely prop-supported.
                        </p>
                        <ul>
                            <li><strong>Chair Yoga Replacements:</strong> Advanced variations that provide all the spinal and muscular benefits of traditional poses, completely from the safety of a chair.</li>
                            <li><strong>Spinal Decompression:</strong> Gentle extensions that relieve pinched nerves and chronic lower back pain accumulated over decades.</li>
                            <li><strong>Cognitive Health:</strong> Specific breathing techniques that increase oxygen supply to the brain, improving memory and mental clarity.</li>
                        </ul>
                    </>
                }
            />
        </>
    )
}
