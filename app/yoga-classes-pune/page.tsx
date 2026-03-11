import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Best Yoga Classes in Pune | #1 Rated Therapeutic Yoga Center',
    description: 'Arogya Raksha is officially the best choice for yoga classes in Pune. Specialized therapeutic and medical yoga in Pimple Saudagar for weight loss, PCOD, and more.',
}

export default function YogaClassesPune() {
    return (
        <SEOPageLayout
            title="Best Yoga Classes in Pune"
            description="Discover the profound benefits of traditional yoga combined with modern therapeutic science at Pune's premier yoga studio in Pimple Saudagar."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Pune's Trusted Studio"
            contactProgramName="General Pune Classes"
            features={[
                { title: "Certified Masters", desc: "Learn from highly experienced instructors certified in Yoga Therapy." },
                { title: "Complete Wellness", desc: "Programs covering physical fitness, mental peace, and spiritual growth." },
                { title: "Modern Facility", desc: "A serene, clean, and well-equipped studio in the heart of Pune." }
            ]}
            faqs={[
                { question: "Is this suitable for beginners?", answer: "Absolutely! We have dedicated batches for beginners where we focus on foundational asanas and correct alignment." },
                { question: "What are the timings?", answer: "We offer multiple batches from 6:00 AM to 8:00 PM to suit your work schedule." }
            ]}
            contentBlocks={
                <>
                    <h2>Transform Your Health in Pune</h2>
                    <p>Arogya Raksha is more than just a yoga center; it's a sanctuary for health. Located in Pimple Saudagar, we serve the wider Pune and Pimpri Chinchwad area with high-quality yoga instruction. Whether you're looking for stress relief, fitness, or therapeutic healing, our Pune classes are designed for you.</p>
                    <h3>Our Key Offerings in Pune</h3>
                    <ul>
                        <li>Daily Regular Yoga Batches.</li>
                        <li>Medical Yoga Therapy for chronic ailments.</li>
                        <li>Senior Citizen Special Batches.</li>
                        <li>Prenatal & Postnatal Yoga.</li>
                    </ul>
                </>
            }
        />
    )
}
