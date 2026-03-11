import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'PCOD & PCOS Yoga Classes in Pune | Best Yoga for Hormonal Balance',
    description: 'Expert PCOD and PCOS yoga classes in Pune (Pimple Saudagar). Join our specialized therapeutic program for hormonal balance, weight management, and natural healing.',
}

export default function PCODYogaPune() {
    return (
        <SEOPageLayout
            title="PCOD & PCOS Yoga Classes in Pune"
            description="Reclaim your hormonal health with our specialized therapeutic yoga program in Pimple Saudagar, designed specifically for women battling PCOS and PCOD."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Local Expertise in Pune"
            contactProgramName="PCOD/PCOS Pune"
            features={[
                { title: "Hormonal Balance", desc: "Targeted asanas to stimulate endocrine glands and regulate cycles." },
                { title: "Weight Management", desc: "Scientific approach to metabolic health and stubborn fat reduction." },
                { title: "Expert Guidance", desc: "Certified therapeutic instructors with deep PCOS/PCOD experience." }
            ]}
            faqs={[
                { question: "Can yoga really help with PCOS?", answer: "Yes, therapeutic yoga helps regulate the endocrine system, improves insulin sensitivity, and reduces stress, which are crucial for managing PCOS symptoms." },
                { question: "Where are the classes located in Pune?", answer: "Our main studio is in Pimple Saudagar, easily accessible from Wakad, Baner, and Aundh." }
            ]}
            contentBlocks={
                <>
                    <h2>Why Choose Our PCOD Yoga in Pune?</h2>
                    <p>Our Pune studio specializes in medical and therapeutic yoga. For women dealing with PCOD or PCOS, we provide more than just exercise; we offer a holistic path to recovery. Our sessions focus on reducing insulin resistance and balancing cortisol levels through traditional Hatha yoga and modern therapeutic techniques.</p>
                    <h3>Benefits of Our Program</h3>
                    <ul>
                        <li>Regularization of menstrual cycles naturally.</li>
                        <li>Effective management of unwanted weight gain and acne.</li>
                        <li>Stress reduction to balance androgen levels.</li>
                        <li>Dietary and lifestyle consultation included.</li>
                    </ul>
                </>
            }
        />
    )
}
