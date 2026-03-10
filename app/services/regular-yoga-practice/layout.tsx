import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Regular Yoga Practice Batch | Daily Wellness Classes Pune',
    description: 'Join our comprehensive regular yoga practice batches in Pimple Saudagar. Online + Offline sessions featuring Asanas, Pranayama, Meditation, and dynamic fitness activities.',
}

export default function RegularYogaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
