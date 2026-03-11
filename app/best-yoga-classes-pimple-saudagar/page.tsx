import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Best Yoga Classes in Pimple Saudagar | #1 Studio for Therapy & Fitness',
    description: 'Looking for the best yoga classes in Pimple Saudagar? Join Arogya Raksha for expert-led therapeutic yoga, weight loss, and PCOD classes in the heart of Pimple Saudagar.',
}

export default function YogaClassesPimpleSaudagar() {
    return (
        <SEOPageLayout
            title="Best Yoga Classes in Pimple Saudagar"
            description="Experience elite yoga training right here in Pimple Saudagar. Our studio is dedicated to providing the highest quality of Nature Cure and Yoga."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Local Studio: Pimple Saudagar"
            contactProgramName="Pimple Saudagar Inquiry"
            features={[
                { title: "Local Landmark", desc: "Conveniently located in Pimple Saudagar, just a stone's throw from major residential hubs." },
                { title: "Nature Cure & Yoga", desc: "Integrating natural healing principles with traditional yoga for Pimple Saudagar residents." },
                { title: "Community Driven", desc: "Join a vibrant local community of health enthusiasts in Pimple Saudagar." }
            ]}
            faqs={[
                { question: "Where in Pimple Saudagar are you located?", answer: "We are at Kate Vasti, Kunj Colony, Pimple Saudagar. You can find us easily on Google Maps." },
                { question: "Are there separate batches for working professionals?", answer: "Yes, our morning 6 AM batch and evening 7 PM batches are perfect for people working in Hinjewadi or nearby areas." }
            ]}
            contentBlocks={
                <>
                    <h2>Your Neighborhood Yoga Studio in Pimple Saudagar</h2>
                    <p>Arogya Raksha is proud to be the preferred choice for those seeking "best yoga classes in Pimple Saudagar". Our presence in the heart of this neighborhood allows us to provide personalized attention and a sanctuary for health and peace. Whether you are living in Roseland Residency or nearby, our studio is your go-to place for holistic wellness in Pimple Saudagar.</p>
                    <h3>Specialized Batches in Pimple Saudagar</h3>
                    <ul>
                        <li>Regular Morning & Evening Batches.</li>
                        <li>Specialized PCOD/Weight Loss Programs.</li>
                        <li>Senior Citizen Mobility Batches.</li>
                        <li>21-Day Fat Reduction Workshops.</li>
                    </ul>
                </>
            }
        />
    )
}
