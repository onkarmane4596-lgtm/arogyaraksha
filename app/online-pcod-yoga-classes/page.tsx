import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Online PCOD & PCOS Yoga Classes India | Live Therapeutic Sessions',
    description: 'Join the best online PCOD and PCOS yoga classes in India. Specialized live therapeutic sessions for hormonal balance and natural PCOS management from the comfort of your home.',
}

export default function OnlinePCODYoga() {
    return (
        <SEOPageLayout
            title="Online PCOD & PCOS Yoga Classes across India"
            description="Our world-class therapeutic yoga sessions are now accessible nationwide. Join our live virtual classes designed for women seeking natural healing for PCOS and PCOD."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Nationwide Online Sessions"
            contactProgramName="Online PCOD India"
            features={[
                { title: "Live Virtual Experience", desc: "Interactive live sessions with real-time feedback on alignment and breath." },
                { title: "Hormone Focused", desc: "Digital-first curriculum targeting endocrine health and cycle regularisation." },
                { title: "Anywhere Access", desc: "High-quality yoga instruction available from any city in India." }
            ]}
            faqs={[
                { question: "Are online sessions as effective as offline?", answer: "Yes! Our live sessions are highly interactive, and we limit batch sizes to ensure every participant gets personal attention and corrections." },
                { question: "What do I need for the online class?", answer: "Just a yoga mat, a stable internet connection, and a quiet space. We use common video platforms for seamless streaming." }
            ]}
            contentBlocks={
                <>
                    <h2>Premier Online Yoga Therapy for PCOS</h2>
                    <p>Arogya Raksha brings its trusted Pune expertise to every corner of India. Our online PCOS yoga classes are structured to provide the same level of care and results as our in-person sessions. We focus on balancing your hormones through specifically chosen asanas that improve the functioning of your ovaries and thyroid gland.</p>
                    <h3>Why Join from Anywhere in India?</h3>
                    <ul>
                        <li>Experience the expertise of Pune’s top yoga therapists.</li>
                        <li>Safe, secure, and convenient home-based healing.</li>
                        <li>Flexible timings to fit your busy schedule.</li>
                        <li>Supportive digital community of women on similar journeys.</li>
                    </ul>
                </>
            }
        />
    )
}
