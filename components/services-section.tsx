import Link from 'next/link'
import { Heart, Users, Zap, Brain } from 'lucide-react'

const services = [
  {
    id: 'pcos',
    title: 'PCOS Therapy',
    description: 'Specialized yoga and wellness program designed to manage PCOS symptoms through hormone-balancing asanas, nutrition guidance, and holistic lifestyle practices.',
    icon: Heart,
    color: 'text-rose-500',
    href: '/services/pcos',
  },
  {
    id: 'senior',
    title: 'Senior Citizen Yoga',
    description: 'Gentle, therapeutic yoga classes tailored for older adults to improve flexibility, balance, bone health, and overall wellness with modifications for every level.',
    icon: Users,
    color: 'text-blue-500',
    href: '/services/senior',
  },
  {
    id: 'weight',
    title: 'Weight Loss Program',
    description: 'Comprehensive program combining dynamic yoga, metabolic training, nutrition coaching, and mindfulness to achieve sustainable weight loss and fitness goals.',
    icon: Zap,
    color: 'text-amber-500',
    href: '/services/weight-loss',
  },
  {
    id: 'stress',
    title: 'Stress Relief & Mindfulness',
    description: 'Calming yoga practices, breathing techniques, and meditation to reduce stress, anxiety, and improve mental clarity and emotional well-being.',
    icon: Brain,
    color: 'text-emerald-500',
    href: '/services/stress-relief',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-10">
          <h2 className="text-balance mb-4">Our Specialized Programs</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Each program is carefully designed to address specific wellness needs and challenges,
            combining ancient yogic wisdom with modern therapeutic science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-card rounded-lg md:rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className={`${service.color} mb-2 md:mb-3 inline-block p-2 md:p-2.5 bg-background rounded-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 md:w-5 md:h-5" />
                </div>

                <h3 className="font-serif text-sm md:text-xl font-semibold mb-1.5 md:mb-3 text-foreground leading-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-foreground/70 text-[10px] sm:text-[12px] md:text-sm leading-relaxed mb-3 md:mb-4 flex-grow line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p>

                <div className="mt-auto inline-flex items-center gap-1.5 md:gap-2 text-primary font-medium text-[9px] md:text-sm group-hover:gap-2.5 transition-all">
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
