import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Best Yoga Classes in Wakad | Top Rated Yoga Studio Near Wakad',
    description: 'Looking for the best yoga classes in Wakad? Arogya Raksha offers expert therapeutic, medical, and power yoga sessions just minutes away in Pimple Saudagar.',
}

export default function YogaClassesWakad() {
    return (
        <SEOPageLayout
            title="Best Yoga Classes in Wakad"
            description="Experience premium yoga instruction near Wakad. Our therapeutic approach is perfect for those in Wakad looking for sustainable health and wellness."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Serving Wakad, Pune"
            contactProgramName="Wakad Inquiry"
            features={[
                { title: "Proximity to Wakad", desc: "Located just a short drive from Wakad, making it convenient for your daily practice." },
                { title: "Specialized Therapy", desc: "Expertise in medical yoga for back pain, cervical, and metabolic disorders." },
                { title: "Flexible Batches", desc: "Early morning and late evening slots to accommodate Wakad's IT professionals." }
            ]}
            faqs={[
                { question: "How far is the studio from Wakad center?", answer: "We are located in Pimple Saudagar, which is typically a 5-10 minute drive from most parts of Wakad." },
                { question: "Are there online options for Wakad residents?", answer: "Yes, we offer both interactive online live batches and offline studio sessions." }
            ]}
            contentBlocks={
                <>
                    <h2>Premier Yoga Destination for Wakad Residents</h2>
                    <p>If you're searching for "yoga classes near me" in Wakad, Arogya Raksha is your top-rated local choice. We understand the high-stress lifestyle of Wakad's residents and offer specialized sequences to combat burnout, improve posture, and enhance overall vitality. Join the hundreds of students from Wakad who have transformed their lives with us.</p>
                    <h3>What We Offer Near Wakad</h3>
                    <ul>
                        <li>Intensive Weight Loss Yoga.</li>
                        <li>Stress Management & Meditation.</li>
                        <li>Yoga for IT Professionals (Focus on Neck & Back).</li>
                        <li>Corporate Yoga Workshops.</li>
                    </ul>
                </>
            }
        />
    )
}
