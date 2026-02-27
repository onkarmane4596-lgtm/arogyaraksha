import { SEOPageLayout } from '@/components/seo-page-layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Prenatal Yoga Near Me | Pregnancy Yoga Classes Pune',
    description: 'Ensure a safe, healthy delivery with expert prenatal yoga classes in Pimple Saudagar. Strengthen your pelvic floor and prepare for postnatal recovery naturally.',
}

const faqs = [
    {
        question: "When is it safe to start prenatal yoga?",
        answer: "Generally, it is safe to begin our restorative prenatal routines during the second trimester (after 14 weeks) once your doctor has given clearance. Our certified experts modify every asana based on your specific trimester."
    },
    {
        question: "Do you offer postnatal recovery yoga?",
        answer: "Yes. Our postnatal program focuses heavily on safely closing the abdominal gap (diastasis recti recovery exercises) and deeply strengthening the pelvic floor after delivery."
    },
    {
        question: "Can I join if I have never done yoga before?",
        answer: "Absolutely. Our pregnancy yoga classes in Pune are specifically designed for complete beginners. We use extensive props, bolsters, and chairs to ensure 100% safety and stability throughout your practice."
    }
]

export default function PrenatalPostnatalPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Prenatal & Postnatal Yoga Therapy",
                        "provider": {
                            "@type": "MedicalClinic",
                            "name": "Arogya Raksha Yoga"
                        },
                        "serviceType": "Pregnancy Yoga"
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
                title="Prenatal & Postnatal Recovery"
                description="Expert maternal wellness programs designed for a safe pregnancy and rapid postpartum healing."
                heroImage="/images/home-hero-elegant.jpg"
                eyebrow="Maternal Wellness"
                contactProgramName="Prenatal Yoga"
                features={[
                    { title: "Safe Delivery Prep", desc: "Hip opening and pelvic stretching tailored strictly for maternal safety." },
                    { title: "Postnatal Healing", desc: "Gentle recovery regimens specifically targeting core restoration." },
                    { title: "Stress Reduction", desc: "Calming pranayama to lower anxiety and promote better fetal health." }
                ]}
                faqs={faqs}
                contentBlocks={
                    <>
                        <h2>Nurturing the Journey of Motherhood</h2>
                        <p>
                            Pregnancy causes profound structural and hormonal changes in the body. If you are searching for <strong>prenatal yoga near me</strong> in the Pimpri Chinchwad or Wakad area, it is vital to choose a center like Arogya Raksha that prioritizes <em>medical wellness</em> over generic flexibility routines.
                        </p>
                        <h3>Our Clinical Maternal Approach</h3>
                        <p>
                            Our highly personalized <strong>pregnancy yoga classes in Pune</strong> are divided meticulously by trimester. We focus on building the stamina required for labor while completely avoiding any compression of the abdominal region.
                        </p>
                        <ul>
                            <li><strong>Pelvic Floor Strengthening Yoga:</strong> Crucial routines that prevent incontinence and aid in a smoother delivery process.</li>
                            <li><strong>Lower Back Relief:</strong> Gentle spinal decompression techniques to safely alleviate the severe back pressure common in the third trimester.</li>
                        </ul>
                        <p>
                            Following your delivery, our specialized <em>postnatal recovery yoga</em> focuses on rehabilitating your core. Instead of rushing back to the gym, we utilize precise <em>diastasis recti recovery exercises</em> to safely knit the abdominal wall back together without causing organ prolapse.
                        </p>
                    </>
                }
            />
        </>
    )
}
