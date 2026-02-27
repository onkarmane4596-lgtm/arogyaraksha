import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { HealthImpactSection } from '@/components/health-impact-section'
import { TransformationJourney } from '@/components/transformation-journey'
import { VideoHighlight } from '@/components/video-highlight'
import { MasonryGallery } from '@/components/masonry-gallery'
import { TestimonialsSection } from '@/components/testimonials-section'
import { InquiryForm } from '@/components/inquiry-form'
import { WorkshopsSection } from '@/components/workshops-section'
import { ScrollStrip } from '@/components/scroll-strip'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Header />

      {/* Main Content */}
      <div className="flex-1 w-full">
        <HeroSection />

        <WorkshopsSection />

        <ScrollStrip />

        <TransformationJourney />

        {/* Real studio footage / atmosphere */}
        <VideoHighlight />

        <HealthImpactSection />

        {/* Creative visual picture grid representing the practice */}
        <MasonryGallery />

        {/* Social Proof mapped to the new layout */}
        <TestimonialsSection />

        {/* Final Conversion CTA */}
        <InquiryForm />
      </div>

      <Footer />
    </main>
  )
}
