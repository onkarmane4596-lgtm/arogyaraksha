import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Best Yoga Classes in Pimpri Chinchwad | 5-Star Yoga Studio PCMC',
    description: 'Discover the best yoga classes in Pimpri Chinchwad (PCMC). Arogya Raksha provides expert medical yoga and fitness batches for all levels in Pimple Saudagar.',
}

export default function YogaClassesPCMC() {
    return (
        <SEOPageLayout
            title="Best Yoga Classes in Pimpri Chinchwad"
            description="Join PCMC's most trusted yoga sanctuary. We offer a blend of traditional wisdom and modern therapy for residents of Pimpri Chinchwad."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="PCMC's Choice for Yoga"
            contactProgramName="PCMC Inquiry"
            features={[
                { title: "Trusted by PCMC", desc: "Over 5 years of serving the Pimpri Chinchwad community with health-transforming yoga." },
                { title: "Holistic Health", desc: "Beyond just asanas—we focus on pranayama, diet, and lifestyle in PCMC." },
                { title: "Diverse Programs", desc: "From prenatal yoga to senior citizen batches, we cover every need in PCMC." }
            ]}
            faqs={[
                { question: "Which areas of PCMC do you serve?", answer: "While located in Pimple Saudagar, we serve students from Ravet, Thergaon, Rahatani, and Chinchwad." },
                { question: "Do you offer private home sessions in PCMC?", answer: "We primarily offer studio and online group batches, which are highly interactive and effective." }
            ]}
            contentBlocks={
                <>
                    <h2>Leading Yoga Center in Pimpri Chinchwad</h2>
                    <p>Arogya Raksha is recognized as a leader in therapeutic yoga within the Pimpri Chinchwad Municipal Corporation (PCMC) area. Our studio in Pimple Saudagar is a hub for those seeking relief from chronic conditions or looking to achieve peak physical fitness. We take pride in being a top-rated yoga destination in the entire PCMC belt.</p>
                    <h3>Yoga Services in PCMC</h3>
                    <ul>
                        <li>PCOD & Hormonal Therapy.</li>
                        <li>Post-COV Recovery Yoga (Medical Protocol).</li>
                        <li>Knee & Joint Pain Specialist Yoga.</li>
                        <li>Advanced Hatha & Vinyasa Flows.</li>
                    </ul>
                </>
            }
        />
    )
}
