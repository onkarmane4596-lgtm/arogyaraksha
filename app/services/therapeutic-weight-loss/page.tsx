import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Therapeutic Weight Loss Program | Hormonal Yoga Near Me',
    description: 'Struggling to lose weight? Discover our 21-day inch loss program in Pimple Saudagar. We use thyroid weight loss yoga for sustainable, natural fat burning.',
}

const faqs = [
    {
        question: "How is a therapeutic weight loss program different from a gym?",
        answer: "Gyms often rely on severe calorie deficits and high-intensity cardio, which can spike cortisol and cause stress-induced weight retention. Our program focuses on internal metabolic correction—stimulating the thyroid and lowering insulin resistance naturally."
    },
    {
        question: "Does thyroid weight loss yoga actually work?",
        answer: "Yes. Specific inverted and neck-compressing asanas directly stimulate the thyroid gland, naturally boosting your basal metabolic rate (BMR) for highly sustainable fat loss without exhausting cardio."
    },
    {
        question: "What is the 21-day inch loss program?",
        answer: "This is our highly acclaimed, intensive workshop designed for rapid, visible results. We combine targeted abdominal workouts, dynamic flows, and strict dietary guidelines to achieve visible inch loss safely."
    }
]

export default function TherapeuticWeightLossPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Therapeutic Weight Loss Program",
                        "provider": {
                            "@type": "MedicalClinic",
                            "name": "Arogya Raksha Yoga"
                        },
                        "serviceType": "Weight Loss Yoga"
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
                title="Therapeutic Weight Loss"
                description="Sustainable fat loss driven by complete metabolic correction and hormonal balance."
                heroImage="/images/programs/weight-loss-new.png"
                eyebrow="Metabolic Reset"
                contactProgramName="Therapeutic Weight Loss"
                features={[
                    { title: "Metabolic Boosting", desc: "Scientific asanas designed to directly stimulate the thyroid gland." },
                    { title: "Fat Burn", desc: "Dynamic, heat-building practices like power yoga and aerobic fusion." },
                    { title: "Inch Loss Focus", desc: "Targeted core and limb toning for rapid, visible physical restructuring." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>Why Diets Fail and Cortisol Spikes</h2>
                        <p>
                            If you have been frantically searching for a <strong>belly fat loss yoga near me</strong> and struggling with yo-yo dieting, the missing link is almost certainly hormonal. Extreme calorie deficits slow down your thyroid and trigger a starvation response.
                        </p>
                        <h3>The Hormonal Weight Loss Regimen</h3>
                        <p>
                            Our signature <strong>therapeutic weight loss program</strong> in Pimple Saudagar utilizes a completely different paradigm. We focus on <em>hormonal weight loss yoga</em>—a system designed to regulate cortisol so your body naturally releases stored fat rather than hoarding it out of stress.
                        </p>
                        <ul>
                            <li><strong>Thyroid Stimulation:</strong> We practice <em>thyroid weight loss yoga</em>, utilizing specific neck compressions (like Halasana and Sarvangasana) to naturally increase metabolic output.</li>
                            <li><strong>Lymphatic Drainage:</strong> Deep twisting asanas act like an internal massage, flushing out toxic water retention that frequently masquerades as stubborn fat.</li>
                            <li><strong>Dynamic Fusion:</strong> While we respect restorative alignment, this program includes high-energy functional movement training to safely build lean, calorie-burning muscle.</li>
                        </ul>
                        <p>
                            Join our famous <em>inch loss program 21 days</em> challenge to kickstart your metabolism, or enroll in our regular batches for a highly <strong>sustainable fat loss workout</strong> routine in Pune.
                        </p>
                    </>
                }
            />
        </>
    )
}
