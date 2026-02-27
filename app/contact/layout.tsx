import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Arogya Raksha | Yoga Studio in Pimple Saudagar',
    description: 'Get in touch with Pimpri Chinchwad\'s premier therapeutic yoga studio. Book a consultation or trial class for PCOS, senior yoga, and weight loss in Pune.',
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
