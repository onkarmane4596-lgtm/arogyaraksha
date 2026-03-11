import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'

import { TransformationJourney } from '@/components/transformation-journey'

import { MasonryGallery } from '@/components/masonry-gallery'
import { TestimonialsSection } from '@/components/testimonials-section'
import { InquiryForm } from '@/components/inquiry-form'
import { FeaturedBatches } from '@/components/featured-batches'
import { WorkshopsSection } from '@/components/workshops-section'
import { ScrollStrip } from '@/components/scroll-strip'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Header />

      {/* Main Content */}
      <div className="flex-1 w-full overflow-hidden">
        <HeroSection />

        <FeaturedBatches />

        <WorkshopsSection />

        <ScrollStrip />

        <TransformationJourney />


        {/* Creative visual picture grid representing the practice */}
        <MasonryGallery />

        {/* Social Proof mapped to the new layout */}
        <TestimonialsSection />

        {/* Final Conversion CTA */}
        <InquiryForm />

        {/* SEO Service Areas - Internal Linking */}
        <section className="py-12 border-t border-primary/5 bg-muted/20">
          <div className="container px-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-primary/60 font-bold mb-8 text-center italic">Serving Health Across Pune</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-foreground/60">
              <Link href="/best-yoga-classes-pimple-saudagar" className="hover:text-primary transition-colors">Pimple Saudagar</Link>
              <Link href="/best-yoga-classes-wakad" className="hover:text-primary transition-colors">Wakad</Link>
              <Link href="/best-yoga-classes-pimpri-chinchwad" className="hover:text-primary transition-colors">Pimpri Chinchwad</Link>
              <Link href="/yoga-classes-pune" className="hover:text-primary transition-colors font-bold text-primary/80 underline decoration-primary/20 underline-offset-4">Best Yoga Pune</Link>
              <Link href="/pcod-yoga-pune" className="hover:text-primary transition-colors">PCOD Yoga Pune</Link>
              <Link href="/weight-loss-yoga-pune" className="hover:text-primary transition-colors">Weight Loss Pune</Link>
              <Link href="/online-pcod-yoga-classes" className="hover:text-primary transition-colors">Online PCOD Classes</Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
