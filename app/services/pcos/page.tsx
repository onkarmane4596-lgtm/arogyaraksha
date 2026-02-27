import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { CheckCircle, Heart } from 'lucide-react'

export const metadata = {
  title: 'PCOS Therapy Yoga Program | Arogya Raksha',
  description: 'Specialized therapeutic yoga program for PCOS management combining yoga, nutrition guidance, and holistic wellness practices.',
}

export default function PCOSPage() {
  const benefits = [
    'Hormone balancing through targeted asanas',
    'Improved insulin sensitivity',
    'Reduced PCOS symptoms naturally',
    'Weight management support',
    'Better ovulation regularity',
    'Stress reduction and emotional wellness',
    'Personalized nutrition coaching',
    'Comprehensive lifestyle transformation',
  ]

  const program = [
    {
      week: '1-2',
      title: 'Assessment & Foundation',
      description: 'Initial consultation, health assessment, and introduction to foundational yoga poses adapted for PCOS management.',
    },
    {
      week: '3-8',
      title: 'Hormone Balancing Phase',
      description: 'Progressive yoga practice focusing on poses that stimulate hormonal glands, combined with breathing techniques.',
    },
    {
      week: '9-12',
      title: 'Integration & Lifestyle',
      description: 'Advanced poses, meditation practices, nutrition planning, and creating sustainable wellness habits.',
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
          <span className="text-foreground/70">PCOS Therapy</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-rose-50/50 to-background">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Heart className="text-rose-500" size={32} />
            <span className="text-primary font-semibold">Specialized Program</span>
          </div>

          <h1 className="text-balance mb-6">PCOS Therapy Program</h1>

          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            Managing PCOS doesn't have to be overwhelming. Our specialized therapeutic yoga program combines scientifically-proven yoga poses, breathing techniques, nutrition guidance, and holistic wellness practices to help you regain control of your health and reclaim your vitality.
          </p>

          <Link
            href="#inquiry"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>

      {/* Understanding PCOS Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-6">Understanding PCOS</h2>

          <p className="text-foreground/75 leading-relaxed mb-6">
            Polycystic Ovary Syndrome (PCOS) affects millions of women worldwide and can impact fertility, metabolism, and overall quality of life. While PCOS is a complex condition requiring comprehensive management, therapeutic yoga has been shown through research to be an effective complement to medical treatment.
          </p>

          <p className="text-foreground/75 leading-relaxed mb-8">
            Our program addresses the root causes of PCOS through mindful yoga practice, helping to regulate hormones, improve insulin sensitivity, reduce inflammation, and support sustainable lifestyle changes.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
            <h3 className="font-serif font-semibold text-lg mb-4">How Our Program Helps</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">12-Week Program Structure</h2>

          <div className="space-y-8">
            {program.map((phase, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-semibold text-center text-sm">
                      Week<br />{phase.week}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-lg mb-2">{phase.title}</h3>
                    <p className="text-foreground/75">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">Why Choose Arogya Raksha?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-serif font-semibold mb-3">Expert Guidance</h4>
              <p className="text-foreground/70 text-sm">
                Our instructors have extensive experience working with PCOS and understand the unique challenges you face.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-serif font-semibold mb-3">Holistic Approach</h4>
              <p className="text-foreground/70 text-sm">
                We address not just the physical symptoms but also the emotional and nutritional aspects of PCOS management.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-serif font-semibold mb-3">Personalization</h4>
              <p className="text-foreground/70 text-sm">
                Every body is unique. We customize the program based on your specific needs and health goals.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-serif font-semibold mb-3">Ongoing Support</h4>
              <p className="text-foreground/70 text-sm">
                Get continuous guidance, motivation, and adjustments throughout your 12-week journey.
              </p>
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
