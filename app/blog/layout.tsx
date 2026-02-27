import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Therapeutic Yoga Blog | Natural Health & Medical Wellness in Pune',
    description: 'Read the latest insights on medical yoga, natural hormone balancing, posture correction, and senior wellness from Arogya Raksha, Pune\'s premier yoga clinic.',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
