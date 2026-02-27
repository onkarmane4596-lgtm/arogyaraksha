import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { CheckCircle, Zap } from 'lucide-react'

export const metadata = {
  title: 'Weight Loss Yoga Program | Arogya Raksha',
  description: 'Comprehensive weight loss program combining dynamic yoga, metabolic training, nutrition coaching, and mindfulness.',
}

export default function WeightLossPage() {
  const components = [
    'Dynamic flow yoga for calorie burn',
    'Metabolism-boosting exercises',
    'Personalized nutrition planning',
    'Mindfulness and stress management',
    'Lifestyle habit transformation',
    'Progress tracking and support',
    'Community and accountability',
    'Long-term wellness strategies',
  ]

  const approach = [
    {
      phase: 'Phase 1',
      weeks: 'Weeks 1-4',
      focus: 'Foundation & Detox',
      details: 'Build foundational strength, cleanse through targeted yoga flows, establish healthy eating patterns, and understand your body\'s needs.',
    },
    {
      phase: 'Phase 2',
      weeks: 'Weeks 5-8',
      focus: 'Activation & Acceleration',
      details: 'Increase intensity with dynamic flows, boost metabolism, refine nutrition habits, and build consistency in your practice.',
    },
    {
      phase: 'Phase 3',
      weeks: 'Weeks 9-12',
      focus: 'Integration & Transformation',
      details: 'Master advanced techniques, achieve visible results, solidify sustainable habits, and plan your long-term wellness journey.',
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
          <span className="text-foreground/70">Weight Loss Program</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 to-background">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="text-amber-500" size={32} />
            <span className="text-primary font-semibold">Specialized Program</span>
          </div>

          <h1 className="text-balance mb-6">Weight Loss & Wellness Program</h1>

          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            Sustainable weight loss isn't just about the scale—it's about transforming your body, mind, and lifestyle. Our comprehensive program combines dynamic yoga, metabolic training, nutrition coaching, and mindfulness to help you achieve lasting results and genuine wellness.
          </p>

          <Link
            href="#inquiry"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Begin Your Transformation
          </Link>
        </div>
      </section>

      {/* Why This Program */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-6">Beyond the Scale: True Wellness</h2>

          <p className="text-foreground/75 leading-relaxed mb-8">
            Most weight loss programs focus only on calorie counting and restriction, leading to temporary results and rebound weight gain. Our approach is different. We address the root causes of weight gain—stress, poor eating habits, lack of movement, and emotional imbalances—through a holistic, sustainable practice.
          </p>

          <p className="text-foreground/75 leading-relaxed mb-12">
            Our clients don't just lose weight; they gain strength, confidence, energy, and a genuine love for their bodies. They develop sustainable habits that last a lifetime, not just until the next diet trend.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="font-serif font-semibold text-lg mb-6">Your Complete Transformation Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {components.map((component, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground/80 text-sm">{component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12-Week Program */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">12-Week Progressive Program</h2>

          <div className="space-y-6">
            {approach.map((phase, index) => (
              <div key={index} className="bg-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif font-semibold text-lg text-primary mb-1">{phase.phase}</h3>
                    <p className="text-sm text-foreground/60">{phase.weeks}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary/20">{index + 1}</span>
                </div>

                <h4 className="font-semibold mb-3 text-foreground">{phase.focus}</h4>
                <p className="text-foreground/75">{phase.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">Why Our Program Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif font-semibold mb-3">Holistic Approach</h3>
              <p className="text-foreground/70 text-sm">
                We address physical fitness, nutrition, mental health, and emotional wellness as one integrated system.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif font-semibold mb-3">Sustainable Change</h3>
              <p className="text-foreground/70 text-sm">
                No fad diets or extreme restrictions. We build habits that naturally support your weight loss and health goals.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif font-semibold mb-3">Expert Guidance</h3>
              <p className="text-foreground/70 text-sm">
                Our instructors bring years of experience in yoga, nutrition, and wellness coaching specifically for weight loss.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-serif font-semibold mb-3">Ongoing Support</h3>
              <p className="text-foreground/70 text-sm">
                Get continuous guidance, community support, and accountability throughout your 12-week journey and beyond.
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
