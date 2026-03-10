import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Senior Citizen Yoga Classes in Pune | Safe Mobility',
    description: 'Gentle, safe, and effective yoga for senior citizens in Pimpri Chinchwad. Relief for knee and back pain with chair support options. Online + Offline sessions.',
}

export default function SeniorYogaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
