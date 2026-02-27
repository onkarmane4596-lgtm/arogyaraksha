import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { InquiryForm } from '@/components/inquiry-form'
import { CheckCircle, Brain } from 'lucide-react'

export const metadata = {
  title: 'Stress Relief & Mindfulness Yoga | Arogya Raksha',
  description: 'Calming yoga practices, breathing techniques, and meditation to reduce stress, anxiety, and improve mental clarity.',
}

export default function StressReliefPage() {
  const benefits = [
    'Reduced cortisol levels and stress hormones',
    'Improved anxiety management',
    'Better sleep quality and deep rest',
    'Enhanced mental clarity and focus',
    'Emotional regulation and resilience',
    'Reduced muscle tension and pain',
    'Improved overall mood and well-being',
    'Greater sense of inner peace',
  ]

  const practices = [
    {
      name: 'Yoga Asanas',
      description: 'Gentle, grounding poses specifically chosen to calm the nervous system and release stored tension.',
    },
    {
      name: 'Pranayama (Breathing)',
      description: 'Powerful yet simple breathing techniques that instantly calm the mind and activate the parasympathetic nervous system.',
    },
    {
      name: 'Meditation',
      description: 'Guided meditation practices to quiet mental chatter and cultivate inner stillness and awareness.',
    },
    {
      name: 'Mindfulness',
      description: 'Practical mindfulness techniques for daily life to respond consciously rather than react to stressors.',
    },
    {
      name: 'Yoga Nidra',
      description: 'Deep guided relaxation technique for profound rest and nervous system reset.',
    },
    {
      name: 'Mantra & Sound',
      description: 'Healing mantras and sound vibrations to elevate consciousness and promote well-being.',
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
          <span className="text-foreground/70">Stress Relief & Mindfulness</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-background">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Brain className="text-emerald-500" size={32} />
            <span className="text-primary font-semibold">Specialized Program</span>
          </div>

          <h1 className="text-balance mb-6">Stress Relief & Mindfulness</h1>

          <p className="text-lg text-foreground/75 leading-relaxed mb-8">
            In our fast-paced, demanding world, stress has become a constant companion. Our therapeutic stress relief program provides you with practical, ancient tools to calm your mind, soothe your nervous system, and cultivate lasting inner peace.
          </p>

          <Link
            href="#inquiry"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Find Your Inner Peace
          </Link>
        </div>
      </section>

      {/* Understanding Stress */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-6">The Impact of Chronic Stress</h2>

          <p className="text-foreground/75 leading-relaxed mb-8">
            Stress isn't just a mental experience—it's a physical state that affects every system in your body. When we're in chronic stress, our nervous system stays activated in "fight or flight" mode, leading to anxiety, sleep problems, muscle tension, weakened immunity, and a cascade of health issues.
          </p>

          <p className="text-foreground/75 leading-relaxed mb-12">
            The good news? Ancient yoga practices work directly on the nervous system, shifting you from stress and anxiety into a state of calm, rest, and resilience. These aren't just relaxation techniques—they're proven therapeutic tools for mental and emotional wellness.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="font-serif font-semibold text-lg mb-6">How Stress Relief Yoga Helps</h3>
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

      {/* Our Practices */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">Therapeutic Tools & Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors">
                <h3 className="font-serif font-semibold mb-3 text-foreground">{practice.name}</h3>
                <p className="text-foreground/70 text-sm">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Weekly Journey */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">What Your Week Looks Like</h2>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Class Sessions (2-3x per week)</h3>
              <p className="text-foreground/75">
                Live or recorded guided classes combining gentle yoga, pranayama, and meditation. Each session is designed to progressively deepen your practice.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Daily Practice (15-30 minutes)</h3>
              <p className="text-foreground/75">
                Simple home practices you can do any time—perfect for busy mornings or stressful evenings. We provide guided recordings for easy implementation.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Mindfulness Integration</h3>
              <p className="text-foreground/75">
                Practical techniques to bring mindfulness into your daily life—at work, with family, during meals, or any moment when stress arises.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="font-serif font-semibold text-lg mb-3">Personalized Guidance</h3>
              <p className="text-foreground/75">
                One-on-one consultations to understand your stress triggers and create a personalized practice plan tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container max-w-3xl">
          <h2 className="text-balance mb-12 text-center">Real Transformations</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-primary/20">
              <p className="text-foreground/75 italic mb-4">
                "After just two weeks of practice, I noticed I could handle work stress without getting anxious. I sleep better and feel calmer throughout the day."
              </p>
              <p className="font-semibold text-foreground">— Anjali, Software Professional</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-primary/20">
              <p className="text-foreground/75 italic mb-4">
                "I've been in therapy for anxiety for years. These yoga practices have given me tools that work immediately. Life feels more manageable now."
              </p>
              <p className="font-semibold text-foreground">— Rohan, Executive</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-primary/20">
              <p className="text-foreground/75 italic mb-4">
                "The meditation and breathing techniques have become my go-to for stress. I recommend this program to everyone I know."
              </p>
              <p className="font-semibold text-foreground">— Deepika, Entrepreneur</p>
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
