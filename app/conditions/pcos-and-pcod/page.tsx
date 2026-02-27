import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PCOS Yoga Therapy & Natural Hormone Balancing in Pune',
    description: 'Struggling with PCOS? Discover how specialized yoga for hormonal imbalance and irregular periods can help women in Pimple Saudagar and Pune restore their health naturally.',
}

const faqs = [
    {
        question: "Can yoga for irregular periods really work?",
        answer: "Yes. Clinical studies show that specific asanas increase blood flow to the pelvic region and stimulate the ovaries, helping to naturally regulate the menstrual cycle over time."
    },
    {
        question: "What is the difference between regular yoga and PCOS yoga therapy?",
        answer: "Regular yoga focuses on general fitness and flexibility. PCOS yoga therapy is a specialized medical wellness program that specifically targets endocrine function, insulin resistance, and pelvic floor strengthening for hormonal balance."
    },
    {
        question: "Do you offer prenatal yoga near me or pregnancy yoga classes in Pune?",
        answer: "Absolutely. Many of our PCOS therapy clients transition successfully into our specialized prenatal yoga classes right here in Pimple Saudagar to support a healthy pregnancy."
    }
]

export default function PCOSAndPCODPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalCondition",
                        "name": "Polycystic Ovary Syndrome (PCOS)",
                        "associatedAnatomy": {
                            "@type": "AnatomicalStructure",
                            "name": "Ovary"
                        },
                        "possibleTreatment": {
                            "@type": "MedicalTherapy",
                            "name": "PCOS Yoga Therapy"
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
                title="PCOS & PCOD Recovery"
                description="Expert yoga for hormonal imbalance and natural period regulation in Pimpri Chinchwad."
                heroImage="/images/programs/pcos-therapy-new.png"
                eyebrow="Women's Health Condition"
                contactProgramName="PCOS Yoga Therapy"
                features={[
                    { title: "Hormone Balancing", desc: "Natural therapy to reduce androgens and restore endocrine harmony." },
                    { title: "Period Regulation", desc: "Specific yoga for irregular periods focusing on pelvic circulation." },
                    { title: "Weight Management", desc: "Lower insulin resistance gently without extreme cardio stress." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>Understanding the Root of Hormonal Imbalance</h2>
                        <p>
                            Polycystic Ovary Syndrome (PCOS) is a complex endocrine disorder affecting millions of women. Symptoms like irregular periods, stubborn belly fat, and mood swings are signs of a systemic imbalance, not just a localized issue. At Arogya Raksha, our <strong>PCOS yoga therapy</strong> provides a scientifically backed path to natural healing.
                        </p>
                        <h3>The Role of Yoga for Hormonal Imbalance</h3>
                        <p>
                            When looking for the <strong>best yoga classes in Pune</strong> to treat PCOS, it's crucial to understand that intense cardiovascular workouts can sometimes backfire by increasing cortisol (stress hormone) levels. Our natural hormone balancing therapy utilizes restorative postures that actively down-regulate the nervous system.
                        </p>
                        <ul>
                            <li><strong>Pelvic Floor Strengthening:</strong> Essential for supporting reproductive organs and improving core stability, often needed alongside <em>diastasis recti recovery exercises</em>.</li>
                            <li><strong>Insulin Sensitivity:</strong> Dynamic, focused movements that help muscle cells utilize glucose more effectively, assisting in sustainable weight loss.</li>
                            <li><strong>Stress Management:</strong> Deep pranayama breathing exercises that lower cortisol, directly impacting ovarian health.</li>
                        </ul>
                        <p>
                            Whether you are searching for dedicated <em>postnatal recovery yoga</em>, or preparing for the future with our <em>prenatal yoga classes in Pune</em>, resolving underlying PCOS symptoms is the crucial first step. Join our specialized batches in <strong>Pimple Saudagar</strong> today.
                        </p>
                    </>
                }
            />
        </>
    )
}
