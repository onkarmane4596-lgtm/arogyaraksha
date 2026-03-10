import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '21-Day Tone & Tighten Workshop | Inch Loss Program Pune',
    description: 'Join our powerful 21-day workshop for tummy, arm, and thigh fat reduction. Specialized Diastasis Recti recovery for new moms. Starts every 10th in Pimple Saudagar.',
}

export default function WeightLossLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
