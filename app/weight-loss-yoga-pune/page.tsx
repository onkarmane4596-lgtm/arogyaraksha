import { SEOPageLayout } from '@/components/seo-page-layout'

export const metadata = {
    title: 'Therapeutic Weight Loss Yoga in Pune | Pimple Saudagar',
    description: 'Achieve sustainable weight loss with our therapeutic yoga classes in Pune. Specialized programs for belly fat reduction and metabolic health in Pimple Saudagar.',
}

export default function WeightLossYogaPune() {
    return (
        <SEOPageLayout
            title="Therapeutic Weight Loss Yoga in Pune"
            description="Experience a scientific and sustainable approach to weight loss. Our Pimple Saudagar studio offers personalized yoga therapy for lasting results."
            heroImage="/images/programs/programs-hero.jpg"
            eyebrow="Results-Driven Yoga"
            contactProgramName="Weight Loss Pune"
            features={[
                { title: "Metabolic Boost", desc: "Specific sequences designed to fire up your metabolism and digestion." },
                { title: "Fat Loss Triggers", desc: "Techniques focusing on core strength and stubborn belly fat reduction." },
                { title: "Sustainable Habits", desc: "Integrating yogic lifestyle changes for long-term weight maintenance." }
            ]}
            faqs={[
                { question: "How fast can I see results?", answer: "Most clients feel lighter and more energetic within 2 weeks. Visible body changes typically appear after 4-6 weeks of consistent practice." },
                { question: "Do you offer diet plans?", answer: "Yes, our therapeutic weight loss programs include basic yogic diet guidance tailored to your body type." }
            ]}
            contentBlocks={
                <>
                    <h2>Scientific Weight Loss Yoga in Pune</h2>
                    <p>Unlike generic gym workouts, our therapeutic yoga for weight loss in Pune focuses on the root causes of weight gain, such as hormonal imbalances, poor metabolism, and stress-eating. We combine intense Vinyasa flows with restorative Kriyas to ensure your weight loss journey is healthy and sustainable.</p>
                    <h3>What Makes Us Different?</h3>
                    <ul>
                        <li>Focus on sustainable fat loss, not just water weight.</li>
                        <li>Improvement in overall stamina and flexibility.</li>
                        <li>Detoxification techniques (Shuddhikriyas) for internal cleansing.</li>
                        <li>Personalized attention in small batch sizes.</li>
                    </ul>
                </>
            }
        />
    )
}
