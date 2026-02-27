'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Construct WhatsApp message
      const text = `*New Inquiry from Website*
*Name:* ${formData.name}
*Phone:* ${formData.phone}${formData.email ? `\n*Email:* ${formData.email}` : ''}
*Area of Interest:* ${formData.program || 'Not specified'}
*Message:* ${formData.message || 'No message provided'}`

      const encodedText = encodeURIComponent(text)
      // Change this number to your actual WhatsApp number
      const whatsappNumber = '917030705472'
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank')

      // Show success state
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', program: '', message: '' })
      }, 4000)
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
      alert('Failed to redirect to WhatsApp. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
      {/* Background Decor - Organic Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/40 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Side: Text & Process */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600 block mb-4">Take the First Step</span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight">
                Start Your Healing <br /><span className="italic font-light text-slate-400">Journey.</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              We are here to listen. Whether you have questions about our therapy programs or want to book a trial class, reaching out is the first step toward lasting wellness.
            </p>

            <div className="space-y-8 pt-4">
              {[
                { step: "1", title: "Inquiry", desc: "Share your health concerns and goals with us." },
                { step: "2", title: "Wait for Call", desc: "Our therapists will call you to discuss the best path." },
                { step: "3", title: "Practice", desc: "Begin your personalized, therapeutic yoga journey." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-slate-100 flex-shrink-0 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <span className="font-sans text-xl text-slate-900 group-hover:text-white font-bold">{item.step}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="font-sans text-xl text-slate-900 mb-1 font-bold">{item.title}</h4>
                    <p className="text-slate-500 font-light text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form (Elevated Clean Card) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/60 border border-slate-100 space-y-6 relative overflow-hidden"
            >
              {submitted ? (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-sans text-slate-900 mb-2 font-bold">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all font-light text-slate-900 placeholder:text-slate-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all font-light text-slate-900 placeholder:text-slate-300"
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all font-light text-slate-900 placeholder:text-slate-300"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2.5">
                <label htmlFor="program" className="text-sm font-bold text-slate-700 ml-1">Area of Interest</label>
                <div className="relative">
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all font-light text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-300">Select a program...</option>
                    <option value="daily-yoga" className="bg-white">Daily Yoga Batches</option>
                    <option value="pcos" className="bg-white">PCOS / Hormonal Therapy</option>
                    <option value="senior" className="bg-white">Senior Citizen Yoga</option>
                    <option value="weight-loss" className="bg-white">Weight Loss Program</option>
                    <option value="therapy" className="bg-white">Medical Yoga Therapy</option>
                    <option value="workshop" className="bg-white">Workshops</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 transition-all font-light text-slate-900 placeholder:text-slate-300 resize-none"
                  placeholder="Tell us about any health concerns, goals, or preferred timings..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold tracking-widest uppercase shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-2xl transition-all disabled:opacity-70 flex items-center justify-center gap-3 overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 font-light">
                By submitting this form, you agree to our contact terms. We respect your privacy.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
