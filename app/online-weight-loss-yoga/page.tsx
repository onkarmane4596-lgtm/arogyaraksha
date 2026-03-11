import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Best Online Weight Loss Yoga Classes India | Live Result-Driven Sessions',
    description: 'Looking for effective online weight loss yoga? Join our live therapeutic sessions in India for healthy, sustainable, and scientific weight reduction.',
}

export default function OnlineWeightLossYoga() {
    return (
        <SEOPageLayout
            title="Best Online Weight Loss Yoga across India"
            description="Transform your body with our live virtual therapeutic weight loss yoga. Expert-led sessions focused on fat loss, muscle toning, and metabolic health."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Nationwide Weight Loss"
            contactProgramName="Online Weight Loss India"
            features={[
                { title: "Dynamic Flow", desc: "High-intensity therapeutic sequences to maximize calorie burn and toning." },
                { title: "Scientific Methodology", desc: "Focus on metabolic health and thyroid balancing for effective fat loss." },
                { title: "India's Best Instructors", desc: "Expert guidance from the comfort of your home, anywhere in the country." }
            ]}
            faqs={[
                { question: "Is this high-intensity?", answer: "We balance high-intensity sequences with therapeutic recovery to ensure you burn fat without exhausting your nervous system." },
                { question: "Can I join from a different time zone?", answer: "While we focus on Indian Standard Time (IST), we have morning and evening slots that accommodate various schedules." }
            ]}
            contentBlocks={
                <>
                    <h2>Sustainable Online Weight Loss Yoga</h2>
                    <p>Lose weight the right way with our online therapeutic sessions. We avoid crash diets and extreme exercises, focusing instead on the science of Yoga Therapy to reset your metabolic markers. Our instructors across India have helped thousands achieve their fitness goals through mindful movement and breath control.</p>
                    <h3>Digital Program Highlights</h3>
                    <ul>
                        <li>Live, interactive sessions (not recorded).</li>
                        <li>Metabolism-boosting Kriyas and Pranayamas.</li>
                        <li>Core-strengthening and flexibility-enhancing flows.</li>
                        <li>Progress tracking and lifestyle guidance.</li>
                    </ul>
                </>
            }
        />
    )
}
