import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PCOS Yoga Therapy in Pimpri Chinchwad | Arogya Raksha',
    description: 'Balance hormones naturally with specialized PCOS/PCOD yoga therapy in Pimple Saudagar & Pune. Join our expert-guided Online sessions to reduce bloating & weight.',
}

export default function PCOSTherapyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
