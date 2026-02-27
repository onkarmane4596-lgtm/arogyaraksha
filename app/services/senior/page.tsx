import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { CheckCircle, Users } from 'lucide-react'

export const metadata = {
  title: 'Senior Citizen Yoga Program | Arogya Raksha',
  description: 'Gentle, therapeutic yoga classes for older adults to improve flexibility, balance, bone health, and overall wellness.',
}

export default function SeniorPage() {
  const benefits = [
    'Improved balance and fall prevention',
    'Enhanced flexibility and mobility',
    'Stronger bones and better posture',
    'Increased muscle strength',
    'Better joint health',
    'Improved circulation',
    'Better sleep quality',
    'Social connection and community',
  ]

  const whyYoga = [
    {
      title: 'Low Impact',
      description: 'Gentle movements that respect joint health without strain or injury risk.',
    },
    {
      title: 'Age-Appropriate',
      description: 'Poses and sequences specifically modified for older bodies and fitness levels.',
    },
    {
      title: 'Holistic Wellness',
      description: 'Addresses physical, mental, and emotional well-being simultaneously.',
    },
    {
      title: 'Proven Benefits',
      description: 'Research shows yoga improves balance, flexibility, strength, and mental health in seniors.',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container py-3 text-sm">
          <Link href="/" className="text-primary hover:text-primary/80">Home</Link>
          <span className="text-foreground/50 mx-2">/</span>
          <span className="text-foreground/70">Senior Citizen Yoga</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 to-background">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Users className="text-blue-500" size={32} />
            <span className="text-primary font-semibold">Specialized Program</span>
          </div>

          <h1 className="text-balance mb-6">Senior Citizen Yoga Program</h1>

          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            Growing older doesn't mean slowing down. Our gentle, therapeutic yoga program is specifically designed for older adults to improve flexibility, balance, strength, and overall quality of life through safe, age-appropriate practices.
          </p>

          <Link
            href="#inquiry"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Your Practice Today
          </Link>
        </div>
      </section>

      {/* Why Yoga for Seniors */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-6">Yoga for Healthy Aging</h2>

          <p className="text-foreground/75 leading-relaxed mb-8">
            Aging is a natural process, but how we age matters. Many seniors experience declining balance, flexibility, and strength, which can impact independence and quality of life. Our yoga program specifically addresses these concerns through gentle, effective practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {whyYoga.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-serif font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="font-serif font-semibold text-lg mb-4">Key Health Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">What to Expect in Class</h2>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Warm-up (5-10 minutes)</h3>
              <p className="text-foreground/75">
                Gentle movements to prepare your body, improve circulation, and activate muscles safely.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Main Practice (30-40 minutes)</h3>
              <p className="text-foreground/75">
                A sequence of gentle standing and seated poses with modifications for different mobility levels. Balance poses to improve stability and prevent falls.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Cool Down & Relaxation (10 minutes)</h3>
              <p className="text-foreground/75">
                Gentle stretches and guided relaxation to calm the nervous system and promote deep rest and recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-6 text-center">Safety is Our Priority</h2>

          <div className="bg-accent/10 border border-accent/30 rounded-lg p-8">
            <p className="text-foreground/75 leading-relaxed mb-6">
              Every class is led by experienced instructors trained in working with senior populations. We provide modifications for all poses, use props for support, and encourage you to work at your own pace.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-xl">✓</span>
                <p className="text-foreground/80">All poses can be modified based on your abilities</p>
              </div>
              <div className="flex gap-4">
                <span className="text-xl">✓</span>
                <p className="text-foreground/80">We provide props like chairs, blocks, and straps for support</p>
              </div>
              <div className="flex gap-4">
                <span className="text-xl">✓</span>
                <p className="text-foreground/80">Small class sizes ensure personalized attention</p>
              </div>
              <div className="flex gap-4">
                <span className="text-xl">✓</span>
                <p className="text-foreground/80">No experience necessary - beginners welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <InquiryForm />

      <Footer />
    </main>
  )
}
